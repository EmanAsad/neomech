import React from 'react';
import { Zap, Clock, Lightbulb, DollarSign, Shield, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'High Precision',
      description: 'State-of-the-art CNC equipment ensures accuracy within 0.001" tolerance levels.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Efficient processes and skilled operators deliver your projects on time, every time.'
    },
    {
      icon: Lightbulb,
      title: 'Custom Solutions',
      description: 'Tailored approaches for unique requirements, from concept to finished product.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Fair, transparent pricing with no hidden costs and excellent value for quality.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure consistent, superior results.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep knowledge in fabrication and design.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Why Choose <span className="text-blue-600">NeoMech Laser?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference that precision, expertise, and commitment to excellence make
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <reason.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;