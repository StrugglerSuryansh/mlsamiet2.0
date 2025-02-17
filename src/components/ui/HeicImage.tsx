"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeicImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function HeicImage({
  src,
  alt,
  width,
  height,
  className,
}: HeicImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);

  useEffect(() => {
    if (src.toLowerCase().endsWith(".heic")) {
      // Create API endpoint to handle conversion
      fetch(`/api/convert-heic?url=${encodeURIComponent(src)}`)
        .then((res) => res.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setImageSrc(url);
        })
        .catch((error) => console.error("Error converting HEIC:", error));
    }
  }, [src]);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
