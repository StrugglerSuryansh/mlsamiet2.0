import { SpotlightNewDemo } from "@/components/HeroSection";
import AVM from "@/components/AVM";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";

export default function Home() {
  return (
    <div>
      <SpotlightNewDemo />
      <AVM />
      <MarqueeDemo />
      <AnimatedTestimonialsDemo />
    </div>
  );
}
