import React from 'react';
import { Zap, Settings, Pen, Cpu, Shield, Home, Type, Box } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'CNC Laser Cutting',
      description: 'High-precision laser cutting for various materials with exceptional accuracy and clean edges.',
      image: 'images/img1.jpg'
    },
    {
      icon: Settings,
      title: 'Sheet Metal Fabrication',
      description: 'Complete fabrication services including bending, welding, and assembly for complex projects.',
      image: 'images/img2.jpg'
    },
    {
      icon: Pen,
      title: 'Engraving & Etching',
      description: 'Detailed engraving and etching services for branding, identification, and decorative purposes.',
      image: 'images/'
    },
    {
      icon: Cpu,
      title: 'Prototyping',
      description: 'Rapid prototyping services to bring your concepts to life quickly and cost-effectively.',
      image: 'images/head-laser-cutting-machine.jpg'
    },
    {
      icon: Type,
      title: 'Calligraphy Signage',
      description: 'Elegant metal calligraphy and custom signage for businesses, events, and personal use.',
      image: 'images/calligraphy.jpg'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive CNC and fabrication solutions for all your precision manufacturing needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/20"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
