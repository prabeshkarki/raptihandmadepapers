import React from "react";

const CommitmentSection = () => (
  <div className="py-16 sm:py-20 md:py-24 bg-white/70">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-10 sm:mb-16">
        Our Commitment
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        <div className="glass p-6 sm:p-8 rounded-2xl opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Sustainability
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            We are dedicated to eco-friendly practices, from sourcing lokta bark responsibly to minimizing waste in our production processes.
          </p>
        </div>
        <div className="glass p-6 sm:p-8 rounded-2xl opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '200ms' }}>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Community
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            We empower local artisans by providing fair wages and preserving traditional skills, contributing to the economic and cultural vitality of rural communities.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CommitmentSection;
