"use client";

import { EventLayout } from "@/components/EventLayout";

export default function Event() {
  const eventData = [
    {
      title: "SAMAARAMBH 2.O",
      body: "It was more than just an industrial visit—it was an unforgettable experience filled with learning, laughter, and connections. From exploring Azure AI and AI Agents to fun challenges and interactive sessions, every moment was packed with excitement. With 1100+ registrations and 180+ attendees, the energy was truly electrifying! The day ended on a heartfelt note, with gratitude for our incredible speakers and partners, leaving everyone inspired and motivated for the journey ahead. 💙🚀",
      button: "Explore Samaarambh 2.O",
      src: "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_1001.JPG",
      sectionId: "samaarambh",
    },
    {
      title: "EXCLUSIVE REEL SHOOT",
      body: "The MLSA is designed to empower students by providing them with opportunities to explore Microsoft technologies, enhance their skills, and connect with a global network of tech enthusiasts. It’s a space where learning meets leadership, offering mentorship, hands-on experiences, and exclusive resources to help students grow.  Whether you're here to dive into new tech, collaborate with like-minded peers, or drive meaningful change, MLSA is where opportunities turn into reality! 🚀",
      button: "Explore The Reel Shoot",
      src: "/MLSA_WEBSITE/EVENT_PHOTO/intro mlsa/IMG_0399.JPG",
      sectionId: "intromlsa",
    },
    {
      title: `TEAM MEET`,
      body: "It was all about building connections and creating a welcoming space where volunteers could engage freely with each other and the core team. Through open conversations and interactive activities, the event encouraged a sense of belonging and camaraderie. It wasn’t just about meeting new people—it was about strengthening teamwork, fostering collaboration, and laying the foundation for a more connected MLSA community! 🌟",
      button: `Explore The Team Meet`,
      src: "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_0337.jpeg",
      sectionId: "funmeet",
    },
    {
      title: "AVSAR",
      body: "MLSA Orientation Session was an interactive and engaging event designed to welcome both new and existing members into the MLSA community. The session highlighted the vision, opportunities, and impact of MLSA, giving attendees a clear understanding of what lies ahead. With discussions on community initiatives, upcoming events, and ways to get involved, the event fostered a sense of excitement and collaboration. It set the perfect tone for the journey ahead, encouraging participants to explore, learn, and grow within the MLSA ecosystem.",
      button: "Explore Avsar",
      src: "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_105027481.jpg",
      sectionId: "avasar",
    }, 
    {
      title: "PRAYAS",
      body: "It was a remarkable initiative aimed at bridging the gap between academia and industry by connecting students with MIET’s esteemed alumni. The event featured insightful speaker sessions, hands-on coding challenges, and interactive quizzes, fostering learning and engagement. Industry experts shared their journeys, career guidance, and the latest tech trends, leaving students inspired and well-equipped for their future! 🚀",
      button: "Explore Prayas",
      src: "/MLSA_WEBSITE/EVENT_PHOTO/prayas/PXL_20240529_074308463.jpg",
      sectionId: "prayas",
    },

    // ...other items
  ];

  return (
    <div className="min-h-full bg-gray-50">
      <EventLayout items={eventData} />
    </div>
  );
}
