
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Eye, MessageSquare, Users, Trophy } from 'lucide-react';

const statsCards = [
  {
    title: "Total Predictions",
    value: "124",
    description: "10% increase from last month",
    icon: Trophy,
    trend: "up"
  },
  {
    title: "Active Users",
    value: "2,453",
    description: "5% increase from last month",
    icon: Users,
    trend: "up"
  },
  {
    title: "Total Views",
    value: "45.2K",
    description: "3% decrease from last month",
    icon: Eye,
    trend: "down"
  },
  {
    title: "User Comments",
    value: "342",
    description: "12% increase from last month",
    icon: MessageSquare,
    trend: "up"
  }
];

const Dashboard = () => {
  return (
    <AdminLayout title="Dashboard">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((card, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                {card.trend === "up" ? (
                  <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
                ) : (
                  <ArrowDown className="h-3 w-3 mr-1 text-red-500" />
                )}
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Predictions</CardTitle>
            <CardDescription>
              Top performing predictions in the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">Man City vs Liverpool</p>
                    <p className="text-sm text-muted-foreground">Premier League • Home Win</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">1.85</p>
                    <p className="text-xs text-green-600">Won</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>
              Recent user engagement metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <span className="text-sm">New Registrations</span>
                  <span className="text-sm font-medium">86</span>
                </div>
                <div className="w-full bg-richgray-100 rounded-full h-2">
                  <div className="bg-richorange h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <span className="text-sm">Returning Users</span>
                  <span className="text-sm font-medium">324</span>
                </div>
                <div className="w-full bg-richgray-100 rounded-full h-2">
                  <div className="bg-richorange h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <span className="text-sm">Bookmarks</span>
                  <span className="text-sm font-medium">112</span>
                </div>
                <div className="w-full bg-richgray-100 rounded-full h-2">
                  <div className="bg-richorange h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <span className="text-sm">Comments</span>
                  <span className="text-sm font-medium">89</span>
                </div>
                <div className="w-full bg-richgray-100 rounded-full h-2">
                  <div className="bg-richorange h-2 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
