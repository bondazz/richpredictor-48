
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const SEO = () => {
  const handleSave = () => {
    toast({
      title: "SEO settings saved",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <AdminLayout title="SEO Settings">
      <Tabs defaultValue="global">
        <TabsList className="mb-4">
          <TabsTrigger value="global">Global SEO</TabsTrigger>
          <TabsTrigger value="home">Home Page</TabsTrigger>
          <TabsTrigger value="about">About Page</TabsTrigger>
          <TabsTrigger value="partners">Partners Page</TabsTrigger>
          <TabsTrigger value="premium">Premium Page</TabsTrigger>
          <TabsTrigger value="info">Info Page</TabsTrigger>
          <TabsTrigger value="contact">Contact Page</TabsTrigger>
        </TabsList>
        
        <TabsContent value="global" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Global SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Site Name</label>
                <Input defaultValue="RichPredict - Football Predictions & Betting Tips" />
              </div>
              <div>
                <label className="text-sm font-medium">Default Meta Description</label>
                <Textarea 
                  rows={3}
                  defaultValue="Get expert football predictions, betting tips and analysis for matches from all major leagues. Free and premium predictions available." 
                />
              </div>
              <div>
                <label className="text-sm font-medium">Default Keywords</label>
                <Input defaultValue="football predictions, betting tips, soccer predictions, football betting" />
              </div>
              <div>
                <label className="text-sm font-medium">Favicon</label>
                <div className="flex items-center gap-2">
                  <Input type="file" />
                  <div className="w-10 h-10 bg-richgray-100 flex items-center justify-center rounded">
                    <span className="text-xs">Icon</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Google Analytics ID</label>
                <Input placeholder="UA-XXXXXXXX-X or G-XXXXXXXXXX" />
              </div>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save Global Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="home" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Home Page SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Meta Title</label>
                <Input defaultValue="RichPredict - Expert Football Predictions & Betting Tips" />
              </div>
              <div>
                <label className="text-sm font-medium">Meta Description</label>
                <Textarea 
                  rows={3}
                  defaultValue="Get winning insights with our expert football predictions, betting tips, and exclusive analysis from football experts. Free and premium picks available." 
                />
              </div>
              <div>
                <label className="text-sm font-medium">Keywords</label>
                <Input defaultValue="football predictions, betting tips, premium predictions, free predictions" />
              </div>
              <div>
                <label className="text-sm font-medium">Open Graph Image</label>
                <div className="flex items-center gap-2">
                  <Input type="file" />
                  <div className="w-20 h-10 bg-richgray-100 flex items-center justify-center rounded">
                    <span className="text-xs">OG Image</span>
                  </div>
                </div>
              </div>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save Home Page SEO
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Similar content for other tabs would be implemented here */}
        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About Page SEO</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p>About page SEO settings would be here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="partners" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Partners Page SEO</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p>Partners page SEO settings would be here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="premium" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Premium Page SEO</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p>Premium page SEO settings would be here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="info" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Info Page SEO</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p>Info page SEO settings would be here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Page SEO</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p>Contact page SEO settings would be here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default SEO;
