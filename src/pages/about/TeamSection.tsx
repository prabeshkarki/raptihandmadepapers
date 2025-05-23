
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const members = [
  {
    name: "Kajol Karki",
    role: "Founder & Creative Director",
    bio: "Blending traditional Nepali kagaj craft with modern design. Passionate about sustainability, rural artisanship, and sharing Nepal's heritage globally.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Lal Bahadur GC",
    role: "Head of Production",
    bio: "Leading the crafting of traditional Nepali kagaj with a focus on quality, sustainability, and artisan heritage.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Damar Bahadur GC",
    role: "Marketing Officer",
    bio: "Focused on elevating the brand and expanding the reach of Nepali kagaj through creative strategies and meaningful engagement.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&h=400&auto=format&fit=crop"
  }
];

const TeamSection = () => (
  <div className="py-16 sm:py-20 md:py-24 bg-white/70">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-10 sm:mb-16">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
        {members.map((member, index) => (
          <div 
            key={member.name}
            className="glass p-4 sm:p-6 rounded-xl text-center opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${(index + 1) * 200}ms` }}
          >
            <div className="mb-4 sm:mb-6 flex justify-center">
              <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-white shadow-md">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm text-green-700 font-medium mb-3 sm:mb-4">{member.role}</p>
            <p className="text-gray-600 text-sm sm:text-base">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TeamSection;
