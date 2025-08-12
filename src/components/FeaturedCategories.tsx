import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedCategories = () => {
  const categories = [
    {
      name: 'Home Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/aestheticsodetabele.jpg',
      category: 'homedecor'
    },
    {
      name: 'Home Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/asthethic wall decor.jpeg',
      category: 'homedecor'
    },
    {
      name: 'Home Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/asthethic wall decor.jpeg',
      category: 'homedecor'
    },
    {
      name: 'Home Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/bathroomhanger.jpg',
      category: 'homedecor'
    },
    {
      name: 'Home Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/bathroomrack.jpg',
      category: 'homedecor'
    },
    {
      name: 'Home Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/calligrapgy.jpg',
      category: 'homedecor'
    },
    {
      name: 'Home Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/calligraphy.jpg',
      category: 'homedecor'
    },
    {
      name: 'Home Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/chair.PNG',
      category: 'homedecor'
    },
    {
      name: 'Home Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/clock decor design.jpeg',
      category: 'homedecor'
    },
    {
      name: 'Cofee Table',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/cofeetable.jpg',
      category: 'homedecor'
    },
    {
      name: 'Rack',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/cuteshowrack.jpg',
      category: 'homedecor'
    },
    {
      name: 'Wall Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/decor1.PNG',
      category: 'homedecor'
    },
    {
      name: 'Gate Designs',
      description: 'Trendy Gate designs',
      productCount: 15,
      image: '/images/gates.jpg',
      category: 'homedecor'
    },
    {
      name: 'Gate Designs',
      description: 'Trendy Gate designs',
      productCount: 15,
      image: '/images/gates1.jpg',
      category: 'homedecor'
    },
    {
      name: 'Grills Designs',
      description: 'Trendy Grill designs',
      productCount: 15,
      image: '/images/grills.jpg',
      category: 'homedecor'
    },
    {
      name: 'Firepit',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/firepit1.jpg',
      category: 'homedecor'
    },
    {
      name: 'Home Number plate',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/home plate number.jpeg',
      category: 'homedecor'
    },
    {
      name: 'Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/homedecor.jpg',
      category: 'homedecor'
    },
    {
      name: 'Rack',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/keyrack.jpg',
      category: 'homedecor'
    },
    {
      name: 'Rack',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/KitcehRacks.jpg',
      category: 'homedecor'
    },
    {
      name: 'Rack',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/kitchenrack2.jpg',
      category: 'homedecor'
    },
    {
      name: 'Lamp Bodies',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/lampdesign.jpg',
      category: 'homedecor'
    },
    {
      name: 'Lamp Bodies',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/lampsaesthetic1.jpg',
      category: 'homedecor'
    },
    {
      name: 'Laptop Tables and Racks',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/laptoprack.jpg',
      category: 'homedecor'
    },
    {
      name: 'Laptop table',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/laptoptable.jpg',
      category: 'homedecor'
    },
    {
      name: 'Laterns Body',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/laterns.jpeg',
      category: 'homedecor'
    },
    {
      name: 'Hangers',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/Tissue rack.jpeg',
      category: 'homedecor'
    },
    {
      name: 'Tray',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/tray.jpg',
      category: 'homedecor'
    },
    {
      name: 'Towel Hanger',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/Tissue rack.jpeg',
      category: 'homedecor'
    },
    {
      name: 'Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/wall decor.jpeg',
      category: 'homedecor'
    },
    {
      name: 'Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/Wall Rack.jpeg',
      category: 'homedecor'
    },
    {
      name: 'Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: 'images/walldecor11.jpg',
      category: 'homedecor'
    },
    {
      name: 'Hanger',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/wallhanger.jpg',
      category: 'homedecor'
    },
    {
      name: 'Decor',
      description: 'All kinds of home decor pieces from wall racks to side tables',
      productCount: 15,
      image: '/images/roomdecor.jpg',
      category: 'homedecor'
    },
    {
      name: 'Designs',
      description: 'All kinds of grills and gate designs',
      productCount: 15,
      image: '/images/cnc designs.jpg',
      category: 'gatedesigns'
    },
    {
      name: 'Designs',
      description: 'All kinds of grills and gate designs',
      productCount: 15,
      image: '/images/designs.jpg',
      category: 'gatedesigns'
    },  
    {
      name: 'Islamic Calligraphy',
      description: 'Beautiful Islamic art and calligraphy',
      productCount: 25,
      image: 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg',
      category: 'islamic-calligraphy'
    },
    {
      name: 'Side Tables',
      description: 'Decorative laser-cut side tables',
      productCount: 18,
      image: '/images/siderack.jpg',
      category: 'side-tables'
    },
    {
      name: 'Side Tables',
      description: 'Decorative laser-cut side tables',
      productCount: 18,
      image: '/images/sidetable.jpg',
      category: 'side-tables'
    },
    {
      name: 'Side Tables',
      description: 'Decorative laser-cut side tables',
      productCount: 18,
      image: '/images/table.jpg',
      category: 'side-tables'
    },
    {
      name: 'Side Tables',
      description: 'Decorative laser-cut side tables',
      productCount: 18,
      image: '/images/table1.jpg',
      category: 'side-tables'
    },
    {
      name: 'Side Tables',
      description: 'Decorative laser-cut side tables',
      productCount: 18,
      image: '/images/table2.jpg',
      category: 'side-tables'
    },
    {
      name: 'Side Tables',
      description: 'Decorative laser-cut side tables',
      productCount: 18,
      image: '/images/table3.jpg',
      category: 'side-tables'
    },
    {
      name: 'Decor',
      description: 'Decorative laser-cut side tables',
      productCount: 18,
      image: '/images/tabledecorpieace.jpg',
      category: 'decor'
    },
    {
      name: 'Side Tables',
      description: 'Decorative laser-cut side tables',
      productCount: 18,
      image: '/images/tabledesigns.jpg',
      category: 'side-tables'
    },
    {
      name: ' Tables',
      description: 'Decorative laser-cut side tables',
      productCount: 18,
      image: '/images/tablelegs.jpg',
      category: 'side-tables'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Featured <span className="text-blue-600">Categories</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our wide range of laser cutting services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {category.productCount} products
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <Link
                  to={`/services?category=${category.category}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                >
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6">Upload your design or browse our products today</p>
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            Browse All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
