import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { TextAnimate } from "./magicui/text-animate";

const reviews = [
  {
    name: "Dev Chauhan",
    username: "Developer Advocate, Fetch.AI",
    body: "Speaking at MLSA MIET was an inspiring experience—engaging with a tech-driven community passionate about innovation and problem-solving. The energy and curiosity of the students made every discussion impactful. Excited for future collaborations!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Pulkita Marwah ",
    username: "Applied AI Consultant",
    body: "It was an amazing experience",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Nishant Bhardwaj",
    username: "Staff Engineer, Nagarro",
    body: "Speaking at MLSA MIET was a fantastic experience! The depth of technical discussions and the students' eagerness to explore cutting-edge technologies were truly impressive. It was great to exchange insights on real-world applications and emerging innovations.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Sarthak Gupta",
    username: "Senior Data Engineer, Eviden",
    body: "Had an amazing time speaking at the career guidance event—thank you for making it so welcoming and well-organized! The students were super engaged, and it felt great to share my journey with them. You all did a fantastic job, and I’m excited to see more events like this in the future. Keep up the awesome work!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Ayon roy",
    username: "Data Scientist, NielsenIQ",
    body: "It was a pleasure to speak at an event organized by MLSA MIET and it was such a great feeling to be amongst the community members for whom such events are a great platform to learn and explore.The pool of speakers at the event was so coveted that it was an awesome learning experience for me too. In short, it was a great experience for me to join the event and i look forward to more such opportunities.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Tushar Parashar",
    username: "Core Team '23, MLSA MIET",
    body: "Being a part of MLSA MIET was an incredible experience that shaped both my technical and leadership skills. The community fostered a collaborative environment where innovation thrived, and we continuously pushed the boundaries of what we could achieve together.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Rohit Yadav",
    username: "Microsoft MVP",
    body: "MLSA-MIET has become another family where people learn from each other and excel together . Whether it's about showing teamwork or leading a particular domain. At the end hard work of each member pays off . It was a great time leading the design team and bringing out the fruitful and innovative designs from them.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Ashwarya Negi",
    username: "Ex-Core Team Member, MLSA MIET",
    body: "Had an amazing experience speaking at MLSA MIET! The passion and curiosity of the students created an engaging atmosphere, making every discussion insightful. It was great to connect with a community so dedicated to innovation and problem-solving. Looking forward to more such collaborations!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Sakshi",
    username: "Core Team '22, MLSA MIET",
    body: "Designing my way through life✨—Hey fellows, I'm SAKSHI! Being a part of MLSA community as a Graphic Design Head has been an incredible blend of creativity, teamwork, and growth. It gave me a wide platform to learn, experiment and collaborate with like-minded individuals who are equally passionate about design and technology.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-visible rounded-xl border p-6", // increased width to w-96 and padding
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "mx-4" // added margin between cards
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-4 ">
        {" "}
        {/* increased bottom margin */}
        {/* <img className="rounded-full h-12 w-12 object-cover" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="text-base font-bold primary text-primary dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium primary dark:text-white/40 text-secondary">{username}</p>
        </div>
      </div>
      <blockquote className="text-sm leading-relaxed whitespace-normal break-words secondary text-justify">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-primary text-center m-7">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-xl sm:text-4xl md:text-5xl lg:text-6xl primary"
        >
          VOICES OF EXPERIENCE
        </TextAnimate>
      </div>

      <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
}
