
import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Trophy, MessageSquare, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Premium = () => {
  // Sample premium stats
  const premiumStats = [
    { date: '01.05.2025', prediction: 'Arsenal vs Chelsea - 1', odd: 2.1, result: 'Win' },
    { date: '02.05.2025', prediction: 'Barcelona vs Real Madrid - X', odd: 3.5, result: 'Win' },
    { date: '03.05.2025', prediction: 'Liverpool vs Man City - Over 2.5', odd: 1.8, result: 'Loss' },
    { date: '04.05.2025', prediction: 'PSG vs Marseille - 2', odd: 4.2, result: 'Win' },
    { date: '05.05.2025', prediction: 'Bayern vs Dortmund - 1 & Over 2.5', odd: 2.5, result: 'Win' },
  ];

  const winRate = (premiumStats.filter(stat => stat.result === 'Win').length / premiumStats.length) * 100;

  return (
    <MainLayout>
      <section className="py-16 bg-gradient-to-b from-white to-richnavy-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-sm mb-4">
              <Trophy size={14} className="text-richorange" />
              <span className="text-xs font-medium text-richnavy-600">Premium Service</span>
            </div>
            <h1 className="text-4xl font-bold text-richgray-800 mb-4">Premium Predictions Statistics</h1>
            <p className="text-richgray-600 max-w-2xl mx-auto">
              Our premium predictions offer high-value betting opportunities with a proven track record.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Premium stats */}
            <div className="glass rounded-xl border border-white/30 p-6">
              <h2 className="text-2xl font-bold text-richgray-800 mb-6">Recent Premium Results</h2>
              
              <div className="space-y-4">
                {premiumStats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <div>
                      <p className="text-sm text-richgray-500">{stat.date}</p>
                      <p className="font-medium">{stat.prediction}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-richnavy-50 text-richnavy-700 font-medium">
                        {stat.odd}
                      </span>
                      <span className={`px-3 py-1 rounded-full font-medium ${
                        stat.result === 'Win' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {stat.result}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-richnavy-50/50 rounded-lg">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-richnavy-700">Win Rate:</p>
                  <p className="text-2xl font-bold text-richorange">{winRate.toFixed(1)}%</p>
                </div>
              </div>
            </div>

            {/* Premium subscription */}
            <div className="glass rounded-xl border border-white/30 p-6">
              <h2 className="text-2xl font-bold text-richgray-800 mb-6">Premium Subscription</h2>
              
              <div className="mb-8">
                <div className="bg-richnavy-50/40 p-5 rounded-xl">
                  <h3 className="text-xl font-semibold text-richnavy-700 mb-4">Benefits of Premium:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Access to high-value premium predictions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Direct Telegram support from our analysts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Detailed reasoning behind each prediction</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Consistent high win rate over time</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center space-y-4">
                <Button asChild className="w-full bg-richorange hover:bg-richorange-600 text-white py-6">
                  <Link to="/premium-service">
                    Get Premium Service
                    <Trophy size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/telegram">
                    <MessageSquare size={16} className="mr-2" />
                    Contact via Telegram
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Premium;
