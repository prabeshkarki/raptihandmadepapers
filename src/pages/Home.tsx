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
    <div>
      {/* Hero Section with Glass Effect */}
      <div 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url('/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png')` 
        }}
      >
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

      {/* Process Overview Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-16 opacity-0 animate-fade-in">
            Our Paper-Making Process
          </h2>
          
          {/* Raw Materials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Raw Material Preparation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our process begins with carefully selected raw materials. Each sheet starts its journey
                as pure, sustainable fiber that undergoes meticulous processing to ensure the highest
                quality paper products.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/e2cde796-7e30-4d84-a524-7ecdb4fd992d.png"
                alt="Raw paper material preparation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Processing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/lovable-uploads/1ed68aba-1fbd-47e6-9b44-977e392f160e.png"
                alt="Paper processing stage"
                className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-gray-800">Processing & Refinement</h3>
              <p className="text-gray-600 leading-relaxed">
                Through our advanced processing techniques, we transform raw materials into refined
                pulp. This stage ensures consistent quality and the perfect texture for various paper
                applications.
              </p>
            </div>
          </div>

          {/* Manufacturing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Manufacturing Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Our state-of-the-art machinery and traditional craftsmanship combine to create
                paper products that meet the highest industry standards while maintaining
                environmental responsibility.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/11793218-ebe5-41d9-b122-76d263ead5bd.png"
                alt="Paper manufacturing process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Final Processing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/lovable-uploads/4eae614b-b4fb-4946-a974-b1adf491859e.png"
                alt="Final paper processing"
                className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-gray-800">Final Processing & Quality Control</h3>
              <p className="text-gray-600 leading-relaxed">
                Each batch undergoes rigorous quality control measures. Our final processing
                ensures that every sheet of paper meets our exacting standards before reaching
                our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
