
import { Clock, Users, Rocket, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Hero Section */}
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-8 animate-fade-in">
            Our Story
          </h1>
          <div className="prose prose-lg max-w-3xl mx-auto text-gray-600 opacity-0 animate-fade-in animation-delay-300">
            <p className="mb-4 text-center">
              Founded in 2024, PaperCraft emerged from a vision to revolutionize paper manufacturing through sustainable practices and cutting-edge technology.
            </p>
            <p className="text-center">
              Our state-of-the-art facility combines traditional papermaking expertise with modern innovation, creating products that meet the highest standards of quality while minimizing environmental impact.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Raw Materials", description: "Sustainable sourcing of premium materials" },
              { icon: Users, title: "Processing", description: "Advanced pulping and refinement" },
              { icon: Rocket, title: "Formation", description: "Precision sheet forming" },
              { icon: Leaf, title: "Quality Control", description: "Rigorous testing and inspection" }
            ].map((step, index) => (
              <div key={step.title} className="glass p-8 text-center rounded-2xl opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300"
                   style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
