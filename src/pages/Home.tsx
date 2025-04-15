
import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section with Improved Design */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Crafting the Future of Paper
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            Welcome to PaperCraft, where innovation meets sustainability in paper manufacturing.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg opacity-0 animate-fade-in animation-delay-500"
          >
            Explore Our Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Features Section with Card Hover Effects */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 opacity-0 animate-fade-in">Why Choose PaperCraft?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sustainable Production", description: "Using eco-friendly processes and materials to protect our environment." },
              { title: "Premium Quality", description: "State-of-the-art technology ensuring superior paper quality." },
              { title: "Innovation", description: "Continuous research and development for better paper products." }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 opacity-0 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

