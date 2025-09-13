import React, { useState } from 'react';
import { 
  Home, 
  Car, 
  Building2, 
  DoorOpen, 
  ChefHat, 
  Move3D, 
  Shield, 
  Sun, 
  Warehouse, 
  Square,
  Grid3X3,
  ChevronRight,
  Star,
  CheckCircle,
  LucideIcon,
    Zap,         // <-- Add this
  Settings,    // <-- Add this
  RotateCw,    // <-- Add this
  Box,         // <-- Add this
  PenTool,     // <-- Add this
  Flame,       // <-- Add this
  Wrench,      // <-- Add this
  Cog,         // <-- Add this
  Package,     // <-- Add this
  Battery  
} from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface WhyChooseUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

const services: Service[] = [
{
  icon: Car,
  title: 'Petrol Pump Canopies',
  category: 'Industrial Canopies',
  description: 'Professional petrol pump canopies with precise fascia proportions and 36" maximum height specification.',
  features: ['Weather resistant coating', 'Custom sizing available', 'Professional installation', 'Compliance with safety standards'],
  image: '../public/images/head-laser-cutting-machine.jpg'
},
{
  icon: Zap,
  title: 'CNC Fiber Laser Cutting',
  category: 'Precision Manufacturing',
  description: 'High-precision fiber laser cutting services for metals with exceptional edge quality and minimal heat-affected zones.',
  features: ['0.1mm cutting precision', 'Multiple material compatibility', 'Complex geometry capability', 'Automated nesting optimization'],
  image: '../public/images/head-laser-cutting-machine.jpg'
},
{
  icon: Settings,
  title: 'CNC Milling (3-Axis)',
  category: 'Machining Services',
  description: 'Advanced 3-axis CNC milling for complex parts manufacturing with tight tolerances and superior surface finishes.',
  features: ['±0.005mm tolerance capability', 'Multi-material processing', 'Prototype to production runs', 'Quality inspection included'],
  image: '../public/images/head-laser-cutting-machine.jpg'
},
{
  icon: RotateCw,
  title: 'CNC Lathe',
  category: 'Turning Operations',
  description: 'Precision CNC turning services for cylindrical components with excellent concentricity and surface finish.',
  features: ['High-speed turning capability', 'Live tooling options', 'Thread cutting precision', 'Bar feeding automation'],
  image: '../public/images/head-laser-cutting-machine.jpg'
},
{
  icon: Box,
  title: '3D Printing',
  category: 'Additive Manufacturing',
  description: 'Professional 3D printing services using advanced materials for prototyping and small-batch production.',
  features: ['Multiple printing technologies', 'Engineering-grade materials', 'Post-processing services', 'Rapid prototyping capability'],
  image: '../public/images/head-laser-cutting-machine.jpg'
},
{
  icon: PenTool,
  title: 'CAD Design Services',
  category: 'Engineering Design',
  description: 'Comprehensive CAD design and engineering services from concept to manufacturing-ready drawings.',
  features: ['2D/3D modeling expertise', 'Technical drawing creation', 'Design optimization', 'Manufacturing consultation'],
  image: '../public/images/head-laser-cutting-machine.jpg'
},
{
  icon: Flame,
  title: 'Laser Welding',
  category: 'Joining Technologies',
  description: 'Precision laser welding for high-quality joints with minimal distortion and superior strength.',
  features: ['Micro-welding capability', 'Dissimilar metal joining', 'Minimal heat input', 'Automated positioning'],
  image: '../public/images/head-laser-cutting-machine.jpg'
},
{
  icon: Wrench,
  title: 'Arc Welding',
  category: 'Welding Services',
  description: 'Professional arc welding services for structural and fabrication work with certified welders.',
  features: ['Multiple electrode types', 'Thick section capability', 'Structural welding certified', 'Quality testing available'],
  image: '../public/images/head-laser-cutting-machine.jpg'
},
{
  icon: Shield,
  title: 'Argon Welding (TIG)',
  category: 'Precision Welding',
  description: 'High-quality TIG welding with argon shielding for aluminum, stainless steel, and exotic alloys.',
  features: ['Superior weld quality', 'Thin material expertise', 'Exotic alloy compatibility', 'Precision control'],
  image: '../public/images/head-laser-cutting-machine.jpg'
},
{
  icon: Cog,
  title: 'Mechanical Projects Fabrication',
  category: 'Custom Fabrication',
  description: 'Complete mechanical fabrication projects from design through assembly and testing.',
  features: ['End-to-end project management', 'Custom machinery building', 'Assembly and testing', 'Documentation provided'],
  image: '../public/images/head-laser-cutting-machine.jpg'
},
{
  icon: Package,
  title: 'Electrical Enclosure Bodies',
  category: 'Enclosure Solutions',
  description: 'Custom electrical enclosure manufacturing with IP rating compliance and thermal management.',
  features: ['IP65/IP67 rated options', 'Custom ventilation design', 'Cable management solutions', 'Powder coating finish'],
  image: '../public/images/head-laser-cutting-machine.jpg'
},
{
  icon: Battery,
  title: 'Inverter Body',
  category: 'Power Electronics Housing',
  description: 'Specialized inverter enclosure manufacturing with EMI shielding and thermal dissipation features.',
  features: ['EMI/RFI shielding', 'Thermal management design', 'Vibration resistance', 'Custom mounting options'],
 image: '../public/images/head-laser-cutting-machine.jpg'
}
];

  const stats: StatItem[] = [
    { value: '500+', label: 'Projects Completed' },
    { value: '12', label: 'Service Categories' },
    { value: '10+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  const whyChooseUs: WhyChooseUsItem[] = [
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and premium materials ensure long-lasting solutions.'
    },
    {
      icon: CheckCircle,
      title: 'Timely Delivery',
      description: 'Professional project management ensures on-time completion every time.'
    },
    {
      icon: Shield,
      title: 'Comprehensive Support',
      description: 'From consultation to installation, we provide complete end-to-end service.'
    }
  ];

  const handleServiceHover = (index: number): void => {
    setActiveService(index);
  };

  const handleServiceLeave = (): void => {
    setActiveService(null);
  };

  const handleConsultationClick = (): void => {
    // Add consultation form logic or navigation here
    console.log('Free consultation requested');
  };

  return (

    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-20 bg-blue-600 rounded"></div>
            <span className="mx-4 text-blue-600 font-semibold">SERVICES</span>
            <div className="h-1 w-20 bg-blue-600 rounded"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Complete Metal <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            From industrial canopies to custom furniture, we deliver comprehensive metal fabrication 
            services with over a decade of expertise and unwavering commitment to quality.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden hover:bg-gray-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/20 cursor-pointer border border-gray-200 hover:border-blue-600/50"
              onMouseEnter={() => handleServiceHover(index)}
              onMouseLeave={handleServiceLeave}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {service.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors text-blue-600">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {activeService === index && (
                  <div className="space-y-2 animate-in slide-in-from-bottom duration-300">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-700">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full flex items-center justify-center text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors group">
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white/50 rounded-2xl p-8 md:p-12 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">DNEO Mech</span>?
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button 
            onClick={handleConsultationClick}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Free Consultation
          </button>
          <p className="text-gray-600 text-sm mt-3">
            Ready to start your project? Contact us for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Services;