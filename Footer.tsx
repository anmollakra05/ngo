import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">ImpactFellows</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Empowering changemakers to create sustainable solutions for communities worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Fellowship Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Partner with Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary-400 w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  123 Impact Street, Global City, 10001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary-400 w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@impactfellows.org" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  info@impactfellows.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary-400 w-5 h-5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-white text-lg font-medium mb-3">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest opportunities and news from our fellowship programs.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button 
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-12">
          <p>&copy; {new Date().getFullYear()} ImpactFellows. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;