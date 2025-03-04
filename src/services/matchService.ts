
import { getMatches, getMatchById, searchMatches, Match, MatchDetails } from '../utils/db';

export const fetchMatches = async (): Promise<Match[]> => {
  try {
    return await getMatches();
  } catch (error) {
    console.error('Error fetching matches:', error);
    return [];
  }
};

export const fetchMatchDetails = async (id: number): Promise<MatchDetails | null> => {
  try {
    return await getMatchById(id);
  } catch (error) {
    console.error(`Error fetching match with ID ${id}:`, error);
    return null;
  }
};

export const searchMatchPredictions = async (query: string): Promise<Match[]> => {
  try {
    return await searchMatches(query);
  } catch (error) {
    console.error('Error searching matches:', error);
    return [];
  }
};
