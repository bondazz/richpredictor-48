
import React from 'react';
import MatchCard from './MatchCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';

// Sample match data
const trendingMatches = [
  {
    id: 1,
    league: 'Premier League',
    homeTeam: 'Manchester City',
    awayTeam: 'Liverpool',
    homeWinProbability: 55,
    drawProbability: 25,
    awayWinProbability: 20,
    matchTime: '21:00',
    date: 'Today',
    prediction: 'Manchester City to Win',
    odd: 1.85
  },
  {
    id: 2,
    league: 'La Liga',
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    homeWinProbability: 45,
    drawProbability: 30,
    awayWinProbability: 25,
    matchTime: '20:00',
    date: 'Tomorrow',
    prediction: 'Both Teams to Score',
    odd: 1.65
  },
  {
    id: 3,
    league: 'Serie A',
    homeTeam: 'Inter Milan',
    awayTeam: 'AC Milan',
    homeWinProbability: 35,
    drawProbability: 40,
    awayWinProbability: 25,
    matchTime: '18:45',
    date: 'Today',
    prediction: 'Draw',
    odd: 3.25
  },
  {
    id: 4,
    league: 'Bundesliga',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Dortmund',
    homeWinProbability: 60,
    drawProbability: 25,
    awayWinProbability: 15,
    matchTime: '19:30',
    date: 'Tomorrow',
    prediction: 'Over 2.5 Goals',
    odd: 1.55
  }
];

const TrendingPredictions = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingMatches.map((match) => (
            <div key={match.id} className="animate-zoom-in">
              <MatchCard {...match} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPredictions;
