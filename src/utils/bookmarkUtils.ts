
// Utility functions for bookmark management
export const getBookmarkedMatches = (): number[] => {
  const saved = localStorage.getItem('bookmarkedMatches');
  return saved ? JSON.parse(saved) : [];
};

export const toggleBookmark = (matchId: number): number[] => {
  const bookmarks = getBookmarkedMatches();
  const isBookmarked = bookmarks.includes(matchId);
  
  let newBookmarks;
  if (isBookmarked) {
    newBookmarks = bookmarks.filter(id => id !== matchId);
  } else {
    newBookmarks = [...bookmarks, matchId];
  }
  
  localStorage.setItem('bookmarkedMatches', JSON.stringify(newBookmarks));
  return newBookmarks;
};

export const isMatchBookmarked = (matchId: number): boolean => {
  const bookmarks = getBookmarkedMatches();
  return bookmarks.includes(matchId);
};

export const clearAllBookmarks = (): void => {
  localStorage.removeItem('bookmarkedMatches');
};
