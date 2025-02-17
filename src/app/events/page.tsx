"use client";

import { EventLayout } from "@/components/EventLayout";

export default function Event() {
  const eventData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/MLSA_WEBSITE/ALUMNIE_PHOTOS/Abhinav_yadav.jpg",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2276.HEIC",
    },
    // ...other items
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EventLayout items={eventData} />
    </div>
  );
}
