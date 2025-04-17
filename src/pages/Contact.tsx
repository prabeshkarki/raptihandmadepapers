
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import GoogleMap from "@/components/GoogleMap";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            Have questions about our products or services? We'd love to hear from you.
          </p>
        </div>
        
        {/* Google Map */}
        <div className="w-full h-96 mb-16 opacity-0 animate-fade-in animation-delay-400">
          <GoogleMap latitude={27.854901970945086} longitude={82.6725602728273} zoom={15} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 opacity-0 animate-fade-in animation-delay-500">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                content: ["123 Paper Mill Road", "Industrial District", "Production City"]
              },
              {
                icon: Phone,
                title: "Call Us",
                content: ["+1 (555) 123-4567"]
              },
              {
                icon: Mail,
                title: "Email Us",
                content: ["contact@papercraft.com"]
              }
            ].map((item, index) => (
              <Card key={item.title} className="glass p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    {item.content.map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="glass p-8 opacity-0 animate-fade-in animation-delay-700">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input type="text" placeholder="Your name" className="bg-white/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-white/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea placeholder="Your message" rows={4} className="bg-white/50" />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-90 transition-opacity">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
