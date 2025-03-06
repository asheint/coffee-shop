import React from 'react';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 flex justify-between items-center">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-4">
            Welcome to
            <br />
            <span className="text-emerald-600">Cafe KOI</span>
          </h1>
          <p className="text-gray-600 mb-8">
            A cycling-themed coffee house in Kandy, serving specialty coffees, homemade brownies, and custom cakes. Experience the perfect blend of coffee culture and cycling passion.
          </p>
          <div className="space-x-4">
            <a
              href="/menu"
              className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
            >
              View Menu
            </a>
            <a
              href="/birthday-gallery"
              className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors"
            >
              Custom Cakes
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-80 h-80 bg-emerald-100 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400"
              alt="Cafe KOI specialty coffee"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;