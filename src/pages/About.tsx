
import React from 'react';
import MainLayout from '../layout/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-richgray-800 mb-6">About Us</h1>
            <div className="prose prose-lg">
              <p>Welcome to our football prediction service. We provide expert analysis and predictions for football matches across major leagues.</p>
              <p>Our team of experts analyzes statistics, form, and other factors to bring you the most accurate predictions possible.</p>
              <h2>Our Mission</h2>
              <p>To provide reliable and accurate football predictions to help our users make informed decisions.</p>
              <h2>Why Choose Us</h2>
              <ul>
                <li>Expert analysis from industry professionals</li>
                <li>Daily updated predictions</li>
                <li>Premium options for serious bettors</li>
                <li>Transparent success rates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
