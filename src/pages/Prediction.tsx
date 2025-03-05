
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMatchDetails } from '../services/matchService';
import { MatchDetails } from '../utils/db';
import MainLayout from '../layout/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, BarChart3, TrendingUp, Percent, Eye, MessageCircle, Award } from 'lucide-react';
import BookmarkButton from '../components/BookmarkButton';

const Prediction = () => {
  const { id } = useParams<{ id: string }>();
  const [match, setMatch] = useState<MatchDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const loadMatchDetails = async () => {
      setIsLoading(true);
      try {
        if (id) {
          const data = await fetchMatchDetails(Number(id));
          if (data) {
            setMatch(data);
          } else {
            setError('Match not found');
          }
        }
      } catch (err) {
        setError('Failed to load match details');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadMatchDetails();
  }, [id]);

  const getFormIcon = (result: string) => {
    switch(result) {
      case 'W':
        return <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">W</span>;
      case 'L':
        return <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold">L</span>;
      case 'D':
        return <span className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs font-bold">D</span>;
      default:
        return null;
    }
  };

  const getConfidenceTag = (confidence: string) => {
    switch(confidence) {
      case 'High':
        return <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">High</span>;
      case 'Medium':
        return <span className="px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-700">Medium</span>;
      case 'Low':
        return <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">Low</span>;
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-t-richnavy-600 border-richnavy-200 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-richgray-600">Loading match prediction...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error || !match) {
    return (
      <MainLayout>
        <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-richgray-800 mb-4">Match Not Found</h2>
            <p className="text-richgray-600 mb-6">{error || "The match prediction you're looking for doesn't exist."}</p>
            <Link to="/">
              <Button className="bg-richorange hover:bg-richorange-600 text-white">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="pt-24 pb-16 bg-richnavy-50/50">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-richnavy-600 hover:text-richorange transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm">Back to predictions</span>
            </Link>
          </div>

          {/* Match Header */}
          <div className="glass rounded-xl overflow-hidden shadow-lg border border-white/30 mb-8">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <div className="inline-block rounded-full bg-richnavy-100 px-3 py-1 text-xs font-medium text-richnavy-700 mb-3">
                    {match.league}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-richgray-800">
                    {match.homeTeam} vs {match.awayTeam}
                  </h1>
                  <div className="flex items-center mt-2 text-richgray-600 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-4">{match.date}</span>
                    <Clock size={14} className="mr-1" />
                    <span>{match.time}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <BookmarkButton
                    matchId={match.id}
                    variant="button"
                    className="mr-2"
                  />
                  <Button className="bg-richorange hover:bg-richorange-600 text-white">
                    Get Expert Prediction
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Prediction Card */}
              <div className="glass rounded-xl overflow-hidden shadow-lg border border-white/30">
                <div className="bg-richnavy-50/80 px-6 py-4 border-b border-richgray-100">
                  <h2 className="text-lg font-bold text-richnavy-700 flex items-center">
                    <Award size={18} className="mr-2 text-richorange" />
                    Expert Prediction
                  </h2>
                </div>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold text-richgray-800">{match.prediction}</h3>
                      <p className="text-sm text-richgray-600 mt-1">Our recommended bet for this match</p>
                    </div>
                    <div className="flex items-center text-richorange">
                      <span className="text-2xl font-bold">{match.odd}</span>
                      <Percent size={18} className="ml-1" />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-richgray-700 mb-2">Why we predict this:</h4>
                    <ul className="space-y-2">
                      {match.analysisPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-4 h-4 rounded-full bg-richorange/10 text-richorange text-xs flex-center mr-2 mt-0.5">✓</span>
                          <span className="text-sm text-richgray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-richgray-700 mb-3">Additional Betting Tips:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {match.additionalTips.map((tip, index) => (
                        <div key={index} className="bg-richnavy-50/50 rounded-lg p-3 hover:bg-richnavy-50 transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-richgray-800">{tip.name}</span>
                            {getConfidenceTag(tip.confidence)}
                          </div>
                          <div className="flex items-center text-richorange">
                            <span className="text-sm font-semibold">{tip.odd}</span>
                            <Percent size={14} className="ml-1" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Form */}
              <div className="glass rounded-xl overflow-hidden shadow-lg border border-white/30">
                <div className="bg-richnavy-50/80 px-6 py-4 border-b border-richgray-100">
                  <h2 className="text-lg font-bold text-richnavy-700 flex items-center">
                    <TrendingUp size={18} className="mr-2 text-richorange" />
                    Team Form
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-base font-semibold text-richgray-800 mb-3">{match.homeTeam}</h3>
                      <div className="flex items-center space-x-2 mb-4">
                        {match.recentForm.home.map((result, index) => (
                          <div key={index}>
                            {getFormIcon(result)}
                          </div>
                        ))}
                      </div>
                      <div className="bg-richnavy-50/50 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-richgray-700">Win Probability</span>
                          <span className="text-sm font-semibold text-richorange">{match.homeWinProbability}%</span>
                        </div>
                        <div className="w-full h-2 bg-richgray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-richorange transition-all duration-500" 
                            style={{ width: `${match.homeWinProbability}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-base font-semibold text-richgray-800 mb-3">{match.awayTeam}</h3>
                      <div className="flex items-center space-x-2 mb-4">
                        {match.recentForm.away.map((result, index) => (
                          <div key={index}>
                            {getFormIcon(result)}
                          </div>
                        ))}
                      </div>
                      <div className="bg-richnavy-50/50 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-richgray-700">Win Probability</span>
                          <span className="text-sm font-semibold text-richnavy-600">{match.awayWinProbability}%</span>
                        </div>
                        <div className="w-full h-2 bg-richgray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-richnavy-600 transition-all duration-500" 
                            style={{ width: `${match.awayWinProbability}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Draw probability */}
                  <div className="mt-6 bg-richnavy-50/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-richgray-700">Draw Probability</span>
                      <span className="text-sm font-semibold text-richgray-700">{match.drawProbability}%</span>
                    </div>
                    <div className="w-full h-2 bg-richgray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-richgray-500 transition-all duration-500" 
                        style={{ width: `${match.drawProbability}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Head to Head */}
              <div className="glass rounded-xl overflow-hidden shadow-lg border border-white/30">
                <div className="bg-richnavy-50/80 px-6 py-4 border-b border-richgray-100">
                  <h2 className="text-lg font-bold text-richnavy-700 flex items-center">
                    <BarChart3 size={18} className="mr-2 text-richorange" />
                    Head to Head
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {match.headToHead.map((game, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-white hover:bg-richnavy-50/30 transition-colors rounded-lg">
                        <div className="text-sm text-richgray-600">{game.date}</div>
                        <div className="text-sm font-medium text-richgray-800">{game.result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Match Details */}
              <div className="glass rounded-xl overflow-hidden shadow-lg border border-white/30">
                <div className="bg-richnavy-50/80 px-6 py-4 border-b border-richgray-100">
                  <h2 className="text-lg font-bold text-richnavy-700">Match Details</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <span className="block text-xs text-richgray-500 mb-1">League</span>
                      <span className="text-sm font-medium text-richgray-800">{match.league}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-richgray-500 mb-1">Date & Time</span>
                      <span className="text-sm font-medium text-richgray-800">{match.date}, {match.time}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-richgray-500 mb-1">Stadium</span>
                      <span className="text-sm font-medium text-richgray-800">{match.stadium}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Votes */}
              <div className="glass rounded-xl overflow-hidden shadow-lg border border-white/30">
                <div className="bg-richnavy-50/80 px-6 py-4 border-b border-richgray-100">
                  <h2 className="text-lg font-bold text-richnavy-700">Community Votes</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-richgray-700">{match.homeTeam} Win</span>
                        <span className="text-xs font-medium text-richgray-600">{match.votes.home}%</span>
                      </div>
                      <div className="w-full h-2 bg-richgray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-richorange transition-all duration-500" 
                          style={{ width: `${match.votes.home}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-richgray-700">Draw</span>
                        <span className="text-xs font-medium text-richgray-600">{match.votes.draw}%</span>
                      </div>
                      <div className="w-full h-2 bg-richgray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-richgray-500 transition-all duration-500" 
                          style={{ width: `${match.votes.draw}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-richgray-700">{match.awayTeam} Win</span>
                        <span className="text-xs font-medium text-richgray-600">{match.votes.away}%</span>
                      </div>
                      <div className="w-full h-2 bg-richgray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-richnavy-600 transition-all duration-500" 
                          style={{ width: `${match.votes.away}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <Button variant="outline" className="border-richgray-200 hover:bg-richnavy-50 text-sm h-auto py-2">
                      Home
                    </Button>
                    <Button variant="outline" className="border-richgray-200 hover:bg-richnavy-50 text-sm h-auto py-2">
                      Draw
                    </Button>
                    <Button variant="outline" className="border-richgray-200 hover:bg-richnavy-50 text-sm h-auto py-2">
                      Away
                    </Button>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center text-xs text-richgray-500">
                    <div className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      <span>{match.views} views</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle size={14} className="mr-1" />
                      <span>{match.comments} comments</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-richnavy-700 to-richnavy-900 rounded-xl overflow-hidden shadow-lg text-white">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">Get Premium Predictions</h3>
                  <p className="text-richgray-300 text-sm mb-6">
                    Unlock expert predictions with high accuracy rates and detailed analysis for all matches.
                  </p>
                  <Button className="w-full bg-richorange hover:bg-richorange-600 text-white">
                    Join VIP Membership
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Prediction;
