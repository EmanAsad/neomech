import React from 'react';
import { Target, Eye } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-red-600">Purpose</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Driving innovation and excellence in every project we undertake
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-3 rounded-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold ml-4">Mission</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              "Deliver precision, quality, and creativity in every cut. We are committed to exceeding client 
              expectations through innovative solutions, superior craftsmanship, and unwavering attention to detail."
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-3 rounded-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold ml-4">Vision</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              "Redefining fabrication through innovation and excellence. We envision a future where precision 
              manufacturing meets artistic creativity, setting new industry standards for quality and innovation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;