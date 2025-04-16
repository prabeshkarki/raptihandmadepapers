
import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Leaf, Recycle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Home = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png')` 
      }}
    >
      {/* Hero Section with Glass Effect */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/30 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Crafting the Future of Paper
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            Where innovation meets sustainability in modern paper manufacturing.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg opacity-0 animate-fade-in animation-delay-500"
          >
            Explore Our Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Features Section with Modern Cards */}
      <div className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent opacity-0 animate-fade-in">
              Why Choose PaperCraft?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainable Production",
                description: "Using eco-friendly processes and materials to protect our environment.",
                icon: Leaf
              },
              {
                title: "Premium Quality",
                description: "State-of-the-art technology ensuring superior paper quality.",
                icon: Sparkles
              },
              {
                title: "100% Recyclable",
                description: "All our products are designed with recycling in mind.",
                icon: Recycle
              }
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className="group backdrop-blur-sm bg-white/90 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
