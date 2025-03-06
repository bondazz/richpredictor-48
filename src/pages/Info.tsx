
import React from 'react';
import MainLayout from '../layout/MainLayout';

const Info = () => {
  return (
    <MainLayout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-richgray-800 mb-6">Information</h1>
            <div className="prose prose-lg">
              <p>Welcome to our football prediction service. Here you can find important information about how our service works.</p>
              
              <h2>How Our Predictions Work</h2>
              <p>Our team of experts analyzes various factors including:</p>
              <ul>
                <li>Team form and performance</li>
                <li>Player availability and injuries</li>
                <li>Historical head-to-head statistics</li>
                <li>Home and away performance</li>
                <li>Weather conditions and other external factors</li>
              </ul>
              
              <h2>Types of Predictions</h2>
              <p>We offer several types of predictions:</p>
              <ul>
                <li><strong>1X2 Predictions:</strong> Home win, draw, or away win</li>
                <li><strong>Over/Under:</strong> Total goals over or under a specific number</li>
                <li><strong>Correct Score:</strong> Predicting the exact score of a match</li>
                <li><strong>Both Teams to Score:</strong> Whether both teams will score in a match</li>
              </ul>
              
              <h2>Premium vs Free Predictions</h2>
              <p>While we offer free predictions for all users, our premium service provides access to our most confident picks and exclusive analysis.</p>
              
              <h2>Terms of Service</h2>
              <p>By using our service, you agree to our terms of service. Predictions are provided for informational purposes only, and we are not responsible for any losses incurred.</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Info;
