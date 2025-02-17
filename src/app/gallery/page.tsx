"use client";

import { useEffect, useState } from "react";
import heic2any from "heic2any";

const gallery = () => {
  const [convertedImages, setConvertedImages] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const heicImages = [
        "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2276.HEIC",
        "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2280.HEIC",
        "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2283.HEIC",
        "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2286.HEIC",
        "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2288.HEIC",
        // Add other HEIC image paths here if needed
      ];

      heicImages.forEach(async (src) => {
        try {
          const response = await fetch(src);
          if (!response.ok) {
            throw new Error(`Failed to fetch image: ${src}`);
          }
          const blob = await response.blob();
          const convertedBlob = await heic2any({ blob, toType: "image/jpeg" });
          const blobToUse = Array.isArray(convertedBlob)
            ? convertedBlob[0]
            : convertedBlob;
          const convertedUrl = URL.createObjectURL(blobToUse);
          setConvertedImages((prev) => ({ ...prev, [src]: convertedUrl }));
          console.log(`Converted ${src} to ${convertedUrl}`);
        } catch (error) {
          console.error("Error converting HEIC image:", error);
        }
      });
    }
  }, []);

  return (
    <div id="media_section" className="mx-8 lg:pt-20 pt-2 relative">
      <h1 className="text-5xl font-bold mb-5 text-center">
        Sneak Peek Into MLSA&apos;s Events
      </h1>
      {/* AVASAR IMAGES */}
      <h1 className="text-4xl font-bold mb-5 text-center">AVASAR</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-[10px] object-cover"
              width={500}
              height={500}
              src={
                convertedImages[
                  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2276.HEIC"
                ] || "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2276.HEIC"
              }
              alt="AVASAR Event"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-[10px] object-cover"
              width={500}
              height={500}
              src={
                convertedImages[
                  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2280.HEIC"
                ] || "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2280.HEIC"
              }
              alt="AVASAR Event"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-[10px] object-cover"
              width={500}
              height={500}
              src={
                convertedImages[
                  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2283.HEIC"
                ] || "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2283.HEIC"
              }
              alt="AVASAR Event"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-[10px] object-cover"
              width={500}
              height={500}
              src={
                convertedImages[
                  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2286.HEIC"
                ] || "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2286.HEIC"
              }
              alt="AVASAR Event"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-[10px] object-cover"
              width={500}
              height={500}
              src={
                convertedImages[
                  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2288.HEIC"
                ] || "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2288.HEIC"
              }
              alt="AVASAR Event"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default gallery;
