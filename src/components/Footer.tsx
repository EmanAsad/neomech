import React from 'react';
import { Zap, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">NeoMech Laser</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading CNC laser cutting and fabrication company delivering precision, 
              quality, and innovation in every project. Your trusted partner for 
              industrial and creative manufacturing solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/03253828772" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Inverter Bodies</li>
              <li>UPS Bodies</li>
              <li>Islamic Calligraphy</li>
              <li>Business Logos</li>
              <li>Side Tables</li>
              <li>Custom Cutting</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-blue-400" />
              <span>03008638199</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-blue-400" />
              <span>easad476@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-blue-400" />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 NeoMech Laser. All rights reserved. | Precision Cutting, Expert Fabrication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;