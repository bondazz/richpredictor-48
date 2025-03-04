
import React from 'react';
import { Link } from 'react-router-dom';
import { Percent, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MatchCardProps {
  id: number;
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeWinProbability: number;
  drawProbability: number;
  awayWinProbability: number;
  matchTime: string;
  date: string;
  prediction: string;
  odd: number;
}

const MatchCard: React.FC<MatchCardProps> = ({
  id,
  league,
  homeTeam,
  awayTeam,
  homeWinProbability,
  drawProbability,
  awayWinProbability,
  matchTime,
  date,
  prediction,
  odd,
}) => {
  const getWinnerClass = (probability: number) => {
    if (probability > 50) return 'text-richorange font-semibold';
    return 'text-richgray-700';
  };

  const getProbabilityBarColor = (probability: number) => {
    if (probability > 65) return 'bg-richorange';
    if (probability > 40) return 'bg-richemerald';
    return 'bg-richgray-400';
  };

  const getMaxProbability = () => {
    return Math.max(homeWinProbability, drawProbability, awayWinProbability);
  };

  const getWinner = () => {
    const max = getMaxProbability();
    if (max === homeWinProbability) return 'home';
    if (max === drawProbability) return 'draw';
    return 'away';
  };

  const winner = getWinner();

  return (
    <div className="glass group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-white/30 hover:border-white/50">
      <div className="p-5">
        {/* Header with league and time */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-richnavy-50 text-richnavy-700">
              {league}
            </span>
          </div>
          <div className="flex items-center text-xs text-richgray-500">
            <Clock size={14} className="mr-1" />
            <span>{date} • {matchTime}</span>
          </div>
        </div>

        {/* Teams */}
        <div className="flex justify-between items-center mb-6">
          <div className="w-[40%] text-left">
            <p className={`text-base font-medium ${winner === 'home' ? 'text-richorange' : 'text-richgray-800'}`}>
              {homeTeam}
            </p>
          </div>
          <div className="w-[20%] text-center">
            <span className="text-sm font-bold text-richgray-400">VS</span>
          </div>
          <div className="w-[40%] text-right">
            <p className={`text-base font-medium ${winner === 'away' ? 'text-richorange' : 'text-richgray-800'}`}>
              {awayTeam}
            </p>
          </div>
        </div>

        {/* Probabilities */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-richgray-600">Win Probability</span>
            <span className="text-xs font-medium text-richgray-600">Draw</span>
          </div>

          <div className="flex space-x-2">
            <div className="w-[40%] h-2 bg-richgray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getProbabilityBarColor(homeWinProbability)} transition-all duration-500`}
                style={{ width: `${homeWinProbability}%` }}
              ></div>
            </div>
            <div className="w-[20%] h-2 bg-richgray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getProbabilityBarColor(drawProbability)} transition-all duration-500`}
                style={{ width: `${drawProbability}%` }}
              ></div>
            </div>
            <div className="w-[40%] h-2 bg-richgray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getProbabilityBarColor(awayWinProbability)} transition-all duration-500`}
                style={{ width: `${awayWinProbability}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[40%] text-left">
              <span className={`text-xs ${getWinnerClass(homeWinProbability)}`}>
                {homeWinProbability}%
              </span>
            </div>
            <div className="w-[20%] text-center">
              <span className={`text-xs ${getWinnerClass(drawProbability)}`}>
                {drawProbability}%
              </span>
            </div>
            <div className="w-[40%] text-right">
              <span className={`text-xs ${getWinnerClass(awayWinProbability)}`}>
                {awayWinProbability}%
              </span>
            </div>
          </div>
        </div>

        {/* Prediction */}
        <div className="flex justify-between items-center mb-5 p-3 bg-richnavy-50/50 rounded-lg">
          <div>
            <span className="text-xs text-richnavy-600 font-medium">Expert Prediction</span>
            <p className="text-sm font-semibold text-richnavy-800">{prediction}</p>
          </div>
          <div className="flex items-center">
            <Percent size={14} className="text-richorange mr-1" />
            <span className="text-richorange font-semibold">{odd}</span>
          </div>
        </div>

        {/* Action button */}
        <Link to={`/prediction/${id}`} className="block">
          <Button 
            variant="ghost" 
            className="w-full justify-between group-hover:text-richorange group-hover:bg-richorange/5 transition-colors"
          >
            <span>View Full Analysis</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MatchCard;
