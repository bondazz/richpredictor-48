
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMatches } from '../utils/db';
import { Match } from '../utils/db';
import PredictionCategoryCard from './PredictionCategoryCard';

const PredictionCategories = () => {
  const { data: matches, isLoading } = useQuery({
    queryKey: ['matches'],
    queryFn: getMatches,
    initialData: [],
  });

  // Filter for free football predictions
  const freePredictions = matches.slice(0, 12);

  // Filter for under/over predictions
  const underOverPredictions = matches
    .filter(match => match.prediction.toLowerCase().includes('over') || match.prediction.toLowerCase().includes('under'))
    .slice(0, 12);

  // Filter for correct score predictions
  const correctScorePredictions = matches
    .filter(match => match.prediction.toLowerCase().includes('score'))
    .slice(0, 12);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Free Football Predictions */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-richgray-800">Free Football Predictions</h2>
            <Button variant="outline" className="border-richorange text-richorange hover:bg-richorange/5" asChild>
              <Link to="/predictions">
                View All Predictions
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {freePredictions.slice(0, 12).map((match) => (
              <PredictionCategoryCard key={`free-${match.id}`} match={match} />
            ))}
          </div>
        </div>
        
        {/* Under/Over Predictions */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-richgray-800">Under/Over Predictions</h2>
            <Button variant="outline" className="border-richorange text-richorange hover:bg-richorange/5" asChild>
              <Link to="/predictions">
                View All Predictions
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {underOverPredictions.slice(0, 12).map((match) => (
              <PredictionCategoryCard key={`under-over-${match.id}`} match={match} />
            ))}
          </div>
        </div>
        
        {/* Correct Score Predictions */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-richgray-800">Correct Score Predictions</h2>
            <Button variant="outline" className="border-richorange text-richorange hover:bg-richorange/5" asChild>
              <Link to="/predictions">
                View All Predictions
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {correctScorePredictions.slice(0, 12).map((match) => (
              <PredictionCategoryCard key={`correct-score-${match.id}`} match={match} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionCategories;
