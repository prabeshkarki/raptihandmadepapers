
import { Clock, Users, Rocket, Leaf, Award, Globe } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
              Founded in 2024, RAPTIHANDMADE emerged from a vision to preserve and promote traditional Nepali kagaj (paper) making while creating sustainable handcrafted products.
            </p>
            <p className="text-center">
              Our artisans combine centuries-old techniques with modern innovation, creating handmade papers that carry cultural significance while meeting contemporary quality standards.
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
              { icon: Clock, title: "Raw Materials", description: "Sustainable sourcing of lokta bark" },
              { icon: Users, title: "Processing", description: "Traditional boiling and beating" },
              { icon: Rocket, title: "Formation", description: "Hand pouring and sun drying" },
              { icon: Leaf, title: "Quality Control", description: "Meticulous inspection by artisans" }
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

      {/* Handcrafted Nepali Kagaj Section */}
      <div className="py-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Handcrafted Nepali Kagaj
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Nepali kagaj is a treasured cultural heritage dating back hundreds of years. Our paper is meticulously handcrafted from the inner bark of the lokta bush (Daphne papyracea), which grows naturally in Nepal's Himalayan region at elevations between 6,500 and 9,500 feet.
                </p>
                <p className="mb-4">
                  The sustainable harvesting process involves cutting only the mature lokta stems, allowing the plant to regenerate. Once harvested, the bark undergoes a traditional process of boiling, beating, and hand-pouring onto frames. The resulting paper is then sun-dried in the Himalayan climate.
                </p>
                <p>
                  This time-honored technique creates paper renowned for its exceptional durability, resistance to damage from humidity, insects, and mold. Each sheet captures the essence of Nepalese craftsmanship and environmental harmony.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">100% Handmade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Eco-friendly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Nepal Heritage</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
                alt="Traditional Nepali Kagaj Making"
                className="w-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Leaders Section */}
      <div className="py-24 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-16">
            Meet Our Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Pema Sherpa",
                role: "Founder & Creative Director",
                bio: "With 15 years of experience in traditional Nepali craftsmanship, Pema leads our creative vision and preserves authentic techniques.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop"
              },
              {
                name: "Rajesh Tamang",
                role: "Head of Production",
                bio: "A master craftsman from a family of paper makers, Rajesh oversees our production ensuring the highest quality standards.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop"
              },
              {
                name: "Amrita Rai",
                role: "Sustainability Officer",
                bio: "Passionate about environmental conservation, Amrita ensures our processes remain eco-friendly and sustainable.",
                image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&h=400&auto=format&fit=crop"
              }
            ].map((leader, index) => (
              <div 
                key={leader.name}
                className="glass p-6 rounded-xl text-center opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <Avatar className="h-32 w-32 border-4 border-white shadow-md">
                    <AvatarImage src={leader.image} alt={leader.name} />
                    <AvatarFallback>{leader.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {leader.name}
                </h3>
                <p className="text-sm text-green-700 font-medium mb-4">{leader.role}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
