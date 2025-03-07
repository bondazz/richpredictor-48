
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useSettings } from '../../contexts/SettingsContext';

const Content = () => {
  const { settings, updateSettings } = useSettings();

  const handleHomePageSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    updateSettings({
      homeHeroTitle: formData.get('mainHeading') as string,
      homeHeroSubtitle: formData.get('subHeading') as string,
      premiumMatchDate: formData.get('premiumMatchDate') as string,
      premiumMatchOdd: Number(formData.get('premiumMatchOdd')),
      premiumMatchPrice: Number(formData.get('premiumMatchPrice')),
    });
    
    toast({
      title: "Home page content saved",
      description: "Your changes have been saved and will be visible on the site.",
    });
  };

  const handleCategoriesSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    updateSettings({
      freePredictionsTitle: formData.get('freePredictionsTitle') as string,
      underOverPredictionsTitle: formData.get('underOverPredictionsTitle') as string,
      correctScorePredictionsTitle: formData.get('correctScorePredictionsTitle') as string,
    });
    
    toast({
      title: "Categories saved",
      description: "Your changes have been saved and will be visible on the site.",
    });
  };

  const handleAboutSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    updateSettings({
      aboutPageTitle: formData.get('aboutPageTitle') as string,
      aboutPageContent: formData.get('aboutPageContent') as string,
      aboutPageMission: formData.get('aboutPageMission') as string,
    });
    
    toast({
      title: "About page content saved",
      description: "Your changes have been saved and will be visible on the site.",
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
              <form onSubmit={handleHomePageSave} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Main Heading</label>
                  <Input 
                    name="mainHeading"
                    defaultValue={settings.homeHeroTitle} 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Sub Heading</label>
                  <Input 
                    name="subHeading"
                    defaultValue={settings.homeHeroSubtitle} 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Premium Match Date</label>
                  <Input 
                    name="premiumMatchDate"
                    defaultValue={settings.premiumMatchDate} 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Premium Match Odd</label>
                  <Input 
                    name="premiumMatchOdd"
                    defaultValue={settings.premiumMatchOdd.toString()} 
                    type="number" 
                    step="0.1" 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Premium Match Price</label>
                  <Input 
                    name="premiumMatchPrice"
                    defaultValue={settings.premiumMatchPrice.toString()} 
                    type="number" 
                  />
                </div>
                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Prediction Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleCategoriesSave} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Free Football Predictions Title</label>
                  <Input 
                    name="freePredictionsTitle"
                    defaultValue={settings.freePredictionsTitle} 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Under/Over Predictions Title</label>
                  <Input 
                    name="underOverPredictionsTitle"
                    defaultValue={settings.underOverPredictionsTitle} 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Correct Score Predictions Title</label>
                  <Input 
                    name="correctScorePredictionsTitle"
                    defaultValue={settings.correctScorePredictionsTitle} 
                  />
                </div>
                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About Page Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleAboutSave} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Page Title</label>
                  <Input 
                    name="aboutPageTitle"
                    defaultValue={settings.aboutPageTitle} 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Main Content</label>
                  <Textarea 
                    name="aboutPageContent"
                    rows={10}
                    defaultValue={settings.aboutPageContent} 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Mission Statement</label>
                  <Textarea 
                    name="aboutPageMission"
                    rows={3}
                    defaultValue={settings.aboutPageMission} 
                  />
                </div>
                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </form>
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
