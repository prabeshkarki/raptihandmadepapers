
import HeroSection from "./about/HeroSection";
import FeaturedMediaSection from "./about/FeaturedMediaSection";
import ProcessSection from "./about/ProcessSection";
import HandcraftedKagajSection from "./about/HandcraftedKagajSection";
import TeamSection from "./about/TeamSection";
import CommitmentSection from "./about/CommitmentSection";

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
