
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-richnavy-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">Rich<span className="text-richorange">Predict</span></h2>
            </div>
            <p className="text-richgray-300 text-sm">
              Expert football predictions, betting tips and statistics to help you make informed betting decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-richgray-300 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-richgray-300 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-richgray-300 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-richgray-300 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-richgray-300 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/predictions" className="text-richgray-300 hover:text-white transition-colors text-sm">Predictions</Link></li>
              <li><Link to="/offers" className="text-richgray-300 hover:text-white transition-colors text-sm">Betting Offers</Link></li>
              <li><Link to="/live-scores" className="text-richgray-300 hover:text-white transition-colors text-sm">Live Scores</Link></li>
              <li><Link to="/insights" className="text-richgray-300 hover:text-white transition-colors text-sm">Expert Insights</Link></li>
              <li><Link to="/vip" className="text-richgray-300 hover:text-white transition-colors text-sm">VIP Membership</Link></li>
            </ul>
          </div>

          {/* Popular Leagues */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Leagues</h3>
            <ul className="space-y-3">
              <li><Link to="/predictions/premier-league" className="text-richgray-300 hover:text-white transition-colors text-sm">Premier League</Link></li>
              <li><Link to="/predictions/la-liga" className="text-richgray-300 hover:text-white transition-colors text-sm">La Liga</Link></li>
              <li><Link to="/predictions/serie-a" className="text-richgray-300 hover:text-white transition-colors text-sm">Serie A</Link></li>
              <li><Link to="/predictions/bundesliga" className="text-richgray-300 hover:text-white transition-colors text-sm">Bundesliga</Link></li>
              <li><Link to="/predictions/ligue-1" className="text-richgray-300 hover:text-white transition-colors text-sm">Ligue 1</Link></li>
              <li><Link to="/predictions/champions-league" className="text-richgray-300 hover:text-white transition-colors text-sm">Champions League</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-richgray-300 mr-3 mt-1 flex-shrink-0" />
                <span className="text-richgray-300 text-sm">1234 Prediction Street, Football City, FC 56789</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-richgray-300 mr-3 flex-shrink-0" />
                <span className="text-richgray-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-richgray-300 mr-3 flex-shrink-0" />
                <span className="text-richgray-300 text-sm">contact@richpredict.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-richnavy-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-richgray-400 text-sm">
              &copy; {new Date().getFullYear()} RichPredict. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/terms" className="text-richgray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
              <Link to="/privacy" className="text-richgray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link to="/cookies" className="text-richgray-400 hover:text-white transition-colors text-sm">Cookies Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
