
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Database, Shield, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from '@/components/ui/label';

const Settings = () => {
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <AdminLayout title="Settings">
      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="admin">Admin Account</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Site Name</label>
                <Input defaultValue="RichPredict" />
              </div>
              <div>
                <label className="text-sm font-medium">Site URL</label>
                <Input defaultValue="https://richpredict.com" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="maintenance" />
                <Label htmlFor="maintenance">Maintenance Mode</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="registration" />
                <Label htmlFor="registration">Allow User Registration</Label>
              </div>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save General Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="database" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-5 w-5" />
                Database Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Database Host</label>
                <Input defaultValue="localhost" />
              </div>
              <div>
                <label className="text-sm font-medium">Database Name</label>
                <Input defaultValue="richpredict_db" />
              </div>
              <div>
                <label className="text-sm font-medium">Database User</label>
                <Input defaultValue="db_user" />
              </div>
              <div>
                <label className="text-sm font-medium">Database Password</label>
                <Input type="password" defaultValue="••••••••" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="db_backup" />
                <Label htmlFor="db_backup">Daily Database Backup</Label>
              </div>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save Database Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="admin" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Admin Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Admin Username</label>
                <Input defaultValue="admin" />
              </div>
              <div>
                <label className="text-sm font-medium">Admin Email</label>
                <Input defaultValue="admin@richpredict.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Current Password</label>
                <Input type="password" placeholder="Enter current password" />
              </div>
              <div>
                <label className="text-sm font-medium">New Password</label>
                <Input type="password" placeholder="Enter new password" />
              </div>
              <div>
                <label className="text-sm font-medium">Confirm New Password</label>
                <Input type="password" placeholder="Confirm new password" />
              </div>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Update Admin Account
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default Settings;
