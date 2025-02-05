"use client";
import { SpotlightNewDemo } from "@/components/HeroSection";
import { MagicCardDemo } from "@/components/MagicCardDemo";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";

export default function Home() {
  return (
    <div>
      <SpotlightNewDemo />
      <MagicCardDemo />
      <MarqueeDemo />
      <AnimatedTestimonialsDemo />
    </div>
  );
}
