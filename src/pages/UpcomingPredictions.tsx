
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import MainLayout from '../layout/MainLayout';
import { fetchMatches } from '../services/matchService';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MatchCard from '../components/MatchCard';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Loader2, Filter, SortAscending } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UpcomingPredictions = () => {
  const [activeLeague, setActiveLeague] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');
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
      ? [...matches] // Create a copy to avoid mutating the original data
      : [...matches].filter(match => match.league === activeLeague)
    : [];
    
  // Sort matches based on criteria
  const sortedMatches = [...filteredMatches].sort((a, b) => {
    switch(sortBy) {
      case 'probability':
        // Sort by highest probability (home or away)
        const maxProbA = Math.max(a.homeWinProbability, a.awayWinProbability);
        const maxProbB = Math.max(b.homeWinProbability, b.awayWinProbability);
        return maxProbB - maxProbA;
      case 'odds':
        // Sort by odds (ascending)
        return a.odd - b.odd;
      default:
        // Default to date sorting - most recent first
        // In a real app, you'd parse dates properly
        return a.id - b.id;
    }
  });
    
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
          
          {/* Filter and Sort Controls */}
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* League filter tabs */}
            <div className="mb-4 md:mb-0">
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
              </Tabs>
            </div>
            
            {/* Sort options */}
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-richnavy-100">
                    <SortAscending size={16} className="mr-2" />
                    <span>Sort by: {sortBy === 'date' ? 'Date' : sortBy === 'probability' ? 'Probability' : 'Odds'}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSortBy('date')}>
                    Date
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('probability')}>
                    Win Probability
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('odds')}>
                    Odds
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
              
          {/* Matches grid */}
          <div className="mt-6">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-richorange" />
                <span className="ml-3 text-richgray-600">Loading predictions...</span>
              </div>
            ) : sortedMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl border border-richgray-100">
                <p className="text-richgray-600">No predictions available for {activeLeague === 'all' ? 'any league' : activeLeague}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default UpcomingPredictions;
