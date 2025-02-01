import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            name: "Geetanshi",
            username: "President",
            body: "I've never seen anything like this before. It's amazing. I love it.",
            img: "/geetanshi.jpg",
        },
        {
            name: "Dev Shakya",
            username: "Technical co-head",
            body: "i rearrange 0s and 1s.",
            img: "/Dev Shakya 1.jpg",
        },
        {
            name: "Akshita Srivastava",
            username: "Technical co-head",
            body: "Weaving the web ,debugging chaos!",
            img: "/Akshita 1.jpg",
        },
        {
            name: "Pranav Bansal",
            username: "Vice president",
            body: "From vision to action, I’m here to make it happen.",
            img: "/PranavBansal(2).jpg",
        },
        {
            name: "Gaurav Aggarwal",
            username: "Vice president",
            body: "Collaborating for success, striving for excellence.",
            img: "/Gaurav Aggarwal.jpg",
        },
        {
            name: "Srishti Ruhal ",
            username: "Secretary",
            body: "Someone have to remind you of your own job. ",
            img: "/Srishti .jpg",
        },
        {
            name: "Aayushi ",
            username: "Content head",
            body: "Making you sound smarter than you actually are ! ",
            img: "/Aayushi 2.jpg",
        },
        {
            name: "Rajveer Deshwal ",
            username: "Social media head",
            body: "The wizard behind every scroll-stopping post. ",
            img: "/Rajveer Deshwal.jpg",
        },
        {
            name: "Abhay Chaudhary ",
            username: "PR and Outreach head",
            body: "Spreading the buzz and turning it into actions",
            img: "/Abhay Choudhary.jpg",
        },
        {
            name: "Yash Tomar ",
            username: "PR and Outreach head",
            body: "Making sure everyone knows how awesome I am !",
            img: "/yashtomar.png",
        },
        {
            name: "Chirag Malik ",
            username: "Events co-head",
            body: "When life gives chaos , I make an event out of it .",
            img: "/Chirag Malik 1.jpg",
        },
        {
            name: "Chirag Sharma ",
            username: "Events co-head",
            body: "Turning chaos into perfection .",
            img: "/Chirag Sharma2.jpeg",
        },
        {
            name: "Arush Rastogi ",
            username: "Graphics Co-head",
            body: "Making tech look cooler than your latest software update.",
            img: "/Arush Rastogi 1.jpg",
        },
        {
            name: "Shashank Mandoli ",
            username: "Graphics Co-head",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "/Shashank_Mandoli.jpg",
        },
        {
            name: "Aryan Singhal ",
            username: "Visuals co-head",
            body: "the one who makes even circuit boards look Instagram-worthy.",
            img: "/Aryan singhal 2.jpeg",
        },
        {
            name: "Vishvendra",
            username: "Visuals co-head",
            body: "Architect of aesthetics, builder of breathtaking visuals.",
            img: "/Vishvendra .jpg",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
