"use client";
import ImageCarousel from "@/components/ImageCarousel";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";
import { useEffect, useState } from "react";

export default function KnowMore() {
  const images = [
    {
      src: "/MLSA_WEBSITE/SPEAKERS_PHOTO/IMG-20250211-WA0002.jpg",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/SPEAKERS_PHOTO/IMG-20250211-WA0003.jpg",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/SPEAKERS_PHOTO/IMG-20250211-WA0004.jpg",
      objectPosition: "top",
    },
  ];

  return (
    <div className="min-h-screen p-8 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="h-[500px]">
          <ImageCarousel images={images} />
        </div>
      </div>
    </div>
  );
}
