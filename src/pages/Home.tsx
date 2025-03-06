
import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy, MessageSquare } from 'lucide-react';
import HomeHero from '../components/HomeHero';
import PredictionCategories from '../components/PredictionCategories';

const Home = () => {
  return (
    <MainLayout>
      <HomeHero />
      <PredictionCategories />
    </MainLayout>
  );
};

export default Home;
