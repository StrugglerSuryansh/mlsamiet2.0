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
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // ...other items
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EventLayout items={eventData} />
    </div>
  );
}
