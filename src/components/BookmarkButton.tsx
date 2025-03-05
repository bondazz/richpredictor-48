
import React from 'react';
import { BookmarkIcon, BookmarkCheck } from 'lucide-react';
import { toggleBookmark, isMatchBookmarked } from '../utils/bookmarkUtils';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

interface BookmarkButtonProps {
  matchId: number;
  onToggle?: (isBookmarked: boolean) => void;
  variant?: 'icon' | 'button';
  className?: string;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ 
  matchId, 
  onToggle, 
  variant = 'icon',
  className = '' 
}) => {
  const { toast } = useToast();
  const [bookmarked, setBookmarked] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    setBookmarked(isMatchBookmarked(matchId));
  }, [matchId]);
  
  const handleToggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toggleBookmark(matchId);
    const newState = !bookmarked;
    setBookmarked(newState);
    
    if (onToggle) {
      onToggle(newState);
    }
    
    toast({
      title: newState ? "Added to bookmarks" : "Removed from bookmarks",
      description: newState 
        ? "This prediction has been saved to your bookmarks" 
        : "This prediction has been removed from your bookmarks",
    });
  };
  
  if (variant === 'button') {
    return (
      <Button
        variant="outline"
        className={`${className} ${bookmarked ? 'bg-richorange/10 text-richorange border-richorange/30' : 'text-richgray-600'}`}
        onClick={handleToggleBookmark}
      >
        {bookmarked ? (
          <>
            <BookmarkCheck size={16} className="mr-2" />
            <span>Bookmarked</span>
          </>
        ) : (
          <>
            <BookmarkIcon size={16} className="mr-2" />
            <span>Add to Bookmarks</span>
          </>
        )}
      </Button>
    );
  }
  
  return (
    <button
      onClick={handleToggleBookmark}
      className={`${className} focus:outline-none transition-colors`}
      aria-label={bookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
    >
      {bookmarked ? (
        <BookmarkCheck size={18} className="text-richorange" />
      ) : (
        <BookmarkIcon size={18} className="text-richgray-500 hover:text-richorange" />
      )}
    </button>
  );
};

export default BookmarkButton;
