
import React, { useState } from 'react';
import MatchCard from './MatchCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Loader2 } from 'lucide-react';
import { Match } from '../utils/db';
import { useQuery } from '@tanstack/react-query';
import { getMatches } from '../utils/db';
import { Skeleton } from '@/components/ui/skeleton';

const MatchCardSkeleton = () => (
  <div className="glass rounded-xl overflow-hidden border border-white/30 p-5">
    <div className="flex justify-between items-center mb-3">
      <Skeleton className="h-6 w-24 rounded-full" />
      <Skeleton className="h-4 w-20" />
    </div>
    <div className="flex justify-between items-center mb-6">
      <Skeleton className="h-5 w-24" />
      <Skeleton className="h-5 w-8" />
      <Skeleton className="h-5 w-24" />
    </div>
    <div className="space-y-2 mb-5">
      <div className="flex items-center justify-between">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-12" />
      </div>
      <div className="flex space-x-2">
        <Skeleton className="h-2 w-full" />
      </div>
      <div className="flex justify-between">
        <Skeleton className="h-3 w-8" />
        <Skeleton className="h-3 w-8" />
        <Skeleton className="h-3 w-8" />
      </div>
    </div>
    <div className="flex justify-between items-center mb-5 p-3 bg-richnavy-50/50 rounded-lg">
      <Skeleton className="h-8 w-32" />
      <Skeleton className="h-6 w-10" />
    </div>
    <Skeleton className="h-10 w-full" />
  </div>
);

const TrendingPredictions = () => {
  const { data: trendingMatches, isLoading } = useQuery({
    queryKey: ['trendingMatches'],
    queryFn: getMatches,
    initialData: [],
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-richnavy-50 rounded-full px-3 py-1 mb-3">
              <TrendingUp size={14} className="text-richorange" />
              <span className="text-xs font-medium text-richnavy-600">Hot Predictions</span>
            </div>
            <h2 className="text-3xl font-bold text-richgray-800">Trending Match Predictions</h2>
            <p className="mt-2 text-richgray-600 max-w-xl">
              Explore our expert analysis and predictions for the most anticipated upcoming matches
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 border-richnavy-100 text-richnavy-700 hover:bg-richnavy-50"
          >
            <span>View All Predictions</span>
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="animate-pulse">
                <MatchCardSkeleton />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingMatches.slice(0, 4).map((match) => (
              <div key={match.id} className="animate-zoom-in">
                <MatchCard match={match} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingPredictions;
