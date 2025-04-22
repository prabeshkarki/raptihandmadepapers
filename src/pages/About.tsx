
import HeroSection from "./about/sections/HeroSection";
import FeaturedMediaSection from "./about/sections/FeaturedMediaSection";
import ProcessSection from "./about/sections/ProcessSection";
import HandcraftedKagajSection from "./about/sections/HandcraftedKagajSection";
import TeamSection from "./about/sections/TeamSection";
import CommitmentSection from "./about/sections/CommitmentSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <HeroSection />
      <FeaturedMediaSection />
      <ProcessSection />
      <HandcraftedKagajSection />
      <TeamSection />
      <CommitmentSection />
    </div>
  );
};

export default About;
