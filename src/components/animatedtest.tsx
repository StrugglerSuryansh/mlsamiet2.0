import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            name: "Geetanshi",
            username: "President",
            body: "I've never seen anything like this before. It's amazing. I love it.",
            // src: "/geetanshi.jpg",
        },
        {
            name: "Dev Shakya",
            username: "Technical co-head",
            body: "i rearrange 0s and 1s.",
            // src: "/Dev Shakya 1.jpg",
        },
        {
            name: "Akshita Srivastava",
            username: "Technical co-head",
            body: "Weaving the web ,debugging chaos!",
            // src: "/Akshita 1.jpg",
        },
        {
            name: "Pranav Bansal",
            username: "Vice president",
            body: "From vision to action, I’m here to make it happen.",
            // src: "/PranavBansal(2).jpg",
        },
        {
            name: "Gaurav Aggarwal",
            username: "Vice president",
            body: "Collaborating for success, striving for excellence.",
            // src: "/Gaurav Aggarwal.jpg",
        },
        {
            name: "Srishti Ruhal ",
            username: "Secretary",
            body: "Someone have to remind you of your own job. ",
            // src: "/Srishti .jpg",
        },
        {
            name: "Aayushi ",
            username: "Content head",
            body: "Making you sound smarter than you actually are ! ",
            // src: "/Aayushi 2.jpg",
        },
        {
            name: "Rajveer Deshwal ",
            username: "Social media head",
            body: "The wizard behind every scroll-stopping post. ",
            // src: "/Rajveer Deshwal.jpg",
        },
        {
            name: "Abhay Chaudhary ",
            username: "PR and Outreach head",
            body: "Spreading the buzz and turning it into actions",
            // src: "/Abhay Choudhary.jpg",
        },
        {
            name: "Yash Tomar ",
            username: "PR and Outreach head",
            body: "Making sure everyone knows how awesome I am !",
            // src: "/yashtomar.png",
        },
        {
            name: "Chirag Malik ",
            username: "Events co-head",
            body: "When life gives chaos , I make an event out of it .",
            // src: "/Chirag Malik 1.jpg",
        },
        {
            name: "Chirag Sharma ",
            username: "Events co-head",
            body: "Turning chaos into perfection .",
            // src: "/Chirag Sharma2.jpeg",
        },
        {
            name: "Arush Rastogi ",
            username: "Graphics Co-head",
            body: "Making tech look cooler than your latest software update.",
            // src: "/Arush Rastogi 1.jpg",
        },
        {
            name: "Shashank Mandoli ",
            username: "Graphics Co-head",
            body: "I'm at a loss for words. This is amazing. I love it.",
            // src: "/Shashank_Mandoli.jpg",
        },
        {
            name: "Aryan Singhal ",
            username: "Visuals co-head",
            body: "the one who makes even circuit boards look Instagram-worthy.",
            // src: "/Aryan singhal 2.jpeg",
        },
        {
            name: "Vishvendra",
            username: "Visuals co-head",
            body: "Architect of aesthetics, builder of breathtaking visuals.",
            // src: "/Vishvendra .jpg",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
