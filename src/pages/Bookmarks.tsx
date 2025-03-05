
import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import { useQuery } from '@tanstack/react-query';
import { getMatches, Match } from '../utils/db';
import MatchCard from '../components/MatchCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Bookmark, TrashIcon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const BookmarksPage = () => {
  const { toast } = useToast();
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  
  useEffect(() => {
    // Load bookmarked matches from localStorage
    const saved = localStorage.getItem('bookmarkedMatches');
    setBookmarkedIds(saved ? JSON.parse(saved) : []);
  }, []);

  const { data: allMatches, isLoading } = useQuery({
    queryKey: ['allMatches'],
    queryFn: getMatches,
  });

  // Filter bookmarked matches
  const bookmarkedMatches = allMatches?.filter(match => 
    bookmarkedIds.includes(match.id)
  ) || [];

  const removeBookmark = (matchId: number) => {
    setBookmarkedIds(prev => {
      const newBookmarks = prev.filter(id => id !== matchId);
      localStorage.setItem('bookmarkedMatches', JSON.stringify(newBookmarks));
      
      toast({
        title: "Removed from bookmarks",
        description: "This prediction has been removed from your bookmarks",
      });
      
      return newBookmarks;
    });
  };

  const clearAllBookmarks = () => {
    setBookmarkedIds([]);
    localStorage.removeItem('bookmarkedMatches');
    
    toast({
      title: "All bookmarks cleared",
      description: "Your bookmarks have been cleared successfully",
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-richnavy-50 rounded-full px-3 py-1 mb-3">
              <Bookmark size={14} className="text-richorange" />
              <span className="text-xs font-medium text-richnavy-600">Saved Predictions</span>
            </div>
            <h1 className="text-3xl font-bold text-richgray-800">Your Bookmarked Matches</h1>
            <p className="mt-2 text-richgray-600 max-w-xl">
              Review and manage your saved match predictions
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button 
              variant="outline" 
              className="border-richnavy-100 text-richnavy-700 hover:bg-richnavy-50"
              asChild
            >
              <Link to="/">
                <ArrowLeft size={16} className="mr-2" />
                <span>Back to Home</span>
              </Link>
            </Button>
            {bookmarkedMatches.length > 0 && (
              <Button 
                variant="outline" 
                className="border-red-200 text-red-600 hover:bg-red-50"
                onClick={clearAllBookmarks}
              >
                <TrashIcon size={16} className="mr-2" />
                <span>Clear All</span>
              </Button>
            )}
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="animate-pulse">
                <div className="glass rounded-xl overflow-hidden border border-white/30 p-5">
                  <Skeleton className="h-24 w-full mb-4" />
                  <Skeleton className="h-8 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {bookmarkedMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookmarkedMatches.map((match) => (
                  <div key={match.id} className="relative group animate-fade-in">
                    <MatchCard match={match} />
                    <button 
                      onClick={() => removeBookmark(match.id)}
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-1.5 text-richgray-600 hover:text-red-500 transition-colors shadow-sm"
                      aria-label="Remove from bookmarks"
                    >
                      <TrashIcon size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-richgray-50/30 rounded-xl border border-richgray-100">
                <Bookmark size={48} className="mx-auto text-richgray-300 mb-4" />
                <h3 className="text-xl font-semibold text-richgray-700 mb-2">No Bookmarked Matches</h3>
                <p className="text-richgray-500 mb-6 max-w-md mx-auto">
                  You haven't bookmarked any match predictions yet. Browse trending predictions and save your favorites.
                </p>
                <Button asChild>
                  <Link to="/">
                    Discover Predictions
                  </Link>
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default BookmarksPage;
