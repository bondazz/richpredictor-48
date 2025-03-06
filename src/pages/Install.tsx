
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const Install = () => {
  const [dbHost, setDbHost] = useState('');
  const [dbName, setDbName] = useState('');
  const [dbUser, setDbUser] = useState('');
  const [dbPassword, setDbPassword] = useState('');
  const [isInstalling, setIsInstalling] = useState(false);

  const handleInstall = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsInstalling(true);

    try {
      // In a real implementation, this would connect to the server to set up the database
      // For this demo, we'll simulate a successful installation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store configuration in localStorage (in a real app, this would be stored securely on the server)
      localStorage.setItem('dbConfigured', 'true');
      localStorage.setItem('dbConfig', JSON.stringify({
        host: dbHost,
        database: dbName,
        user: dbUser,
        // We wouldn't store the password in localStorage in a real app
      }));
      
      toast({
        title: "Installation successful",
        description: "Your application has been successfully configured.",
      });
      
      // Redirect to home page
      window.location.href = '/';
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Installation failed",
        description: "There was an error connecting to the database.",
      });
    } finally {
      setIsInstalling(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-richnavy-50/30">
      <Card className="w-[450px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Installation</CardTitle>
          <CardDescription className="text-center">
            Configure your database connection to complete installation
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleInstall}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="dbHost" className="text-sm font-medium">
                Database Host
              </label>
              <Input
                id="dbHost"
                placeholder="localhost"
                value={dbHost}
                onChange={(e) => setDbHost(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="dbName" className="text-sm font-medium">
                Database Name
              </label>
              <Input
                id="dbName"
                placeholder="my_database"
                value={dbName}
                onChange={(e) => setDbName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="dbUser" className="text-sm font-medium">
                Database User
              </label>
              <Input
                id="dbUser"
                placeholder="username"
                value={dbUser}
                onChange={(e) => setDbUser(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="dbPassword" className="text-sm font-medium">
                Database Password
              </label>
              <Input
                id="dbPassword"
                type="password"
                placeholder="••••••••"
                value={dbPassword}
                onChange={(e) => setDbPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              This information will be used to configure your MySQL database connection.
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isInstalling}>
              {isInstalling ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Installing...
                </>
              ) : (
                "Install"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Install;
