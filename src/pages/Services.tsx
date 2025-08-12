import React, { useState } from 'react';
import { Search, Filter, Grid, List, MessageCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Services = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Updated products with local images
  const products = [
    {
      id: 1,
      name: 'Premium Inverter Body',
      category: 'inverter-bodies',
      price: 'Contact for Price',
      image: '/images/img1.jpg', // CNC Laser Cutting image
      description: 'High-quality laser-cut inverter enclosure with precision ventilation holes and mounting points.',
      features: ['Precision Cut', 'Durable Material', 'Custom Sizes']
    },
    {
      id: 2,
      name: 'UPS Battery Box',
      category: 'ups-bodies',
      price: 'Contact for Price',
      image: '/images/img2.jpg', // Sheet Metal Fabrication image
      description: 'Robust UPS enclosure designed for optimal battery protection and easy maintenance access.',
      features: ['Weather Resistant', 'Easy Access', 'Multiple Sizes']
    },
    {
      id: 3,
      name: 'Islamic Calligraphy Art',
      category: 'islamic-calligraphy',
      price: 'Contact for Price',
      image: '/images/calligraphy.jpg', // Calligraphy Signage image
      description: 'Beautiful Islamic calligraphy designs laser-cut with intricate details and perfect finishing.',
      features: ['Intricate Design', 'Multiple Materials', 'Custom Text']
    },
    {
      id: 4,
      name: 'Business Logo Sign',
      category: 'business-logos',
      price: 'Contact for Price',
      image: '/images/head-laser-cutting-machine.jpg', // Prototyping image
      description: 'Professional business logo signs with precise cutting and premium finishing options.',
      features: ['Custom Design', 'Various Materials', 'LED Compatible']
    },
    {
      id: 5,
      name: 'Decorative Side Table',
      category: 'side-tables',
      price: 'Contact for Price',
      image: '/images/img1.jpg', // Reusing CNC Laser Cutting image
      description: 'Elegant laser-cut side table with modern geometric patterns and sturdy construction.',
      features: ['Modern Design', 'Easy Assembly', 'Custom Patterns']
    },
    {
      id: 6,
      name: 'Industrial Inverter Case',
      category: 'inverter-bodies',
      price: 'Contact for Price',
      image: '/images/img2.jpg', // Sheet Metal Fabrication image
      description: 'Heavy-duty inverter body for industrial applications with enhanced cooling features.',
      features: ['Industrial Grade', 'Enhanced Cooling', 'Modular Design']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'inverter-bodies', name: 'Inverter Bodies', count: products.filter(p => p.category === 'inverter-bodies').length },
    { id: 'ups-bodies', name: 'UPS Bodies', count: products.filter(p => p.category === 'ups-bodies').length },
    { id: 'islamic-calligraphy', name: 'Islamic Calligraphy', count: products.filter(p => p.category === 'islamic-calligraphy').length },
    { id: 'business-logos', name: 'Business Logos', count: products.filter(p => p.category === 'business-logos').length },
    { id: 'side-tables', name: 'Side Tables', count: products.filter(p => p.category === 'side-tables').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOrderNow = (productName) => {
    const message = `Hi! I'm interested in ordering: ${productName}. Please provide more details and pricing.`;
    const whatsappUrl = `https://wa.me/03253828772?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            NeoMech Laser Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Precision Laser Cutting - Transform your ideas into reality with expert CNC laser cutting services
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-blue-500/30 px-4 py-2 rounded-full">Precision Cutting</span>
            <span className="bg-blue-500/30 px-4 py-2 rounded-full">Fast Delivery</span>
            <span className="bg-blue-500/30 px-4 py-2 rounded-full">Premium Quality</span>
            <span className="bg-blue-500/30 px-4 py-2 rounded-full">Custom Designs</span>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-4">
            <Filter className="text-gray-500 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Product Count */}
        <p className="text-gray-600 mb-6">
          Showing {filteredProducts.length} of {products.length} products
          {selectedCategory !== 'all' && (
            <span className="ml-2 text-blue-600 font-medium">
              in {categories.find(c => c.id === selectedCategory)?.name}
            </span>
          )}
        </p>

        {/* Products */}
        <div className={`grid gap-6 ${
          viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              viewMode={viewMode}
              onOrderNow={handleOrderNow}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <Search className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-6">
            Upload your design or browse our products today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/03253828772?text=Hi! I'd like to upload my custom design for laser cutting."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Upload Custom Design
            </a>
            <a
              href="https://wa.me/03253828772?text=Hi! I need help choosing the right product for my needs."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Expert Advice
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
