
import React from 'react';
import MatchCard from './MatchCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Star } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getMatches } from '../utils/db';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';
import BookmarkButton from './BookmarkButton';

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

const FeaturedMatchSkeleton = () => (
  <div className="glass rounded-xl overflow-hidden border-2 border-richorange/30 p-6">
    <div className="flex items-center gap-2 mb-3">
      <Star className="text-richorange" size={18} />
      <Skeleton className="h-6 w-32 rounded-full" />
    </div>
    <div className="flex justify-between items-center mb-6">
      <Skeleton className="h-7 w-36" />
      <Skeleton className="h-7 w-10" />
      <Skeleton className="h-7 w-36" />
    </div>
    <div className="space-y-3 mb-5">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-16" />
      </div>
      <div className="flex space-x-2">
        <Skeleton className="h-3 w-full" />
      </div>
      <div className="flex justify-between">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-12" />
      </div>
    </div>
    <div className="flex justify-between items-center mb-5 p-4 bg-richnavy-50/50 rounded-lg">
      <Skeleton className="h-10 w-40" />
      <Skeleton className="h-8 w-16" />
    </div>
    <Skeleton className="h-12 w-full" />
  </div>
);

const TrendingPredictions = () => {
  const { data: trendingMatches, isLoading } = useQuery({
    queryKey: ['trendingMatches'],
    queryFn: getMatches,
    initialData: [],
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Get featured match (first match or null if no matches)
  const featuredMatch = trendingMatches && trendingMatches.length > 0 ? trendingMatches[0] : null;
  // Get remaining matches excluding the featured one
  const regularMatches = featuredMatch ? trendingMatches.slice(1, 4) : trendingMatches.slice(0, 3);

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
            asChild
          >
            <Link to="/predictions/upcoming">
              <span>View All Predictions</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <>
            <div className="mb-8">
              <FeaturedMatchSkeleton />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((idx) => (
                <div key={idx} className="animate-pulse">
                  <MatchCardSkeleton />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {featuredMatch && (
              <div className="mb-8 animate-fade-in">
                <div className="glass rounded-xl overflow-hidden border-2 border-richorange/30 p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="text-richorange" size={18} />
                    <span className="bg-richorange/10 text-richorange font-semibold rounded-full px-3 py-1 text-sm">Featured Match</span>
                    <span className="ml-auto text-richgray-600 text-sm">{featuredMatch.date}</span>
                    <BookmarkButton matchId={featuredMatch.id} />
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-xl font-bold group">
                      <span className="group-hover:text-richorange transition-colors">{featuredMatch.homeTeam}</span>
                    </div>
                    <span className="text-lg font-bold text-richorange">VS</span>
                    <div className="text-xl font-bold group">
                      <span className="group-hover:text-richorange transition-colors">{featuredMatch.awayTeam}</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center justify-between">
                      <span className="text-richnavy-600 font-medium">{featuredMatch.league}</span>
                      <span className="text-richgray-600">{featuredMatch.time}</span>
                    </div>
                    <p className="text-sm text-richgray-600">
                      {featuredMatch.stadium}
                    </p>
                    <div className="flex justify-between text-sm">
                      <div className="flex flex-col items-center">
                        <span className="text-richnavy-700 font-medium">{featuredMatch.homeWinProbability}%</span>
                        <span className="text-xs text-richgray-500">Home</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-richnavy-700 font-medium">{featuredMatch.drawProbability}%</span>
                        <span className="text-xs text-richgray-500">Draw</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-richnavy-700 font-medium">{featuredMatch.awayWinProbability}%</span>
                        <span className="text-xs text-richgray-500">Away</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-5 p-4 bg-richnavy-50/50 rounded-lg hover:bg-richnavy-50 transition-colors">
                    <div className="font-semibold text-richnavy-700">{featuredMatch.prediction}</div>
                    <div className="text-xl font-bold text-richorange">{featuredMatch.odd}</div>
                  </div>
                  <Button className="w-full bg-richorange hover:bg-richorange-600 text-white shadow-sm hover:shadow-md transition-all" asChild>
                    <Link to={`/prediction/${featuredMatch.id}`}>
                      View Detailed Analysis
                    </Link>
                  </Button>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {regularMatches.map((match) => (
                <div key={match.id} className="animate-zoom-in group relative">
                  <MatchCard match={match} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TrendingPredictions;
