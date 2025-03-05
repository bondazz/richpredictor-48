
import React, { ReactNode, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { BarChart3, Calendar, LogOut, PlusCircle, Settings, Users } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const navigate = useNavigate();
  
  // Check if user is authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminUser');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate('/admin/login');
  };

  const user = JSON.parse(localStorage.getItem('adminUser') || '{"name": "Admin"}');

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-richnavy-50/10">
        <AdminSidebar handleLogout={handleLogout} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white border-b border-richgray-100 shadow-sm">
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <SidebarTrigger className="mr-4" />
                <h1 className="text-2xl font-bold">{title}</h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.role || 'Administrator'}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

interface AdminSidebarProps {
  handleLogout: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ handleLogout }) => {
  return (
    <Sidebar className="border-r border-richgray-100">
      <SidebarContent>
        <div className="p-4">
          <Link to="/">
            <h2 className="text-xl font-bold text-richorange">BetPredictor</h2>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </Link>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/admin/dashboard">
                    <BarChart3 className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/admin/predictions">
                    <Calendar className="h-4 w-4" />
                    <span>Predictions</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/admin/users">
                    <Users className="h-4 w-4" />
                    <span>Users</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/admin/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="p-4 border-t border-richgray-100 mt-auto">
        <Button variant="outline" className="w-full" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </Sidebar>
  );
};

export default AdminLayout;
