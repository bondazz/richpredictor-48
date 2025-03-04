
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';
import { TrendingUp, Activity, Award, ArrowRight } from 'lucide-react';

// Sample match data
const upcomingMatches = [
  { id: 1, home: 'Barcelona', away: 'Real Madrid', odds: { home: 2.1, draw: 3.4, away: 3.3 } },
  { id: 2, home: 'Manchester City', away: 'Liverpool', odds: { home: 1.9, draw: 3.6, away: 3.8 } },
  { id: 3, home: 'Bayern Munich', away: 'Dortmund', odds: { home: 1.7, draw: 3.9, away: 4.2 } },
];

const Hero = () => {
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMatchIndex((prev) => (prev + 1) % upcomingMatches.length);
        setIsVisible(true);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentMatch = upcomingMatches[currentMatchIndex];

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
                <Activity size={14} className="text-richorange" />
                <span>AI-Powered Football Predictions</span>
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              <span className="text-richnavy-700">Expert Football</span> <br />
              <span className="text-gradient">Predictions & Analysis</span>
            </h1>
            <p className="text-lg text-richgray-600 mt-6 max-w-lg">
              Get winning insights with our AI-powered match predictions, betting tips, and exclusive analysis from football experts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-richorange hover:bg-richorange-600 text-white px-8 py-6 rounded-xl hover:shadow-button transition-all duration-300 text-base">
              <span>Get Expert Predictions</span>
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="outline" className="border-richnavy-200 text-richnavy-700 hover:bg-richnavy-50 px-8 py-6 rounded-xl transition-all duration-300 text-base">
              <span>View Live Scores</span>
            </Button>
          </div>

          <div className="pt-8">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex-center bg-richnavy-50 text-richnavy-600">
                  <Award size={16} />
                </div>
                <span className="text-sm font-medium text-richgray-700">95% Accurate Predictions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex-center bg-richnavy-50 text-richnavy-600">
                  <TrendingUp size={16} />
                </div>
                <span className="text-sm font-medium text-richgray-700">Daily Updated Odds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right content - Live Odds Card */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Main card */}
            <div className="glass rounded-2xl shadow-card overflow-hidden backdrop-blur-sm border border-white/40 animate-float transform hover:scale-[1.02] transition-all duration-500">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-richnavy-700">Today's Hot Matches</h3>
                  <span className="bg-richnavy-50 text-richnavy-600 text-xs font-medium py-1 px-2 rounded-full">Live Odds</span>
                </div>

                {/* Match ticker */}
                <div className="space-y-4">
                  <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}>
                    <div className="flex justify-between items-center bg-white/60 rounded-xl p-4 hover:bg-white/90 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="min-w-10 h-10 rounded-full bg-richnavy-50 flex-center">
                          <span className="font-bold text-richnavy-700">{currentMatch.home.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-richgray-800">{currentMatch.home}</p>
                          <p className="text-sm text-richgray-500">Home</p>
                        </div>
                      </div>
                      <div className="px-3 py-1.5 bg-richorange/10 text-richorange rounded-lg min-w-12 text-center">
                        <span className="font-semibold">{currentMatch.odds.home}</span>
                      </div>
                    </div>

                    <div className="my-2 flex justify-center">
                      <div className="px-4 py-1 rounded-lg bg-white/60 text-sm font-medium text-richgray-600">
                        VS
                      </div>
                    </div>

                    <div className="flex justify-between items-center bg-white/60 rounded-xl p-4 hover:bg-white/90 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="min-w-10 h-10 rounded-full bg-richnavy-50 flex-center">
                          <span className="font-bold text-richnavy-700">{currentMatch.away.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-richgray-800">{currentMatch.away}</p>
                          <p className="text-sm text-richgray-500">Away</p>
                        </div>
                      </div>
                      <div className="px-3 py-1.5 bg-richnavy-50 text-richnavy-700 rounded-lg min-w-12 text-center">
                        <span className="font-semibold">{currentMatch.odds.away}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-richgray-500">
                        Draw: <span className="font-medium text-richgray-700">{currentMatch.odds.draw}</span>
                      </div>
                      <Button variant="link" className="text-richnavy-600 hover:text-richorange p-0 h-auto text-sm font-medium flex items-center">
                        View Analysis
                        <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-richgray-100">
                  <SearchBar />
                </div>
              </div>
            </div>

            {/* Decorative element */}
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

export default Hero;
