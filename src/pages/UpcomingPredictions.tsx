
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import MainLayout from '../layout/MainLayout';
import { fetchMatches } from '../services/matchService';
import { Match } from '../utils/db';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MatchCard from '../components/MatchCard';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Loader2 } from 'lucide-react';

const UpcomingPredictions = () => {
  const [activeLeague, setActiveLeague] = useState<string>('all');
  const { toast } = useToast();
  
  const { data: matches, isLoading, error } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  });

  // Extract unique league names for filtering
  const leagues = matches ? ['all', ...Array.from(new Set(matches.map(match => match.league)))] : ['all'];
  
  // Filter matches by selected league
  const filteredMatches = matches ? 
    activeLeague === 'all' 
      ? matches 
      : matches.filter(match => match.league === activeLeague)
    : [];
    
  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading predictions",
        description: "Failed to load upcoming match predictions. Please try again.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  return (
    <MainLayout>
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-richnavy-50/20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-sm mb-4">
              <Calendar size={14} className="text-richorange" />
              <span className="text-xs font-medium text-richnavy-600">Updated Daily</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-richgray-800 mb-4">Upcoming Match Predictions</h1>
            <p className="text-richgray-600 max-w-2xl mx-auto">
              Browse our expert predictions for upcoming matches across all major football leagues. Our AI-powered analysis gives you the edge.
            </p>
          </div>
          
          {/* League filter tabs */}
          <div className="mb-10">
            <Tabs defaultValue="all" className="w-full" value={activeLeague} onValueChange={setActiveLeague}>
              <div className="overflow-x-auto py-2 hidden-scrollbar">
                <TabsList className="bg-white border border-richgray-100 p-1 inline-flex space-x-1 w-auto">
                  {leagues.map((league) => (
                    <TabsTrigger 
                      key={league} 
                      value={league}
                      className="px-4 py-2 data-[state=active]:bg-richorange data-[state=active]:text-white rounded-md"
                    >
                      {league === 'all' ? 'All Leagues' : league}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {/* Matches grid */}
              <TabsContent value={activeLeague} className="mt-6">
                {isLoading ? (
                  <div className="flex justify-center items-center py-20">
                    <Loader2 className="h-8 w-8 animate-spin text-richorange" />
                    <span className="ml-3 text-richgray-600">Loading predictions...</span>
                  </div>
                ) : filteredMatches.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMatches.map((match) => (
                      <MatchCard key={match.id} match={match} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white rounded-xl border border-richgray-100">
                    <p className="text-richgray-600">No predictions available for {activeLeague === 'all' ? 'any league' : activeLeague}</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default UpcomingPredictions;
