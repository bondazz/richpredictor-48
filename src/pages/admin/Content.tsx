
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Content = () => {
  const handleSave = () => {
    toast({
      title: "Content saved",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <AdminLayout title="Content Management">
      <Tabs defaultValue="home">
        <TabsList className="mb-4">
          <TabsTrigger value="home">Home Page</TabsTrigger>
          <TabsTrigger value="about">About Page</TabsTrigger>
          <TabsTrigger value="partners">Partners Page</TabsTrigger>
          <TabsTrigger value="premium">Premium Page</TabsTrigger>
          <TabsTrigger value="info">Info Page</TabsTrigger>
          <TabsTrigger value="contact">Contact Page</TabsTrigger>
          <TabsTrigger value="footer">Footer</TabsTrigger>
        </TabsList>
        
        <TabsContent value="home" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Main Heading</label>
                <Input defaultValue="Expert Football Predictions & Analysis" />
              </div>
              <div>
                <label className="text-sm font-medium">Sub Heading</label>
                <Input defaultValue="Get winning insights with our match predictions, betting tips, and exclusive analysis from football experts." />
              </div>
              <div>
                <label className="text-sm font-medium">Premium Match Date</label>
                <Input defaultValue="06.06.2025" />
              </div>
              <div>
                <label className="text-sm font-medium">Premium Match Odd</label>
                <Input defaultValue="13.2" type="number" step="0.1" />
              </div>
              <div>
                <label className="text-sm font-medium">Premium Match Price</label>
                <Input defaultValue="340" type="number" />
              </div>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Prediction Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Free Football Predictions Title</label>
                <Input defaultValue="Free Football Predictions" />
              </div>
              <div>
                <label className="text-sm font-medium">Under/Over Predictions Title</label>
                <Input defaultValue="Under/Over Predictions" />
              </div>
              <div>
                <label className="text-sm font-medium">Correct Score Predictions Title</label>
                <Input defaultValue="Correct Score Predictions" />
              </div>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About Page Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Page Title</label>
                <Input defaultValue="About Us" />
              </div>
              <div>
                <label className="text-sm font-medium">Main Content</label>
                <Textarea 
                  rows={10}
                  defaultValue="Welcome to our football prediction service. We provide expert analysis and predictions for football matches across major leagues. Our team of experts analyzes statistics, form, and other factors to bring you the most accurate predictions possible." 
                />
              </div>
              <div>
                <label className="text-sm font-medium">Mission Statement</label>
                <Textarea 
                  rows={3}
                  defaultValue="To provide reliable and accurate football predictions to help our users make informed decisions." 
                />
              </div>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Similar content for other tabs would be implemented here */}
        <TabsContent value="partners" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Partners Page Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p>Partners page content editor would be here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="premium" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Premium Page Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p>Premium page content editor would be here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="info" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Info Page Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p>Info page content editor would be here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Page Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p>Contact page content editor would be here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="footer" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Footer Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p>Footer content editor would be here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default Content;
