
import React from 'react';
import { Match } from '../utils/db';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PredictionCategoryCardProps {
  match: Match;
}

const PredictionCategoryCard = ({ match }: PredictionCategoryCardProps) => {
  return (
    <div className="glass rounded-xl overflow-hidden border border-white/30 hover:shadow-lg transition-all duration-300">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-richgray-500">{match.league}</span>
          <span className="text-xs text-richgray-500">{match.date}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold text-richgray-800">{match.homeTeam}</span>
          <span className="text-xs px-2 py-1 bg-richgray-100 rounded-full">vs</span>
          <span className="font-semibold text-richgray-800">{match.awayTeam}</span>
        </div>
        
        <div className="bg-richnavy-50/50 p-3 rounded-lg mb-3">
          <p className="font-medium text-richnavy-700">{match.prediction}</p>
          <p className="text-richorange font-bold mt-1">{match.odd}</p>
        </div>
      </div>
    </div>
  );
};

export default PredictionCategoryCard;
