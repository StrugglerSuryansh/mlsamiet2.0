"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export function SpotlightNewDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md flex items-center justify-center bg-white/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative w-full flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-cyan-50 to-cyan-400 bg-opacity-50">
          <span className="text-black z-[1000] primary">
            Microsoft Learn <span className="text-primary">Student <br /></span> Ambassadors
          </span>
        </h1>
        <p className="mt-4 font-normal text-4xl md:text-6xl text-black text-center">
          <span className="text-primary primary">
            MIET Chapter
          </span>
        </p>
      </div>
    </div>
  );
}