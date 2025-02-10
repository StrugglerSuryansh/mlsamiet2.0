"use client";
import { SpotlightNewDemo } from "@/components/HeroSection";
import { MagicCardDemo } from "@/components/MagicCardDemo";
import { MarqueeDemo } from "@/components/MarqueeDemo";

import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";
import ContactForm from "@/components/ContactForm";
import CanvasRevealEffectDemo from "@/components/CanvasRevealEffectDemo";
import MembersPage from "./members/page";

export default function Home() {
  return (
    <div>
      <SpotlightNewDemo />
      <CanvasRevealEffectDemo />
      {/* <MagicCardDemo /> */}
      <MarqueeDemo />
      <AnimatedTestimonialsDemo />
      <ContactForm />
    </div>
  );
}
