
// This file would normally connect to MySQL, but for now we'll use mock data
// When deploying, replace this with actual MySQL connection code

export interface Match {
  id: number;
  league: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  stadium: string;
  homeWinProbability: number;
  drawProbability: number;
  awayWinProbability: number;
  prediction: string;
  odd: number;
}

export interface MatchDetails extends Match {
  analysisPoints: string[];
  additionalTips: {
    name: string;
    odd: number;
    confidence: string;
  }[];
  recentForm: {
    home: string[];
    away: string[];
  };
  headToHead: {
    date: string;
    result: string;
  }[];
  votes: {
    home: number;
    draw: number;
    away: number;
  };
  comments: number;
  views: number;
}

// Check if installation was completed
export const checkInstallation = (): boolean => {
  // 1. Check localStorage first (most common)
  const dbConfigured = localStorage.getItem('dbConfigured');
  
  // 2. Check for installation cookie
  let installCookie = false;
  try {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    installCookie = cookies.some(cookie => cookie.startsWith('installation_complete=true'));
  } catch (e) {
    console.error('Error parsing cookies:', e);
  }
  
  // 3. Check sessionStorage for hash
  const installHash = sessionStorage.getItem('installation_hash');
  
  // 4. Check IndexedDB as last resort
  let indexedDBInstalled = false;
  try {
    const request = indexedDB.open('installationDB', 1);
    request.onsuccess = function(event) {
      const db = request.result;
      const transaction = db.transaction(['installation'], 'readonly');
      const store = transaction.objectStore('installation');
      const getRequest = store.get(1);
      
      getRequest.onsuccess = function() {
        if (getRequest.result && getRequest.result.completed) {
          indexedDBInstalled = true;
        }
      };
    };
  } catch (e) {
    console.warn('IndexedDB check failed:', e);
  }
  
  // Consider it installed if any of these checks pass
  return dbConfigured === 'true' || installCookie || !!installHash || indexedDBInstalled;
};

// Mock data for development - this would be replaced by actual MySQL queries
const matchesData: Match[] = [
  {
    id: 1,
    league: 'Premier League',
    homeTeam: 'Manchester City',
    awayTeam: 'Liverpool',
    date: 'Sunday, June 5, 2023',
    time: '21:00',
    stadium: 'Etihad Stadium',
    homeWinProbability: 55,
    drawProbability: 25,
    awayWinProbability: 20,
    prediction: 'Manchester City to Win',
    odd: 1.85
  },
  {
    id: 2,
    league: 'La Liga',
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    date: 'Saturday, June 4, 2023',
    time: '20:00',
    stadium: 'Camp Nou',
    homeWinProbability: 45,
    drawProbability: 30,
    awayWinProbability: 25,
    prediction: 'Both Teams to Score',
    odd: 1.65
  },
  {
    id: 3,
    league: 'Bundesliga',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Borussia Dortmund',
    date: 'Friday, June 3, 2023',
    time: '19:30',
    stadium: 'Allianz Arena',
    homeWinProbability: 60,
    drawProbability: 20,
    awayWinProbability: 20,
    prediction: 'Over 2.5 Goals',
    odd: 1.90
  }
];

const matchDetailsData: Record<number, MatchDetails> = {
  1: {
    id: 1,
    league: 'Premier League',
    homeTeam: 'Manchester City',
    awayTeam: 'Liverpool',
    date: 'Sunday, June 5, 2023',
    time: '21:00',
    stadium: 'Etihad Stadium',
    homeWinProbability: 55,
    drawProbability: 25,
    awayWinProbability: 20,
    prediction: 'Manchester City to Win',
    odd: 1.85,
    analysisPoints: [
      'Manchester City has won 8 of their last 10 home games',
      'Liverpool is missing key defender Van Dijk due to injury',
      'Manchester City has scored in 90% of their home games this season',
      'Historically, Man City has a strong record against Liverpool at home',
      'Expected goals analysis favors Manchester City by 0.7 goals'
    ],
    additionalTips: [
      { name: 'Both Teams to Score', odd: 1.65, confidence: 'High' },
      { name: 'Over 2.5 Goals', odd: 1.90, confidence: 'Medium' },
      { name: 'Haaland to Score', odd: 1.75, confidence: 'High' }
    ],
    recentForm: {
      home: ['W', 'W', 'D', 'W', 'W'],
      away: ['W', 'L', 'W', 'D', 'L']
    },
    headToHead: [
      { date: '10 Apr 2023', result: 'Liverpool 1-4 Manchester City' },
      { date: '29 Dec 2022', result: 'Manchester City 3-2 Liverpool' },
      { date: '16 Oct 2022', result: 'Liverpool 1-0 Manchester City' },
      { date: '10 Apr 2022', result: 'Manchester City 2-2 Liverpool' },
      { date: '03 Oct 2021', result: 'Liverpool 2-2 Manchester City' }
    ],
    votes: {
      home: 65,
      draw: 15,
      away: 20
    },
    comments: 24,
    views: 1543
  },
  2: {
    id: 2,
    league: 'La Liga',
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    date: 'Saturday, June 4, 2023',
    time: '20:00',
    stadium: 'Camp Nou',
    homeWinProbability: 45,
    drawProbability: 30,
    awayWinProbability: 25,
    prediction: 'Both Teams to Score',
    odd: 1.65,
    analysisPoints: [
      'El Clasico matches historically have both teams scoring',
      'Barcelona has scored in 19 of their last 20 home games',
      'Real Madrid has a strong attacking record this season',
      'Both teams have key attackers in good form',
      'Recent head-to-head games show goals from both sides'
    ],
    additionalTips: [
      { name: 'Over 2.5 Goals', odd: 1.80, confidence: 'High' },
      { name: 'Lewandowski to Score', odd: 1.90, confidence: 'Medium' },
      { name: 'Benzema to Score', odd: 2.10, confidence: 'Medium' }
    ],
    recentForm: {
      home: ['W', 'W', 'W', 'D', 'W'],
      away: ['W', 'W', 'L', 'W', 'W']
    },
    headToHead: [
      { date: '15 Jan 2023', result: 'Real Madrid 3-1 Barcelona' },
      { date: '16 Oct 2022', result: 'Barcelona 3-2 Real Madrid' },
      { date: '20 Mar 2022', result: 'Real Madrid 0-4 Barcelona' },
      { date: '12 Jan 2022', result: 'Barcelona 2-3 Real Madrid' },
      { date: '24 Oct 2021', result: 'Barcelona 1-2 Real Madrid' }
    ],
    votes: {
      home: 40,
      draw: 25,
      away: 35
    },
    comments: 56,
    views: 2871
  },
  3: {
    id: 3,
    league: 'Bundesliga',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Borussia Dortmund',
    date: 'Friday, June 3, 2023',
    time: '19:30',
    stadium: 'Allianz Arena',
    homeWinProbability: 60,
    drawProbability: 20,
    awayWinProbability: 20,
    prediction: 'Over 2.5 Goals',
    odd: 1.90,
    analysisPoints: [
      'Der Klassiker matches average 3.5 goals per game',
      'Bayern Munich have scored 2+ goals in 85% of their home games',
      'Borussia Dortmund has a strong attacking record but weaker defense',
      'Both teams have fast-paced attacking play styles',
      'Recent meetings have produced high-scoring games'
    ],
    additionalTips: [
      { name: 'Both Teams to Score', odd: 1.60, confidence: 'High' },
      { name: 'Bayern Munich to Win', odd: 1.75, confidence: 'Medium' },
      { name: 'Musiala to Score', odd: 2.20, confidence: 'Medium' }
    ],
    recentForm: {
      home: ['W', 'W', 'W', 'W', 'D'],
      away: ['L', 'W', 'W', 'D', 'W']
    },
    headToHead: [
      { date: '1 Apr 2023', result: 'Bayern Munich 4-2 Borussia Dortmund' },
      { date: '8 Oct 2022', result: 'Borussia Dortmund 2-2 Bayern Munich' },
      { date: '23 Apr 2022', result: 'Bayern Munich 3-1 Borussia Dortmund' },
      { date: '4 Dec 2021', result: 'Borussia Dortmund 2-3 Bayern Munich' },
      { date: '17 Aug 2021', result: 'Borussia Dortmund 1-3 Bayern Munich' }
    ],
    votes: {
      home: 70,
      draw: 15,
      away: 15
    },
    comments: 32,
    views: 1876
  }
};

// Data access functions
export const getMatches = async (): Promise<Match[]> => {
  // In a real app, this would query the MySQL database
  return Promise.resolve(matchesData);
};

export const getMatchById = async (id: number): Promise<MatchDetails | null> => {
  // In a real app, this would query the MySQL database
  return Promise.resolve(matchDetailsData[id] || null);
};

export const searchMatches = async (query: string): Promise<Match[]> => {
  // In a real app, this would query the MySQL database with a LIKE clause
  if (!query) return Promise.resolve([]);
  
  const lowerQuery = query.toLowerCase();
  return Promise.resolve(
    matchesData.filter(
      match => 
        match.homeTeam.toLowerCase().includes(lowerQuery) ||
        match.awayTeam.toLowerCase().includes(lowerQuery) ||
        match.league.toLowerCase().includes(lowerQuery)
    )
  );
};
