
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MainLayout from '../layout/MainLayout';
import { fetchMatches } from '../services/matchService';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PredictionCategoryCard from '../components/PredictionCategoryCard';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Loader2, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Predictions = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { toast } = useToast();
  
  const { data: matches, isLoading, error } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  });

  // Filter matches by category
  const getFilteredMatches = () => {
    if (!matches) return [];
    
    switch (activeCategory) {
      case 'under-over':
        return matches.filter(match => 
          match.prediction.toLowerCase().includes('over') || 
          match.prediction.toLowerCase().includes('under')
        );
      case 'correct-score':
        return matches.filter(match => 
          match.prediction.toLowerCase().includes('score')
        );
      default:
        return matches;
    }
  };

  const filteredMatches = getFilteredMatches();

  return (
    <MainLayout>
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-richnavy-50/20">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-sm mb-4">
              <Calendar size={14} className="text-richorange" />
              <span className="text-xs font-medium text-richnavy-600">Updated Daily</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-richgray-800 mb-4">Free Football Predictions</h1>
            <p className="text-richgray-600 max-w-2xl mx-auto">
              Browse our expert predictions for upcoming matches across all major football leagues.
            </p>
          </div>
          
          <div className="mb-6">
            <Tabs defaultValue="all" className="w-full" value={activeCategory} onValueChange={setActiveCategory}>
              <div className="overflow-x-auto py-2 hidden-scrollbar">
                <TabsList className="bg-white border border-richgray-100 p-1 inline-flex space-x-1 w-auto">
                  <TabsTrigger 
                    value="all"
                    className="px-4 py-2 data-[state=active]:bg-richorange data-[state=active]:text-white rounded-md"
                  >
                    All Predictions
                  </TabsTrigger>
                  <TabsTrigger 
                    value="under-over"
                    className="px-4 py-2 data-[state=active]:bg-richorange data-[state=active]:text-white rounded-md"
                  >
                    Under/Over
                  </TabsTrigger>
                  <TabsTrigger 
                    value="correct-score"
                    className="px-4 py-2 data-[state=active]:bg-richorange data-[state=active]:text-white rounded-md"
                  >
                    Correct Score
                  </TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </div>
              
          <div className="mt-6">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-richorange" />
                <span className="ml-3 text-richgray-600">Loading predictions...</span>
              </div>
            ) : filteredMatches.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredMatches.map((match) => (
                  <PredictionCategoryCard key={match.id} match={match} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl border border-richgray-100">
                <p className="text-richgray-600">No predictions available for this category</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Predictions;
