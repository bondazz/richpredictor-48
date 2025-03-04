
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Circle } from 'lucide-react';

// Sample live match data
const liveMatches = [
  {
    id: 1,
    league: 'Premier League',
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    homeScore: 2,
    awayScore: 1,
    minute: 76,
    status: 'live'
  },
  {
    id: 2,
    league: 'La Liga',
    homeTeam: 'Atletico Madrid',
    awayTeam: 'Sevilla',
    homeScore: 0,
    awayScore: 0,
    minute: 34,
    status: 'live'
  },
  {
    id: 3,
    league: 'Bundesliga',
    homeTeam: 'RB Leipzig',
    awayTeam: 'Leverkusen',
    homeScore: 1,
    awayScore: 2,
    minute: 88,
    status: 'live'
  },
  {
    id: 4,
    league: 'Ligue 1',
    homeTeam: 'PSG',
    awayTeam: 'Marseille',
    homeScore: null,
    awayScore: null,
    minute: null,
    status: 'upcoming',
    time: '21:00'
  },
  {
    id: 5,
    league: 'Serie A',
    homeTeam: 'Juventus',
    awayTeam: 'Roma',
    homeScore: 3,
    awayScore: 1,
    minute: 'FT',
    status: 'finished'
  },
];

const LiveScoresWidget = () => {
  const [matches, setMatches] = useState(liveMatches);
  const [activeTab, setActiveTab] = useState('live');

  const filteredMatches = matches.filter(match => {
    if (activeTab === 'all') return true;
    return match.status === activeTab;
  });

  useEffect(() => {
    // Simulate real-time updates for live matches
    const interval = setInterval(() => {
      setMatches(prevMatches => 
        prevMatches.map(match => {
          if (match.status === 'live') {
            // Randomly update minutes
            return {
              ...match,
              minute: Math.min(90, (match.minute as number) + 1)
            };
          }
          return match;
        })
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusIndicator = (status: string, minute: number | string | null) => {
    if (status === 'live') {
      return (
        <div className="flex items-center">
          <Circle size={8} fill="#F46036" stroke="none" className="mr-1 animate-pulse-subtle" />
          <span className="text-xs text-richorange">{minute}'</span>
        </div>
      );
    }
    if (status === 'upcoming') {
      return (
        <div className="flex items-center">
          <Clock size={12} className="mr-1 text-richgray-500" />
          <span className="text-xs text-richgray-500">{minute}</span>
        </div>
      );
    }
    return <span className="text-xs text-richgray-500">{minute}</span>;
  };

  return (
    <div className="glass rounded-xl overflow-hidden border border-white/30">
      <div className="p-4 border-b border-richgray-100">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-richgray-800">Live Scores</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                activeTab === 'all'
                  ? 'bg-richnavy-600 text-white'
                  : 'bg-richgray-100 text-richgray-600 hover:bg-richgray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('live')}
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                activeTab === 'live'
                  ? 'bg-richorange text-white'
                  : 'bg-richgray-100 text-richgray-600 hover:bg-richgray-200'
              }`}
            >
              Live
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-richemerald text-white'
                  : 'bg-richgray-100 text-richgray-600 hover:bg-richgray-200'
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>
      </div>

      <div className="divide-y divide-richgray-100">
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <div key={match.id} className="p-4 hover:bg-richnavy-50/20 transition-colors">
              <div className="flex justify-between items-center">
                <div className="w-1/3">
                  <span className="text-xs font-medium text-richgray-500">{match.league}</span>
                </div>
                <div className="w-1/3 text-center">
                  {getStatusIndicator(match.status, match.status === 'upcoming' ? match.time : match.minute)}
                </div>
                <div className="w-1/3 text-right">
                  <button className="text-xs text-richnavy-600 hover:text-richorange transition-colors">
                    Details
                  </button>
                </div>
              </div>

              <div className="mt-2 flex justify-between items-center">
                <div className="w-2/5 text-right">
                  <p className="text-sm font-medium text-richgray-800">{match.homeTeam}</p>
                </div>
                <div className="w-1/5 flex justify-center">
                  {match.status !== 'upcoming' ? (
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-bold ${match.homeScore! > match.awayScore! ? 'text-richorange' : 'text-richgray-800'}`}>
                        {match.homeScore}
                      </span>
                      <span className="text-xs text-richgray-400">-</span>
                      <span className={`text-sm font-bold ${match.awayScore! > match.homeScore! ? 'text-richorange' : 'text-richgray-800'}`}>
                        {match.awayScore}
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs font-medium bg-richgray-100 text-richgray-600 px-2 py-0.5 rounded">
                      vs
                    </span>
                  )}
                </div>
                <div className="w-2/5 text-left">
                  <p className="text-sm font-medium text-richgray-800">{match.awayTeam}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-6 text-center">
            <p className="text-richgray-500">No matches available</p>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-richgray-100">
        <Button variant="link" className="w-full justify-center text-richnavy-600 hover:text-richorange">
          <span>View All Matches</span>
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default LiveScoresWidget;
