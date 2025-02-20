"use client";
import { useState, useEffect } from "react";

interface ImageItem {
  src: string;
  objectPosition?: string;
}

interface ImageCarouselProps {
  images: ImageItem[];
  interval?: number;
}

export default function ImageCarousel({
  images,
  interval = 3000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[10px]">
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-500 rounded-[10px] ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: image.objectPosition || "center" }}
        />
      ))}
    </div>
  );
}
