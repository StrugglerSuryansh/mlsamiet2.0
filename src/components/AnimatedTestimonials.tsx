import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Commudle } from "./icons/Commudle";

export function AnimatedTestimonialsDemo() {
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
        email: "yashg031124@gmail.com"
      }
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
        email: "muskanjain1702@gmail.com"
      }
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Yagyansh Singh Deshwal",
      designation: "Head Of Operations",
      src: "/MLSA_WEBSITE/Domain_Heads_photo/yagyansh.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/yagyansh-singh-deshwal/",
        email: "yagyanshsinghdeshwal@gmail.com"
      }
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
        email: "suryanshpatwal@gmail.com"
      }
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
        commudle: "https://www.commudle.com/users/da6ac7497d07e91ee07ea2683c57a17c"
      }
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
        email: "anmolkumar.cod01@gmail.com"
      }
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
        email: "agarwalpari329@gmail.com"
      }
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
        email: "asit.upadhyay793@gmail.com"
      }
    }
  ];

  return <div>
    <div className="flex flex-col items-center justify-center gap-4 text-blue-400 dark:text-cyan-400 text-center font-bold font-mono m-4">
      <TextAnimate
        animation="blurInUp"
        by="character"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        Meet the team

      </TextAnimate>
    </div>

    <AnimatedTestimonials testimonials={testimonials} />;

  </div>
}
