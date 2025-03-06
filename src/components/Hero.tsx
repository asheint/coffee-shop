import React from 'react';

const Hero = () => {
  return (
    <div className="py-16 flex justify-between items-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold mb-4">
          The Smokey
          <br />
          <span className="font-serif">COFFEE</span>
        </h1>
        <p className="text-gray-600 mb-8">
          Discover the Essence of Exquisite Coffee Beans. Each bean is meticulously sourced from the finest coffee-growing regions.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800">
            Shop Beans
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50">
            Our Cafes
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="w-80 h-80 bg-gray-900 rounded-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400" 
            alt="Coffee splash"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;