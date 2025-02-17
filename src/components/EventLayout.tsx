"use client";

import { useEffect, useState } from "react";
import heic2any from "heic2any";

interface EventItem {
  title: string;
  button: string;
  src: string;
}

export function EventLayout({ items }: { items: EventItem[] }) {
  const [convertedImages, setConvertedImages] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    items.forEach(async (item) => {
      if (item.src.toLowerCase().endsWith(".heic")) {
        try {
          const response = await fetch(item.src);
          const blob = await response.blob();
          const convertedBlob = await heic2any({ blob, toType: "image/jpeg" });
          const blobToUse = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
          const convertedUrl = URL.createObjectURL(blobToUse);
          setConvertedImages((prev) => ({ ...prev, [item.src]: convertedUrl }));
        } catch (error) {
          console.error("Error converting HEIC image:", error);
        }
      }
    });
  }, [items]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } gap-8 items-center`}
        >
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src={convertedImages[item.src] || item.src}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">{item.title}</h2>
            <button className="px-6 py-3 bg-white text-black rounded-xl hover:shadow-lg transition duration-200">
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
