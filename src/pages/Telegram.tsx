
import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Button } from '@/components/ui/button';
import { MessageSquare, ExternalLink } from 'lucide-react';

const Telegram = () => {
  return (
    <MainLayout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-richgray-800 mb-4">Telegram Channel</h1>
              <p className="text-richgray-600">
                Join our Telegram channel for the latest predictions, tips, and exclusive content.
              </p>
            </div>
            
            <div className="glass rounded-xl border border-white/30 p-8 text-center">
              <div className="w-20 h-20 bg-richgray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={32} className="text-richorange" />
              </div>
              
              <h2 className="text-2xl font-bold text-richgray-800 mb-4">@richpredicts</h2>
              <p className="text-richgray-600 mb-8">
                Our official Telegram channel for free predictions and updates.
              </p>
              
              <Button className="bg-richorange hover:bg-richorange-600 text-white px-8" asChild>
                <a href="https://t.me/richpredicts" target="_blank" rel="noopener noreferrer">
                  <MessageSquare size={16} className="mr-2" />
                  Join Channel
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="glass rounded-xl border border-white/30 p-8 text-center mt-8">
              <div className="w-20 h-20 bg-richgray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={32} className="text-richorange" />
              </div>
              
              <h2 className="text-2xl font-bold text-richgray-800 mb-4">@richpredictspremium</h2>
              <p className="text-richgray-600 mb-8">
                Our premium Telegram channel with exclusive high-value predictions.
              </p>
              
              <Button className="bg-richorange hover:bg-richorange-600 text-white px-8" asChild>
                <a href="https://t.me/richpredictspremium" target="_blank" rel="noopener noreferrer">
                  <MessageSquare size={16} className="mr-2" />
                  Premium Channel
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="mt-10 p-6 bg-richnavy-50/30 rounded-lg text-center">
              <p className="text-richgray-700">
                Want to get personalized predictions and support?
              </p>
              <p className="font-medium text-richgray-800">
                Join our Premium Service for exclusive access to our best predictions!
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Telegram;
