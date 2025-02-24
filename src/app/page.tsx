"use client";
import { SpotlightNewDemo } from "@/components/HeroSection";
import { MagicCardDemo } from "@/components/MagicCardDemo";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";
import Cards from "@/components/cards";
import { NewsletterCards } from "@/components/NewsletterCard";
import SponsorsSection from "@/components/sponsers";

const testimonials = [
  {
    quote:
      "A dynamic lead at MLSA MIET, passionate about AWS, development, and scalable applications, driving impactful innovations.",
    name: "Yash Gupta",
    designation: "Lead",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/yash1.JPG",
    social: {
      commudle: "https://www.commudle.com/users/yashg",
      linkedin: "https://www.linkedin.com/in/yash-gupta-b59877280/",
      email: "yashg031124@gmail.com",
    },
  },
  {
    quote:
      "A visionary leader at MLSA MIET, proficient in Java and Python, blending AI expertise with social media enthusiasm. ",
    name: "Muskan Jain",
    designation: "Lead",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/MUSKAN2.jpg",
    social: {
      commudle: "https://www.commudle.com/users/Muskanjain1702",
      linkedin: "https://www.linkedin.com/in/muskanjain1702/",
      email: "muskanjain1702@gmail.com",
    },
  },
  {
    quote:
      "A cheerful and dedicated soul ensuring smooth events, skilled in Python, SQL, C, and DSA, making moments memorable",
    name: "Yagyansh Singh Deshwal",
    designation: "Head Of Operations",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/yagyansh.jpg",
    social: {
      commudle:"https://www.commudle.com/users/3e8b79ce2ba94f96e865be6a5fee0fc9",
      linkedin: "https://www.linkedin.com/in/yagyansh-singh-deshwal/",
      email: "yagyanshsinghdeshwal@gmail.com",
    },
  },
  {
    quote:
      "A tech enthusiast scaling technology, leveraging web development, MERN stack, and DevOps to build seamless solutions. ",
    name: "Suryansh",
    designation: "Tech Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/suryansh.png",
    social: {
      commudle: "https://www.commudle.com/users/Suryanshpatwal1",
      linkedin: "https://www.linkedin.com/in/suryansh-patwal/",
      email: "suryanshpatwal@gmail.com",
    },
  },
  {
    quote:
      "A creative mind behind content, passionate about Blockchain, Java, and frontend, crafting engaging and tech-driven narratives.",
    name: "Tanushka Kashyap",
    designation: "Content Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/tanushka.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/tanushka-kashyap-3b5a28211/",
      email: "tanushkakashyap506@gmail.com",
      commudle:
        "https://www.commudle.com/users/da6ac7497d07e91ee07ea2683c57a17c",
    },
  },
  {
    quote:
      "An expert bringing graphics to life, blending aesthetics with functionality, backed by a strong grip on frontend.",
    name: "Anmol Kumar",
    designation: "Graphics Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/anmol.jpg",
    social: {
      commudle: "https://www.commudle.com/users/anmolkumar001",
      linkedin: "https://www.linkedin.com/in/anmolkumar01/",
      email: "anmolkumar.cod01@gmail.com",
    },
  },
  {
    quote:
      "A skilled communicator and multitasker, leading PR and outreach while bringing a developer’s touch to collaborations.",
    name: "Pari Agarwal",
    designation: "Outreach Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/Pari.jpg",
    social: {
      commudle: "https://www.commudle.com/users/Pariagarwal",
      linkedin: "https://www.linkedin.com/in/pari-agarwal-3153bb290/",
      email: "agarwalpari329@gmail.com",
    },
  },
  {
    quote:
      "A storyteller capturing impactful moments, with competitive programming skills with expertise in C, C++, and DSA.",
    name: "Asit Upadhyay",
    designation: "Media Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/ASIT_UPADHYAY.jpg",
    social: {
      commudle: "https://www.commudle.com/users/asitupadhyay",
      linkedin: "https://www.linkedin.com/in/asit-upadhyay-5b469a207/",
      email: "asit.upadhyay793@gmail.com",
    },
  },
];

export default function Home() {
  return (
    <div>
      <SpotlightNewDemo />
      <Cards />
      <NewsletterCards />
      <MarqueeDemo />
      <AnimatedTestimonialsDemo
        testimonials={testimonials}
        title="MEET THE LEADERS"
      />
      <SponsorsSection/>
    </div>
  );
}
