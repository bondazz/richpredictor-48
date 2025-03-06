
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

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
              <li><Link to="/about" className="text-richgray-300 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link to="/partners" className="text-richgray-300 hover:text-white transition-colors text-sm">Partners</Link></li>
              <li><Link to="/premium" className="text-richgray-300 hover:text-white transition-colors text-sm">Premium</Link></li>
              <li><Link to="/info" className="text-richgray-300 hover:text-white transition-colors text-sm">Info</Link></li>
            </ul>
          </div>

          {/* Telegram */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Telegram Channels</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/telegram" className="text-richgray-300 hover:text-white transition-colors text-sm flex items-center">
                  <MessageSquare size={14} className="mr-2" />
                  @richpredicts
                </Link>
              </li>
              <li>
                <Link to="/premium-service" className="text-richgray-300 hover:text-white transition-colors text-sm flex items-center">
                  <MessageSquare size={14} className="mr-2" />
                  @richpredictspremium
                </Link>
              </li>
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
              <li>
                <Link to="/contact" className="text-richgray-300 hover:text-white transition-colors text-sm">
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-richnavy-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-richgray-400 text-sm">
              &copy; {new Date().getFullYear()} RichPredict. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
