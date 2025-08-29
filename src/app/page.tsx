"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import ApproachSection from "@/components/Sections/ApproachSection";
import PlayEyesSection from "@/components/Sections/PlayEyesSection";
import FeaturedSection from "@/components/Sections/FeaturedSection";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  return (
    <div className="w-full min-h-screen text-white bg-zinc-800" >
      <Header />
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <PlayEyesSection />
      <FeaturedSection />
    </div>
  );
}
