import Image from "next/image";
import Navbar from "@/components/landing/Navbar";
import { Feautures } from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";

import { CTA } from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-[#0D1117] min-h-screen font-sans text-white">
      <Navbar />
      <Hero />
      <Feautures />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
