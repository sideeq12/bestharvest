import React from 'react';
import { Star, MapPin, Package, Truck } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const products = [
    {
      name: 'Sweet Bell Peppers',
      price: '₦800/kg',
      image: 'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Crisp, colorful bell peppers perfect for local dishes and fresh consumption.',
      rating: 4.9,
      inStock: true
    },
    {
      name: 'Beefsteak Tomatoes',
      price: '₦600/kg',
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Large, juicy tomatoes ideal for stews, salads and fresh eating.',
      rating: 4.8,
      inStock: true
    },
    {
      name: 'Cherry Tomatoes',
      price: '₦900/kg',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Sweet, bite-sized tomatoes perfect for snacking and garnishing.',
      rating: 4.9,
      inStock: true
    },
    {
      name: 'Hot Peppers (Ata Rodo)',
      price: '₦1,200/kg',
      image: 'https://images.pexels.com/photos/1437587/pexels-photo-1437587.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Fresh, spicy peppers essential for authentic Nigerian cuisine.',
      rating: 4.7,
      inStock: false
    },
    {
      name: 'Roma Tomatoes',
      price: '₦550/kg',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dense, meaty tomatoes perfect for sauces and traditional cooking.',
      rating: 4.8,
      inStock: true
    },
    {
      name: 'Mixed Pepper Variety Pack',
      price: '₦2,000/pack',
      image: 'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Assorted pepper varieties including bell peppers and local hot varieties.',
      rating: 4.9,
      inStock: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Fresh Produce</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Farm-fresh peppers and tomatoes, harvested at peak ripeness for local markets in Oyo State
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Package className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fresh Picked</h3>
            <p className="text-gray-600">Harvested daily for maximum freshness</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Supply</h3>
            <p className="text-gray-600">Available at local markets in Shaki and surrounding areas</p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Hand-selected for superior taste and nutrition</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Out of Season
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  <button 
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      product.inStock 
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    <MapPin className="h-4 w-4" />
                    <span>{product.inStock ? 'Find at Market' : 'Out of Season'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Information */}
        <div className="mt-16 bg-emerald-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Where to Find Our Produce</h3>
            <p className="text-lg text-gray-600 mb-6">
              Visit us at local markets or contact us directly for bulk orders
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Shaki Central Market</h4>
                <p className="text-gray-600">Every Tuesday, Thursday & Saturday</p>
                <p className="text-gray-600">8:00 AM - 4:00 PM</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Direct Farm Purchase</h4>
                <p className="text-gray-600">Contact us for bulk orders</p>
                <p className="text-gray-600">Minimum 50kg orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;