"use client";
import React from "react";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import { TextAnimate } from "./magicui/text-animate";

interface NewsletterCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

function SingleCard({ title, description, link, icon }: NewsletterCardProps) {
  return (
    <div className="w-80 h-96">
      <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col items-center justify-center space-y-4 hover:shadow-xl transition-shadow">
        <div className="text-blue-600 w-16 h-16">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-center">{description}</p>
        <Link href={link}>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
            View Newsletter
          </button>
        </Link>
      </div>
    </div>
  );
}

export function NewsletterCards() {
  const newsletters = [
    {
      title: "Monthly Updates",
      description: "Stay updated with our monthly progress and achievements",
      link: "/newsletter/monthly",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "Tech Insights",
      description: "Deep dive into technical content and learning resources",
      link: "/newsletter/tech",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "Event Highlights",
      description: "Catch up on our latest events and community activities",
      link: "/newsletter/events",
      icon: <Newspaper className="w-full h-full" />,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-cyan-400 dark:text-cyan-400 text-center font-bold font-mono m-4">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Explore MLSA Newsletters
        </TextAnimate>
      </div>

      <div className="bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {newsletters.map((newsletter, index) => (
              <SingleCard key={index} {...newsletter} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
