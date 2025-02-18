"use client";

import { EventLayout } from "@/components/EventLayout";

export default function Event() {
  const eventData = [
    {
      title: "AVASAR",
      button: "Explore AVASAR",
      src: "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_105027481.jpg",
    },
    {
      title: "FUN MEET",
      button: "Explore FUN MEET",
      src: "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_0337.jpeg",
    },
    {
      title: "INTRO TO MLSA",
      button: "Explore INTRO TO MLSA",
      src: "/MLSA_WEBSITE/EVENT_PHOTO/intro mlsa/IMG_0399.JPG",
    },
    {
      title: "PRAYAS",
      button: "Explore PRAYAS",
      src: "/MLSA_WEBSITE/EVENT_PHOTO/prayas/PXL_20240529_074308463.jpg",
    },
    {
      title: "SAMAARAMBH",
      button: "Explore SAMAARAMBH",
      src: "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_1001.JPG",
    },
    // ...other items
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EventLayout items={eventData} />
    </div>
  );
}
