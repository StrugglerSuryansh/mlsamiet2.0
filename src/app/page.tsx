import { SpotlightNewDemo } from "@/components/HeroSection";
import AVM from "@/components/AVM";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <SpotlightNewDemo />
      <AVM />
      <MarqueeDemo />
      <AnimatedTestimonialsDemo />
      <ContactForm />
    </div>
  );
}
