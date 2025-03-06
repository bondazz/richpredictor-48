
import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the contact form data to a server
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <MainLayout>
      <section className="py-16 bg-gradient-to-b from-white to-richnavy-50/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-richgray-800 mb-4">Contact Us</h1>
              <p className="text-richgray-600">
                Have a question or need assistance? Reach out to us and we'll respond as soon as possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-xl border border-white/30 p-6">
                <h2 className="text-xl font-semibold text-richgray-800 mb-4">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-richgray-700 mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-richgray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-richgray-700 mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" rows={5} required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-richorange hover:bg-richorange-600 text-white">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="glass rounded-xl border border-white/30 p-6">
                <h2 className="text-xl font-semibold text-richgray-800 mb-4">Contact Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-richgray-700 font-medium mb-2">Telegram:</p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/telegram">
                        <MessageSquare size={16} className="mr-2" />
                        @richpredicts
                      </Link>
                    </Button>
                  </div>
                  
                  <div>
                    <p className="text-richgray-700 font-medium mb-2">Premium Service:</p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/premium-service">
                        <MessageSquare size={16} className="mr-2" />
                        @richpredictspremium
                      </Link>
                    </Button>
                  </div>
                  
                  <div>
                    <p className="text-richgray-700 font-medium mb-2">Email:</p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:contact@richpredicts.com">
                        <Mail size={16} className="mr-2" />
                        contact@richpredicts.com
                      </a>
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t border-richgray-100 mt-4">
                    <p className="text-richgray-600 text-sm">
                      We usually respond to messages within 24 hours. For faster response, 
                      please contact us via Telegram.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
