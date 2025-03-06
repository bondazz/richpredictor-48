
import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Button } from '@/components/ui/button';
import { MessageSquare, ExternalLink, Check, Trophy } from 'lucide-react';

const PremiumService = () => {
  // Sample premium packages
  const premiumPackages = [
    {
      id: 1,
      name: 'Weekly Premium',
      price: 49.99,
      description: 'Access to all premium predictions for 7 days',
      features: [
        'Daily premium picks',
        'Telegram group access',
        'Direct support',
        'Win rate 75%+'
      ]
    },
    {
      id: 2,
      name: 'Monthly Premium',
      price: 149.99,
      description: 'Access to all premium predictions for 30 days',
      features: [
        'Daily premium picks',
        'Telegram group access',
        'Direct support',
        'Win rate 75%+',
        '20% discount vs weekly'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Quarterly Premium',
      price: 349.99,
      description: 'Access to all premium predictions for 90 days',
      features: [
        'Daily premium picks',
        'Telegram group access',
        'Direct support',
        'Win rate 75%+',
        '30% discount vs weekly',
        'Special VIP picks'
      ]
    }
  ];

  return (
    <MainLayout>
      <section className="py-16 bg-gradient-to-b from-white to-richnavy-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-sm mb-4">
              <Trophy size={14} className="text-richorange" />
              <span className="text-xs font-medium text-richnavy-600">Premium Access</span>
            </div>
            <h1 className="text-4xl font-bold text-richgray-800 mb-4">Premium Prediction Service</h1>
            <p className="text-richgray-600 max-w-2xl mx-auto">
              Gain access to our most valuable predictions with our premium subscription packages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {premiumPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`glass rounded-xl border ${
                  pkg.popular ? 'border-richorange shadow-lg' : 'border-white/30'
                } p-6 relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-richorange text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-richgray-800 mb-2">{pkg.name}</h2>
                  <div className="flex justify-center items-baseline">
                    <span className="text-3xl font-bold text-richorange">${pkg.price}</span>
                  </div>
                  <p className="text-sm text-richgray-600 mt-2">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-richgray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full ${
                  pkg.popular ? 'bg-richorange hover:bg-richorange-600' : 'bg-richnavy-600 hover:bg-richnavy-700'
                } text-white`} asChild>
                  <a href="https://t.me/richpredictspremium" target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={16} className="mr-2" />
                    Get Started
                    <ExternalLink size={14} className="ml-2" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto glass rounded-xl border border-white/30 p-8">
            <h2 className="text-2xl font-bold text-richgray-800 mb-4 text-center">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-richnavy-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-richorange">1</span>
                </div>
                <h3 className="font-semibold mb-2">Choose a Package</h3>
                <p className="text-sm text-richgray-600">Select the premium package that suits your needs.</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-richnavy-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-richorange">2</span>
                </div>
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p className="text-sm text-richgray-600">Reach out to us on Telegram to complete your subscription.</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-richnavy-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-richorange">3</span>
                </div>
                <h3 className="font-semibold mb-2">Get Predictions</h3>
                <p className="text-sm text-richgray-600">Receive premium predictions directly in your Telegram.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PremiumService;
