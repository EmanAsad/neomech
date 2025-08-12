import React from 'react';
import { Award, Users, Clock, Settings } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Satisfied Clients', value: '500+' },
    { icon: Clock, label: 'Projects Completed', value: '2000+' },
    { icon: Settings, label: 'Advanced Machines', value: '12+' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              About <span className="text-blue-600">NeoMech Laser</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              NeoMech Laser is a leading CNC laser cutting and fabrication company specializing in precision manufacturing 
              and custom metalwork. With state-of-the-art technology and a commitment to excellence, we deliver 
              superior quality products for both industrial and creative applications.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our expertise spans across various industries, from inverter bodies and UPS enclosures to beautiful 
              Islamic calligraphy and custom business signage. We combine advanced technology with skilled craftsmanship 
              to bring your vision to life with unmatched precision.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 transition-colors duration-200">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;