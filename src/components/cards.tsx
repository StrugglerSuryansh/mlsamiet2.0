import React, { useState } from "react";
import { Target, Compass, Eye } from "lucide-react";
import { TextAnimate } from "./magicui/text-animate";
import Link from "next/link";
import { HiArrowSmallRight } from "react-icons/hi2";

interface CardProps {
  title: string;
  icon: React.ReactNode;
  frontContent: string;
  backContent: string;
}

function FlipCard({ title, icon, frontContent, backContent }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <div
        className="w-80 h-96 perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${isFlipped ? "rotate-y-180" : ""
            }`}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full backface-hidden">
            <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col items-center justify-center space-y-4 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 w-16 h-16">{icon}</div>
              <h2 className="text-2xl font-bold primary text-black">{title}</h2>
              <p className="text-black text-center secondary">{frontContent}</p>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="bg-blue-400 p-6 rounded-xl shadow-lg h-full flex flex-col items-center justify-center">
              <p className="text-white text-center text-lg secondary">
                {backContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 

function App() {
  const cards = [
    {
      title: "Our Aim",
      icon: <Target className="w-full h-full text-secondary" />,
      frontContent: "Striving for Excellence",
      backContent: [
        "Spark ideas, light the flame, Learn, inspire, and build your name.",
        "Empower, innovate, and aim so high.",
        "With MLSA MIET, touch the sky!"
      ].join('\n'),
    },
    {
      title: "Our Mission",
      icon: <Compass className="w-full h-full text-secondary" />,
      frontContent: "Empowering Success",
      backContent: [
        "A mission where Innovation and dreams unfold Together we shape a future that's bold.",
        "To bridge the gap where ideas flow.",
        "Inspiring growth where creativity grows."
      ].join('\n'),
    },
    {
      title: "Our Vision",
      icon: <Eye className="w-full h-full text-secondary" />,
      frontContent: "Shaping Tomorrow",
      backContent: [
        "Our vision is to build a vibrant community.",
        "Where tech and innovation fuel unity.",
        "A space where dreams flourish and futures align.",
        "Empowering all to rise, together we shine."
      ].join('\n'),
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-primary text-center m-4 py-16">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl primary"
        >
          ABOUT US
        </TextAnimate>
      </div>

      <div className="bg-gray-100 py-8 px-4">
        {" "}
        {/* Removed min-h-screen, reduced py-12 to py-8 */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {cards.map((card, index) => (
              <FlipCard key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="flex align-center justify-center mt-8 md:mr-8 mb-4 ">
          {/* Added mb-4 */}
          <div className="flex items-center gap-2 bg-[#203A61] text-white font-bold py-2 px-6 rounded-[5px] shadow-lg transition-all duration-300 transform hover:scale-105 secondary">
          <Link href="/knowmore">Know More</Link>
          <HiArrowSmallRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
