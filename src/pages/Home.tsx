
import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy, MessageSquare } from 'lucide-react';
import HomeHero from '../components/HomeHero';
import PredictionCategories from '../components/PredictionCategories';
import { useSettings } from '../contexts/SettingsContext';

const Home = () => {
  const { settings } = useSettings();
  
  return (
    <MainLayout>
      <HomeHero />
      
      {/* Today's Hot Premium Match */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-5 rounded-xl bg-gradient-to-r from-richorange/90 to-richorange shadow-lg">
            <div className="flex flex-col">
              <span className="text-white font-semibold text-lg mb-1">Today's Hot Premium Match</span>
              <span className="text-white/90 text-sm">{settings.premiumMatchDate}</span>
              <div className="flex items-center mt-3">
                <div className="bg-white/20 px-3 py-1 rounded-full">
                  <span className="text-white font-bold">Odd: {settings.premiumMatchOdd}</span>
                </div>
                <div className="mx-3 bg-white/20 px-3 py-1 rounded-full">
                  <span className="text-white font-bold">${settings.premiumMatchPrice}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Link to="/premium-service">
                <Button className="bg-white text-richorange hover:bg-white/90">
                  <Trophy size={16} className="mr-2" />
                  Premium Stats
                </Button>
              </Link>
              <Link to="/telegram">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <MessageSquare size={16} className="mr-2" />
                  Telegram
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-10 bg-richnavy-50/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/predictions" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-richnavy-700 mb-3">Get Expert Predictions</h3>
              <p className="text-richgray-600 mb-4">Access our free football predictions and analysis from our expert team.</p>
              <Button className="mt-auto">
                View Predictions
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            
            <Link to="/premium-service" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-richnavy-700 mb-3">Premium Statistics</h3>
              <p className="text-richgray-600 mb-4">Check the performance of our premium predictions with detailed statistics.</p>
              <Button className="mt-auto">
                View Statistics
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <PredictionCategories />
    </MainLayout>
  );
};

export default Home;
