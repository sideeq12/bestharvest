import React, { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Sun, Droplets } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1437587/pexels-photo-1437587.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section
      id="home"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${backgroundImages[currentImageIndex]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fresh <span className="text-emerald-300">Peppers</span> & <span className="text-red-300">Tomatoes</span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-200">From Shaki, Oyo State</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to GreenHarvest Farm, located in the heart of Shaki, Oyo State, Nigeria. We cultivate premium peppers and tomatoes using sustainable farming practices. 
            From seed to harvest, we ensure the highest quality produce for local markets and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>Explore Our Crops</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Visit Our Farm
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Organic Growing</h3>
              <p className="text-gray-600">100% organic methods with no harmful pesticides or chemicals</p>
            </div>
            
            <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sun className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sun-Ripened</h3>
              <p className="text-gray-600">Naturally ripened under optimal Nigerian sunlight conditions</p>
            </div>
            
            <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Water Smart</h3>
              <p className="text-gray-600">Efficient irrigation systems adapted to local climate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;