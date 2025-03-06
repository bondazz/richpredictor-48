
import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from '@/hooks/use-toast';
import { PlusCircle, Edit, Trash, Calendar, Save } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const Predictions = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingPrediction, setEditingPrediction] = useState<any>(null);

  // Sample predictions
  const [predictions, setPredictions] = useState([
    { id: 1, homeTeam: 'Arsenal', awayTeam: 'Chelsea', league: 'Premier League', date: '2025-05-01', prediction: 'Home Win', odd: 2.1, premium: false },
    { id: 2, homeTeam: 'Barcelona', awayTeam: 'Real Madrid', league: 'La Liga', date: '2025-05-02', prediction: 'Under 2.5', odd: 1.9, premium: true },
    { id: 3, homeTeam: 'Bayern', awayTeam: 'Dortmund', league: 'Bundesliga', date: '2025-05-03', prediction: 'Correct Score 2-1', odd: 8.5, premium: true },
  ]);

  const handleAdd = () => {
    // In a real app, this would add the prediction to the database
    setIsAddDialogOpen(false);
    toast({
      title: "Prediction added",
      description: "New prediction has been added successfully.",
    });
  };

  const handleEdit = () => {
    // In a real app, this would update the prediction in the database
    setIsEditDialogOpen(false);
    toast({
      title: "Prediction updated",
      description: "Prediction has been updated successfully.",
    });
  };

  const handleDelete = (id: number) => {
    // In a real app, this would delete the prediction from the database
    setPredictions(predictions.filter(p => p.id !== id));
    toast({
      title: "Prediction deleted",
      description: "Prediction has been deleted successfully.",
    });
  };

  const openEditDialog = (prediction: any) => {
    setEditingPrediction(prediction);
    setIsEditDialogOpen(true);
  };

  return (
    <AdminLayout title="Prediction Management">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>All Predictions</span>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Prediction
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Input placeholder="Search predictions..." className="w-64" />
              <Button variant="outline">Search</Button>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by league" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Leagues</SelectItem>
                  <SelectItem value="premier">Premier League</SelectItem>
                  <SelectItem value="laliga">La Liga</SelectItem>
                  <SelectItem value="bundesliga">Bundesliga</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Match</TableHead>
                  <TableHead>League</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Prediction</TableHead>
                  <TableHead>Odd</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {predictions.map((prediction) => (
                  <TableRow key={prediction.id}>
                    <TableCell>{prediction.id}</TableCell>
                    <TableCell>{prediction.homeTeam} vs {prediction.awayTeam}</TableCell>
                    <TableCell>{prediction.league}</TableCell>
                    <TableCell>{prediction.date}</TableCell>
                    <TableCell>{prediction.prediction}</TableCell>
                    <TableCell>{prediction.odd}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        prediction.premium 
                          ? 'bg-richorange/10 text-richorange' 
                          : 'bg-richnavy-50 text-richnavy-700'
                      }`}>
                        {prediction.premium ? 'Premium' : 'Free'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={() => openEditDialog(prediction)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(prediction.id)}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      {/* Add Prediction Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Prediction</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Home Team</label>
                <Input placeholder="Home Team" />
              </div>
              <div>
                <label className="text-sm font-medium">Away Team</label>
                <Input placeholder="Away Team" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">League</label>
                <Select defaultValue="premier">
                  <SelectTrigger>
                    <SelectValue placeholder="Select league" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="premier">Premier League</SelectItem>
                    <SelectItem value="laliga">La Liga</SelectItem>
                    <SelectItem value="bundesliga">Bundesliga</SelectItem>
                    <SelectItem value="seriea">Serie A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Date</label>
                <div className="flex">
                  <Input type="date" />
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Prediction</label>
              <Input placeholder="e.g. Home Win, Under 2.5, etc." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Odd</label>
                <Input type="number" step="0.1" placeholder="e.g. 2.1" />
              </div>
              <div>
                <label className="text-sm font-medium">Type</label>
                <Select defaultValue="free">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea placeholder="Reasoning behind this prediction..." />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAdd}>
              <Save className="mr-2 h-4 w-4" />
              Add Prediction
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Edit Prediction Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Prediction</DialogTitle>
          </DialogHeader>
          {editingPrediction && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Home Team</label>
                  <Input defaultValue={editingPrediction.homeTeam} />
                </div>
                <div>
                  <label className="text-sm font-medium">Away Team</label>
                  <Input defaultValue={editingPrediction.awayTeam} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">League</label>
                  <Input defaultValue={editingPrediction.league} />
                </div>
                <div>
                  <label className="text-sm font-medium">Date</label>
                  <Input type="date" defaultValue={editingPrediction.date} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Prediction</label>
                <Input defaultValue={editingPrediction.prediction} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Odd</label>
                  <Input type="number" step="0.1" defaultValue={editingPrediction.odd} />
                </div>
                <div>
                  <label className="text-sm font-medium">Type</label>
                  <Select defaultValue={editingPrediction.premium ? "premium" : "free"}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleEdit}>
              <Save className="mr-2 h-4 w-4" />
              Update Prediction
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default Predictions;
