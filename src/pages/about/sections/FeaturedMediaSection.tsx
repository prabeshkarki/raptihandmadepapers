
import React from "react";
import { Button } from "@/components/ui/button";

const FeaturedMediaSection = () => (
  <div className="py-16 sm:py-20 md:py-24 bg-white/90 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-10 sm:mb-16">Featured Media</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* YouTube Video Embed */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-video">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/OtdDfAoNqs0"
              title="Rapti Handmade Papers Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-4 bg-gray-50">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Our Traditional Process
            </h3>
            <p className="text-sm text-gray-600">
              Watch our artisans create beautiful handmade paper using traditional Nepali techniques.
            </p>
          </div>
        </div>
        
        {/* News Article */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-white flex flex-col">
          <div className="p-6 flex-grow">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Featured in Local Media
            </h3>
            <p className="text-gray-600 mb-4">
              Our traditional papermaking techniques and sustainable practices have been highlighted in multiple local media outlets, showcasing the cultural significance of our craft.
            </p>
            <div className="space-y-4">
              <a 
                href="https://deukhuritoday.com/archives/57237?fbclid=IwZXh0bgNhZW0CMTEAAR4eneO10WSsYRw8FTm1rx1fBKZ-yh3-XMBEIsjw8qZR7-1yAXlc1rNo3jwe7g_aem_01FZbUNZRWQcZs5Q3bHLLQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50">
                  Deukuri Today Article
                </Button>
              </a>
              <a 
                href="https://www.setopati.com/kinmel/business/341390?fbclid=IwY2xjawJ2whhleHRuA2FlbQIxMQABHoNomngtdWQ8r9nfHMBwXAW8OuHpJ5n0_5f9TR9Uas0xL9EFslGYyLxgKxHx_aem_lKHdihPEisXk90MqnQLRdg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50">
                  Setopati News Article
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedMediaSection;
