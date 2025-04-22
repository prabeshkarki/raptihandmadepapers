import React from "react";

const FeaturedMediaSection = () => (
  <div className="py-16 sm:py-20 md:py-24 bg-white/70">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-10 sm:mb-16">
        Featured Media
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        <div className="glass p-4 sm:p-6 rounded-xl opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video rounded-lg"
          />
        </div>
        <div className="glass p-4 sm:p-6 rounded-xl opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1531384441138-2736e62c6a1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Handcrafted Kagaj"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedMediaSection;
