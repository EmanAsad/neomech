import React from 'react';
import { MessageCircle, Star, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
  onOrderNow: (productName: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode, onOrderNow }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-48 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              <div className="text-right">
                <p className="text-lg font-semibold text-blue-600">{product.price}</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-500 ml-1">(5.0)</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onOrderNow(product.name)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Order Now
              </button>
              <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center">
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-xs font-medium ml-1">5.0</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
            >
              {feature}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="text-blue-600 text-xs font-medium px-2 py-1">
              +{product.features.length - 2} more
            </span>
          )}
        </div>

        <div className="flex justify-between items-center mb-3">
          <p className="text-lg font-semibold text-blue-600">{product.price}</p>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => onOrderNow(product.name)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Order Now
          </button>
          <button className="w-full border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;