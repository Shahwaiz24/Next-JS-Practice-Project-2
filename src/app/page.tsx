import Header from "@/components/Header";
import HeroSection from "@/components/Sections/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-zinc-800" >
      <Header />
      <HeroSection />

    </div>
  );
}
