import React from 'react';
import { ArrowRight, Play, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="images\img2.jpg"
          alt="CNC Laser Cutting in Action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          NeoMech <span className="text-blue-400">Laser</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-4">
          Precision Laser Cutting
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your ideas into reality with expert CNC laser cutting services
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center group"
          >
            Browse Services
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="https://wa.me/03253828772?text=Hi! I'm interested in your laser cutting services."
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center group"
          >
            <MessageCircle className="mr-2" size={20} />
            WhatsApp Order
          </a>
        </div>

        {/* Why Choose Section */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-2">Precision Cutting</h3>
            <p className="text-gray-300 text-sm">State-of-the-art CNC laser technology for perfect cuts every time</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-2">Fast Delivery</h3>
            <p className="text-gray-300 text-sm">Quick turnaround times with WhatsApp order tracking</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-2">Premium Quality</h3>
            <p className="text-gray-300 text-sm">High-grade materials and rigorous quality control</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;