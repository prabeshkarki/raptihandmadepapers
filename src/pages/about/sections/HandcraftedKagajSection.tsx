import React from "react";

const HandcraftedKagajSection = () => (
  <div className="py-16 sm:py-20 md:py-24 bg-white/70">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-10 sm:mb-16">
        Handcrafted Nepali Kagaj
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        <div className="glass p-6 sm:p-8 rounded-xl opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300">
          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
            Our Nepali kagaj is meticulously handcrafted using traditional methods passed down through generations.
            Each sheet reflects the rich cultural heritage and natural beauty of Nepal.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            We sustainably source lokta bark from the Himalayan forests, ensuring minimal environmental impact.
            Our artisans employ time-honored techniques to create unique, high-quality paper for various applications.
          </p>
        </div>
        <div className="glass p-6 sm:p-8 rounded-xl opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1616465854509-c44ed1591919?q=80&w=400&h=400&auto=format&fit=crop"
            alt="Handcrafted Nepali Kagaj"
            className="rounded-md shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HandcraftedKagajSection;
