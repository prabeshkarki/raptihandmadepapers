
import React from "react";
import { Clock, Users, Rocket, Leaf } from "lucide-react";

const processSteps = [
  { icon: Clock, title: "Raw Materials", description: "Sustainable sourcing of lokta bark" },
  { icon: Users, title: "Processing", description: "Traditional boiling and beating" },
  { icon: Rocket, title: "Formation", description: "Hand pouring and sun drying" },
  { icon: Leaf, title: "Quality Control", description: "Meticulous inspection by artisans" }
];

const ProcessSection = () => (
  <div className="py-16 sm:py-20 md:py-24 bg-white/70 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-10 sm:mb-16">Our Process</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {processSteps.map((step, index) => (
          <div
            key={step.title}
            className="glass p-6 sm:p-8 text-center rounded-2xl opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${(index + 1) * 200}ms` }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
              <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProcessSection;
