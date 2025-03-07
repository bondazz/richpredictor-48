
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, MessageSquare } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

const HomeHero = () => {
  const { settings } = useSettings();

  // Use settings for premium match data
  const premiumMatch = {
    date: settings.premiumMatchDate,
    odd: settings.premiumMatchOdd,
    price: settings.premiumMatchPrice,
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-richnavy-50">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col lg:flex-row lg:items-center">
        {/* Left content */}
        <div className="w-full lg:w-1/2 space-y-8 animate-slide-up">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-richnavy-50 px-3 py-1 text-sm font-medium text-richnavy-600 mb-4 border border-richnavy-100">
              <span className="flex items-center gap-1.5">
                <Trophy size={14} className="text-richorange" />
                <span>Football Predictions</span>
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              <span className="text-richnavy-700">{settings.homeHeroTitle.split(' & ')[0]}</span> <br />
              <span className="text-gradient">& {settings.homeHeroTitle.split(' & ')[1] || 'Analysis'}</span>
            </h1>
            <p className="text-lg text-richgray-600 mt-6 max-w-lg">
              {settings.homeHeroSubtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-richorange hover:bg-richorange-600 text-white px-8 py-6 rounded-xl hover:shadow-button transition-all duration-300 text-base">
              <Link to="/predictions">
                <span>Get Expert Predictions</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-richnavy-200 text-richnavy-700 hover:bg-richnavy-50 px-8 py-6 rounded-xl transition-all duration-300 text-base">
              <Link to="/premium">
                <span>Premium Statistics</span>
              </Link>
            </Button>
          </div>

          <div className="pt-8">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex-center bg-richnavy-50 text-richnavy-600">
                  <Trophy size={16} />
                </div>
                <span className="text-sm font-medium text-richgray-700">Premium Predictions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex-center bg-richnavy-50 text-richnavy-600">
                  <MessageSquare size={16} />
                </div>
                <span className="text-sm font-medium text-richgray-700">Telegram Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right content - Premium Match Card */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Main card */}
            <div className="glass rounded-2xl shadow-card overflow-hidden backdrop-blur-sm border border-white/40 animate-float transform hover:scale-[1.02] transition-all duration-500">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-richnavy-700">Today's Premium Match</h3>
                  <span className="bg-richnavy-50 text-richnavy-600 text-xs font-medium py-1 px-2 rounded-full">Premium</span>
                </div>

                {/* Premium match info */}
                <div className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center bg-white/60 rounded-xl p-4 hover:bg-white/90 transition-colors">
                      <div>
                        <p className="font-medium text-richgray-800">Premium Match</p>
                        <p className="text-sm text-richgray-500">{premiumMatch.date}</p>
                      </div>
                      <div className="px-3 py-1.5 bg-richorange/10 text-richorange rounded-lg text-center">
                        <span className="font-semibold">{premiumMatch.odd}</span>
                      </div>
                    </div>

                    <div className="text-center p-3 bg-richnavy-50/50 rounded-lg">
                      <p className="font-semibold text-richorange text-xl">${premiumMatch.price}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button asChild className="w-full bg-richorange hover:bg-richorange-600 text-white">
                    <Link to="/premium">
                      Premium Statistics
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/telegram">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Contact via Telegram
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-56 h-56 bg-richemerald-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -z-10 -top-8 -left-8 w-40 h-40 bg-richorange-100 rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white z-10"></div>
    </div>
  );
};

export default HomeHero;
