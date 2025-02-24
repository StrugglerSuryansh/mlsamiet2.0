"use client";
import React from "react";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import { TextAnimate } from "./magicui/text-animate";
import { HiArrowSmallRight } from "react-icons/hi2";

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
        <div className="text-[#034785] w-16 h-16">{icon}</div>
        <h2 className="text-2xl primary text-black">{title}</h2>
        <p className="text-black text-center secondary">{description}</p>
        <Link href={link}>
        <div className="flex items-center gap-2 bg-[#203A61] hover:bg-[##607da9] text-white font-bold py-2 px-6 rounded-[5px] shadow-lg transition-all duration-300 transform hover:scale-105 secondary">
         <button>Know More </button>
         <HiArrowSmallRight />
        </div>
          
        </Link>
      </div>
    </div>
  );
}

export function NewsletterCards() {
  const newsletters = [
    {
      title: "January '25",
      description: "Explore key updates and exciting accomplishments from the start of 2025.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/mlsa-miet-chronicles-a-thrilling-start-to-2025-with-mlsa",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "December '24",
      description: "Discover insights from our December content and technical achievements.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/from-us-to-you-a-heartwarming-look-back-at-2024",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "November '24 ",
      description: "Check out the events and activities that defined November.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/3rd-edition-of-mlsa-miet",
      icon: <Newspaper className="w-full h-full" />,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-[#203A61] dark:text-cyan-400 text-center m-4">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl primary"
        >
          HIGHLIGHTS
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
