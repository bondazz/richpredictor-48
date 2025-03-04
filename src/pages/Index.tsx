
import React from 'react';
import MainLayout from '../layout/MainLayout';
import Hero from '../components/Hero';
import TrendingPredictions from '../components/TrendingPredictions';
import LiveScoresWidget from '../components/LiveScoresWidget';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart3, ArrowRight, Calendar, Trophy, Bookmark, Star } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 size={24} className="text-richorange" />,
    title: 'AI-Powered Analysis',
    description: 'Our advanced algorithms analyze thousands of data points to provide the most accurate predictions.'
  },
  {
    icon: <Calendar size={24} className="text-richorange" />,
    title: 'Daily Updates',
    description: 'Fresh predictions and analysis updated daily for all major football leagues worldwide.'
  },
  {
    icon: <Trophy size={24} className="text-richorange" />,
    title: 'Expert Insights',
    description: 'Professional tipsters and football analysts provide exclusive betting recommendations.'
  },
  {
    icon: <Star size={24} className="text-richorange" />,
    title: 'VIP Membership',
    description: 'Unlock premium predictions, in-depth analysis, and exclusive betting tips with our VIP plans.'
  },
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero />

      {/* Trending Predictions Section */}
      <TrendingPredictions />

      {/* Live Scores Section */}
      <section className="py-16 bg-richnavy-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 mb-2">
                <Bookmark size={14} className="text-richorange" />
                <span className="text-xs font-medium text-richnavy-600">Live Updates</span>
              </div>
              <h2 className="text-3xl font-bold text-richgray-800">Real-Time Score Updates</h2>
              <p className="text-richgray-600 max-w-lg">
                Stay updated with live scores from all major football leagues worldwide. Our real-time updates ensure you never miss a goal, card, or key match event.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-sm border border-richgray-100 hover:shadow-md transition-shadow animate-zoom-in"
                  >
                    <div className="w-12 h-12 rounded-lg bg-richnavy-50 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-richgray-800 mb-2">{feature.title}</h3>
                    <p className="text-sm text-richgray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Button className="bg-richorange hover:bg-richorange-600 text-white">
                  <span>Join Premium Membership</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 animate-slide-in-right">
              <LiveScoresWidget />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-richnavy-700 to-richnavy-900 opacity-95 z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 max-w-2xl mx-auto">
            Ready to Make Smarter Football Betting Decisions?
          </h2>
          <p className="text-richgray-300 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of successful bettors who use RichPredict for daily winning insights and predictions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-richorange hover:bg-richorange-600 text-white py-6 px-8 text-base">
              Get Expert Predictions
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 py-6 px-8 text-base">
              Explore Free Tips
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
