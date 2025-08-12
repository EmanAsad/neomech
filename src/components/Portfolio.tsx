import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      image: 'https://images.pexels.com/photos/162519/architecture-building-amsterdam-steel-162519.jpeg',
      title: 'Architectural Components',
      category: 'Industrial'
    },
    {
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      title: 'Precision Parts',
      category: 'Manufacturing'
    },
    {
      image: 'https://images.pexels.com/photos/1108569/pexels-photo-1108569.jpeg',
      title: 'Custom Signage',
      category: 'Commercial'
    },
    {
      image: 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg',
      title: 'Decorative Art',
      category: 'Artistic'
    },
    {
      image: 'https://images.pexels.com/photos/1108565/pexels-photo-1108565.jpeg',
      title: 'Sheet Metal Work',
      category: 'Fabrication'
    },
    {
      image: 'https://images.pexels.com/photos/1108566/pexels-photo-1108566.jpeg',
      title: 'Laser Cut Details',
      category: 'Precision'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-red-600">Portfolio</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcase of our precision work across various industries and applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <div className="text-red-600 text-sm font-medium mb-1">{item.category}</div>
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;