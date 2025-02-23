"use client";
import ImageCarousel from "@/components/ImageCarousel";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";
import { useEffect, useState } from "react";

export default function KnowMore() {
  const images = [
    {
      src: "/mlsamietlogo1.png",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_1001.JPG",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_105027481.jpg",
      objectPosition: "center",
    },
  ];

  return (
    <div className="min-h-screen p-8 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg">
            MLSA MIET is a dynamic community where technology meets passion. We
            bring together aspiring developers, designers, and tech enthusiasts,
            offering hands-on workshops, real-world projects, and networking
            opportunities that bridge the gap between academics and industry.
          </p>
          <p className="text-lg">
            With a commitment to learning and collaboration, we empower students
            to explore emerging technologies, share knowledge, and build
            impactful solutions. As we grow, our vision is to nurture future
            leaders who drive innovation and shape the who drive innovation and
            shape the ever-evolving tech landscape.
          </p>
        </div>
        <div className="h-[500px]">
          <ImageCarousel images={images} />
        </div>
      </div>
    </div>
  );
}
