import Header from "@/components/Header";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import ApproachSection from "@/components/Sections/ApproachSection";
import PlayEyesSection from "@/components/Sections/PlayEyesSection";
import FeaturedSection from "@/components/Sections/FeaturedSection";
export default function Home() {
  return (
    <div className="w-full h-full bg-zinc-800" >
      <Header />
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <PlayEyesSection />
      <FeaturedSection />
    </div>
  );
}
