
import React from 'react';
import MainLayout from '../layout/MainLayout';
import Hero from '../components/Hero';
import TrendingPredictions from '../components/TrendingPredictions';
import LiveScoresWidget from '../components/LiveScoresWidget';
import { useQuery } from '@tanstack/react-query';
import { fetchMatches } from '../services/matchService';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MatchCard from '../components/MatchCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { data: matches, isLoading } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  });

  // Group matches by league
  const matchesByLeague = React.useMemo(() => {
    if (!matches) return {};
    
    return matches.reduce((acc, match) => {
      if (!acc[match.league]) {
        acc[match.league] = [];
      }
      acc[match.league].push(match);
      return acc;
    }, {} as Record<string, typeof matches>);
  }, [matches]);

  // Get top leagues (ones with most matches)
  const topLeagues = React.useMemo(() => {
    if (!matchesByLeague) return [];
    
    return Object.keys(matchesByLeague)
      .sort((a, b) => matchesByLeague[b].length - matchesByLeague[a].length)
      .slice(0, 4); // Take top 4 leagues
  }, [matchesByLeague]);

  // Find high probability matches across all leagues
  const highProbabilityMatches = React.useMemo(() => {
    if (!matches) return [];
    
    return [...matches]
      .sort((a, b) => {
        const maxProbA = Math.max(a.homeWinProbability, a.awayWinProbability);
        const maxProbB = Math.max(b.homeWinProbability, b.awayWinProbability);
        return maxProbB - maxProbA;
      })
      .slice(0, 3); // Take top 3 high probability matches
  }, [matches]);

  // Find matches with best odds
  const bestOddsMatches = React.useMemo(() => {
    if (!matches) return [];
    
    return [...matches]
      .sort((a, b) => a.odd - b.odd)
      .slice(0, 3); // Take top 3 matches with best odds
  }, [matches]);

  return (
    <MainLayout>
      <Hero />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <TrendingPredictions />
          
          {/* High Probability Matches */}
          <div className="mt-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-richgray-800">Highest Win Probability</h2>
              <Link to="/predictions/upcoming">
                <Button variant="ghost" className="text-richorange hover:text-richorange/90">
                  View All <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highProbabilityMatches.map((match) => (
                <MatchCard key={`high-prob-${match.id}`} match={match} />
              ))}
            </div>
          </div>
          
          {/* Best Odds Matches */}
          <div className="mt-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-richgray-800">Best Odds</h2>
              <Link to="/predictions/upcoming">
                <Button variant="ghost" className="text-richorange hover:text-richorange/90">
                  View All <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestOddsMatches.map((match) => (
                <MatchCard key={`best-odds-${match.id}`} match={match} />
              ))}
            </div>
          </div>
          
          {/* Matches by League */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-richgray-800 mb-6">Matches by League</h2>
            
            <Tabs defaultValue={topLeagues[0] || "all"} className="w-full">
              <TabsList className="mb-4 bg-white border border-richgray-100 p-1 inline-flex space-x-1 w-auto overflow-x-auto hidden-scrollbar">
                {topLeagues.map((league) => (
                  <TabsTrigger 
                    key={league} 
                    value={league}
                    className="px-4 py-2 data-[state=active]:bg-richorange data-[state=active]:text-white rounded-md"
                  >
                    {league}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {topLeagues.map((league) => (
                <TabsContent key={league} value={league} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {matchesByLeague[league]?.slice(0, 3).map((match) => (
                      <MatchCard key={`${league}-${match.id}`} match={match} />
                    ))}
                  </div>
                  
                  {matchesByLeague[league]?.length > 3 && (
                    <div className="text-center mt-6">
                      <Link to={`/predictions/upcoming`}>
                        <Button variant="outline" className="border-richorange text-richorange hover:bg-richorange/5">
                          See More {league} Matches <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      
      <section className="py-10 bg-richnavy-50/20">
        <div className="container mx-auto px-4">
          <LiveScoresWidget />
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
