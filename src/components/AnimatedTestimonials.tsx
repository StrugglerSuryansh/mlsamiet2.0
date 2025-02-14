import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { TextAnimate } from "@/components/magicui/text-animate";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/MLSA_WEBSITE/Domain_Heads_photo/yash1.JPG",
    },
    //fill the rest of the array with objects like the one above
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Muskan Jain",
      designation: "CTO at InnovateSphere",
      src: "/MLSA_WEBSITE/Domain_Heads_photo/MUSKAN2.jpg",
      social: {
        twitter: "https://twitter.com/sarahchen",
        linkedin: "https://linkedin.com/in/sarah-chen",
        instagram: "https://instagram.com/sarahchen.tech"
      }

    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/MLSA_WEBSITE/Domain_Heads_photo/yagyansh.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/MLSA_WEBSITE/Domain_Heads_photo/suryansh.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/MLSA_WEBSITE/Domain_Heads_photo/tanushka.jpg",
      social: {
        twitter: "https://twitter.com/sarahchen",
        linkedin: "https://linkedin.com/in/sarah-chen",
        instagram: "https://instagram.com/sarahchen.tech"
      }
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/MLSA_WEBSITE/Domain_Heads_photo/anmol.jpg",
      social: {
        twitter: "https://twitter.com/sarahchen",
        linkedin: "https://linkedin.com/in/sarah-chen",
        instagram: "https://instagram.com/sarahchen.tech"
      }
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/MLSA_WEBSITE/Domain_Heads_photo/pari.png",
      social: {
        twitter: "https://twitter.com/sarahchen",
        linkedin: "https://linkedin.com/in/sarah-chen",
        instagram: "https://instagram.com/sarahchen.tech"
      }
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/MLSA_WEBSITE/Domain_Heads_photo/ASIT_UPADHYAY.jpg",
      social: {
        twitter: "https://twitter.com/sarahchen",
        linkedin: "https://linkedin.com/in/sarah-chen",
        instagram: "https://instagram.com/sarahchen.tech"
      }
    },
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
