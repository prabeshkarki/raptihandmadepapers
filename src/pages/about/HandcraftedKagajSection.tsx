
import React from "react";
import { Award, Leaf, Globe } from "lucide-react";

const HandcraftedKagajSection = () => (
  <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-100 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Handcrafted Nepali Kagaj
          </h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4 text-base sm:text-lg">
              Nepali kagaj is a treasured cultural heritage dating back hundreds of years. Our paper is meticulously handcrafted from the inner bark of the lokta bush (Daphne papyracea), which grows naturally in Nepal's Himalayan region at elevations between 6,500 and 9,500 feet.
            </p>
            <p className="mb-4 text-base sm:text-lg">
              The sustainable harvesting process involves cutting only the mature lokta stems, allowing the plant to regenerate. Once harvested, the bark undergoes a traditional process of boiling, beating, and hand-pouring onto frames. The resulting paper is then sun-dried in the Himalayan climate.
            </p>
            <p className="text-base sm:text-lg">
              This time-honored technique creates paper renowned for its exceptional durability, resistance to damage from humidity, insects, and mold. Each sheet captures the essence of Nepalese craftsmanship and environmental harmony.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              </div>
              <span className="text-gray-700 text-sm sm:text-base">100% Handmade</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              </div>
              <span className="text-gray-700 text-sm sm:text-base">Eco-friendly</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              </div>
              <span className="text-gray-700 text-sm sm:text-base">Nepal Heritage</span>
            </div>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
          <img 
            src="/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
            alt="Traditional Nepali Kagaj Making"
            className="w-full object-cover aspect-video"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HandcraftedKagajSection;
