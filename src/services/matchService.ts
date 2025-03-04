
import { getMatches, getMatchById, searchMatches, Match, MatchDetails } from '../utils/db';
import { toast } from "@/components/ui/use-toast";

// Cache for storing previously fetched matches
const matchesCache: {
  allMatches?: Match[];
  matchDetails: Record<number, MatchDetails>;
  searchResults: Record<string, Match[]>;
  timestamp: number;
} = {
  matchDetails: {},
  searchResults: {},
  timestamp: Date.now()
};

// Cache expiration time (5 minutes)
const CACHE_EXPIRATION = 5 * 60 * 1000;

// Clear cache if older than expiration time
const validateCache = () => {
  const now = Date.now();
  if (now - matchesCache.timestamp > CACHE_EXPIRATION) {
    matchesCache.allMatches = undefined;
    matchesCache.matchDetails = {};
    matchesCache.searchResults = {};
    matchesCache.timestamp = now;
  }
};

export const fetchMatches = async (): Promise<Match[]> => {
  validateCache();
  
  try {
    // Return cached matches if available
    if (matchesCache.allMatches) {
      return matchesCache.allMatches;
    }
    
    const matches = await getMatches();
    matchesCache.allMatches = matches;
    matchesCache.timestamp = Date.now();
    return matches;
  } catch (error) {
    console.error('Error fetching matches:', error);
    toast({
      title: "Failed to load matches",
      description: "Please try again later",
      variant: "destructive"
    });
    return [];
  }
};

export const fetchMatchDetails = async (id: number): Promise<MatchDetails | null> => {
  validateCache();
  
  try {
    // Return cached match details if available
    if (matchesCache.matchDetails[id]) {
      return matchesCache.matchDetails[id];
    }
    
    const matchDetails = await getMatchById(id);
    if (matchDetails) {
      matchesCache.matchDetails[id] = matchDetails;
      matchesCache.timestamp = Date.now();
    }
    return matchDetails;
  } catch (error) {
    console.error(`Error fetching match with ID ${id}:`, error);
    toast({
      title: "Failed to load match details",
      description: "Please try again later",
      variant: "destructive"
    });
    return null;
  }
};

export const searchMatchPredictions = async (query: string): Promise<Match[]> => {
  validateCache();
  
  // Don't search if query is too short
  if (query.trim().length < 3) {
    return [];
  }
  
  try {
    // Return cached search results if available
    const cacheKey = query.toLowerCase();
    if (matchesCache.searchResults[cacheKey]) {
      return matchesCache.searchResults[cacheKey];
    }
    
    const results = await searchMatches(query);
    matchesCache.searchResults[cacheKey] = results;
    matchesCache.timestamp = Date.now();
    return results;
  } catch (error) {
    console.error('Error searching matches:', error);
    toast({
      title: "Search failed",
      description: "Please try again",
      variant: "destructive"
    });
    return [];
  }
};
