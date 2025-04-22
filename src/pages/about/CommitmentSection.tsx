
import React from "react";

const CommitmentSection = () => (
  <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-100 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-10 sm:mb-16">
          Our Commitment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 rounded-2xl glass opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Sustainability
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We are dedicated to eco-friendly practices, ensuring our papermaking process has minimal environmental impact.
            </p>
          </div>
          <div className="p-6 rounded-2xl glass opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Community
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We support local artisans and communities, preserving traditional skills and providing sustainable livelihoods.
            </p>
          </div>
          <div className="p-6 rounded-2xl glass opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Quality
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We maintain the highest standards of quality, ensuring our handmade paper products are durable, beautiful, and unique.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CommitmentSection;
