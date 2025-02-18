import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
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
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
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
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Yagyansh Singh Deshwal",
    designation: "Head Of Operations",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/yagyansh.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/yagyansh-singh-deshwal/",
      email: "yagyanshsinghdeshwal@gmail.com",
    },
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
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
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
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
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
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
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Pari Aggarwal",
    designation: "Outreach Head",
    src: "/MLSA_WEBSITE/Domain_Heads_photo/pari.png",
    social: {
      commudle: "https://www.commudle.com/users/Pariagarwal",
      linkedin: "https://www.linkedin.com/in/pari-agarwal-3153bb290/",
      email: "agarwalpari329@gmail.com",
    },
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
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

export default function KnowMore() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our dedicated team of domain heads and leaders work together to
            create impactful experiences and drive innovation within the MLSA
            community. Each member brings unique skills and perspectives to help
            achieve our mission.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            From technical expertise to creative content, our diverse team
            collaborates to deliver excellence in every aspect of our
            organization.
          </p>
        </div>

        {/* Right side - Testimonials */}
        <div>
          <AnimatedTestimonialsDemo
            testimonials={testimonials}
            autoChangeInterval={2000} // 2000 seconds
            isAutoChange={true} // Enable auto-changing
            title=""
          />
        </div>
      </div>
    </div>
  );
}
