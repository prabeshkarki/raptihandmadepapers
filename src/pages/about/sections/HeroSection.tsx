import React from "react";

const HeroSection = () => (
  <div className="pt-20 sm:pt-28 md:pt-32 pb-10 sm:pb-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8 animate-fade-in">
        Our Story
      </h1>
      <div className="prose prose-lg max-w-3xl mx-auto text-gray-600 opacity-0 animate-fade-in animation-delay-300">
        <p className="mb-4 text-center text-base sm:text-lg">
          Founded in 2024, RAPTIHANDMADE emerged from a vision to preserve and promote traditional Nepali kagaj (paper) making while creating sustainable handcrafted products.
        </p>
        <p className="text-center text-base sm:text-lg">
          Our artisans combine centuries-old techniques with modern innovation, creating handmade papers that carry cultural significance while meeting contemporary quality standards.
        </p>
      </div>
    </div>
  </div>
);

export default HeroSection;
