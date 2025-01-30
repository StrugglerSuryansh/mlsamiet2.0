"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export function SpotlightNewDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-white/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-cyan-50 to-cyan-400 bg-opacity-50">
          <span className="text-black">Microsoft Learn <span className="text-cyan-600">Student</span> Ambassadors</span>
        </h1>
        <p className="mt-4 font-normal text-6xl text-black text-center mx-auto">
          MIET Chapter
        </p>
      </div>
    </div>
  );
}
