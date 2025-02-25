"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { TextAnimate } from "@/components/magicui/text-animate";
import { useEffect, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  social: {
    commudle?: string;
    linkedin?: string;
    email?: string;
  };
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  autoChangeInterval?: number;
  isAutoChange?: boolean;
  className?: string;
}

export function AnimatedTestimonialsDemo({
  testimonials,
  title,
  autoChangeInterval = 2000,
  isAutoChange = false,
  className = "flex flex-col items-center justify-center gap-4 text-primary text-center m-7",
}: AnimatedTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isAutoChange) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, autoChangeInterval);

    return () => clearInterval(timer);
  }, [testimonials.length, autoChangeInterval, isAutoChange]);

  const displayTestimonials = isAutoChange
    ? [testimonials[currentIndex]]
    : testimonials;

  return (
    <div>
      {title && (
        <div className={className}>
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-2xl  sm:text-4xl md:text-5xl lg:text-6xl primary"
          >
            {title}
          </TextAnimate>
        </div>
      )}

      <AnimatedTestimonials testimonials={displayTestimonials} />
    </div>
  );
}
