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
       <div className=" text-white py-20 px-4 md:px-12">
  <div className="text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
      Grown Right. <span className="text-emerald-300">Picked Fresh.</span>
    </h1>
    <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
      We cultivate high-quality peppers and tomatoes with zero shortcuts — just sun, soil, and science.
      Experience farm-fresh flavor rooted in sustainable farming practices.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        <span>Explore Our Crops</span>
        {/* Replace with your icon */}
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
      <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Visit Our Farm
      </button>
    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-black">
        <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <svg className="h-8 w-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Organic Growing</h3>
        <p className="text-gray-600">100% organic methods with no harmful pesticides or chemicals.</p>
      </div>

      <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-black">
        <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Sun-Ripened</h3>
        <p className="text-gray-600">Naturally ripened under optimal Nigerian sunlight conditions.</p>
      </div>

      <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-black">
        <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 3v1m0 16v1m8.66-11.66l-.7.7M4.34 18.66l-.7.7M21 12h1M2 12H1M18.36 18.36l-.7-.7M5.64 5.64l-.7-.7" />
            <path d="M8 12a4 4 0 108 0 4 4 0 10-8 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Water Smart</h3>
        <p className="text-gray-600">Efficient irrigation systems adapted to local climate.</p>
      </div>
    </div>
  </div>
</div>
<div className="bg-black text-white py-20 px-4 md:px-12">
  <div className="text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
      Grown Right. <span className="text-emerald-300">Picked Fresh.</span>
    </h1>
    <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
      We cultivate high-quality peppers and tomatoes with zero shortcuts — just sun, soil, and science.
      Experience farm-fresh flavor rooted in sustainable farming practices.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        <span>Explore Our Crops</span>
        {/* Replace with your icon */}
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
      <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Visit Our Farm
      </button>
    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-black">
        <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <svg className="h-8 w-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Organic Growing</h3>
        <p className="text-gray-600">100% organic methods with no harmful pesticides or chemicals.</p>
      </div>

      <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-black">
        <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Sun-Ripened</h3>
        <p className="text-gray-600">Naturally ripened under optimal Nigerian sunlight conditions.</p>
      </div>

      <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-black">
        <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 3v1m0 16v1m8.66-11.66l-.7.7M4.34 18.66l-.7.7M21 12h1M2 12H1M18.36 18.36l-.7-.7M5.64 5.64l-.7-.7" />
            <path d="M8 12a4 4 0 108 0 4 4 0 10-8 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Water Smart</h3>
        <p className="text-gray-600">Efficient irrigation systems adapted to local climate.</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;