import React from 'react';
import { Thermometer, Calendar, Award, TrendingUp } from 'lucide-react';

const CropsSection: React.FC = () => {
  return (
    <section id="crops" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Crops</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in growing the finest peppers and tomatoes using advanced agricultural techniques
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Peppers Section */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-red-500 rounded-full p-3 mr-4">
                <Thermometer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Premium Peppers</h3>
            </div>
            
            <div className="mb-6">
              <img 
                src="https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Fresh peppers" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-red-500 mr-2" />
                  <span className="font-semibold text-gray-900">Growing Season</span>
                </div>
                <p className="text-gray-600">March - October</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-red-500 mr-2" />
                  <span className="font-semibold text-gray-900">Varieties</span>
                </div>
                <p className="text-gray-600">Bell, Jalapeño, Serrano</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Our pepper varieties range from mild bell peppers to spicy jalapeños and serranos. 
              Each variety is carefully cultivated to ensure optimal flavor, color, and nutritional value.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Vitamin C Rich</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Antioxidants</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Low Calories</span>
            </div>
          </div>

          {/* Tomatoes Section */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 rounded-full p-3 mr-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Fresh Tomatoes</h3>
            </div>
            
            <div className="mb-6">
              <img 
                src="https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Fresh tomatoes" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-red-600 mr-2" />
                  <span className="font-semibold text-gray-900">Growing Season</span>
                </div>
                <p className="text-gray-600">May - September</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-red-600 mr-2" />
                  <span className="font-semibold text-gray-900">Varieties</span>
                </div>
                <p className="text-gray-600">Beefsteak, Cherry, Roma</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              From juicy beefsteak tomatoes perfect for sandwiches to sweet cherry tomatoes ideal for salads, 
              our tomato varieties offer exceptional taste and texture for every culinary need.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Lycopene Rich</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Vitamin K</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Folate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CropsSection;