
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Rapti Handmade Papers</h3>
            <p className="text-gray-400 text-sm sm:text-base">Crafting premium Nepali lokta paper products with sustainable practices and traditional techniques passed down through generations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm sm:text-base">Rapti Paper & Hand Craft</p>
            <p className="text-gray-400 text-sm sm:text-base">VM3F+R29, Sisahaniya 22400</p>
            <p className="text-gray-400 text-sm sm:text-base">lbgc9005@gmail.com</p>
            <p className="text-gray-400 text-sm sm:text-base">+977 9840768211</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Rapti Handmade Papers. All rights reserved.</p>
          <p className="mt-2">Traditional Nepali lokta paper products | Handcrafted in Nepal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
