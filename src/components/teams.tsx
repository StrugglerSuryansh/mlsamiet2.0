import { TextAnimate } from "./magicui/text-animate";
import { TeamMember } from "./ui/team-member";

const technicalTeam = [
  {
    name: "Suryansh Patwal",
    imageUrl: "/MLSA_WEBSITE/Domain_Heads_photo/suryansh.png",
  },
  {
    name: "Lomash Choudhary",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/technical team/Lomash Choudhary.jpeg",
  },
  {
    name: "Naitik Kumar",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/technical team/Naitik.webp",
  },
  {
    name: "Piyush Goel",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/technical team/Piyush Goel.png",
  },
];

const graphicsTeam = [
  {
    name: "Anmol Kumar",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/Graphic team/anmolkumar.jpg",

  },
  {
    name: "Aman Sharma",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/Graphic team/AmanSharma.jpg",
    imagePosition: "top" as const,

  },
  {
    name: "Arya Rajvanshi",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/Graphic team/arya.jpg",
    imagePosition: "top" as const,
  },
  {
    name: "Ayush",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/Graphic team/Ayush.jpg",
  },
  {
    name: "Bhavya Gupta",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/Graphic team/Bhavya Gupta.jpg",
    imagePosition: "top" as const,

  },
  {
    name: "Shagun",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/Graphic team/IMG_20250210_173126.jpg",
    imagePosition: "top" as const,

  },
  {
    name: "Khushi Gupta",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/Graphic team/khushi Gupta .jpg",
  },
  {
    name: "Udit Goel",
    imageUrl: "/MLSA_WEBSITE/volunteer_photo/Graphic team/UditGoel.jpg",
  },
];

const contentTeam = [
  {
    name: "Tanushka Kashyap",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/tanushka.jpg",
  },
  {
    name: "Geetanshi Goel",
    imageUrl:
      "MLSA_WEBSITE/volunteer_photo/Content team/IMG-20250224-WA0022[1].jpg",
    imagePosition: "top" as const
  },
  {
    name: "Aastha Panwar",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/Content team/IMG_20250211_172808.jpg",
    imagePosition: "top" as const,

  },
  {
    name: "Khushi Mavi",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/Content team/IMG-20250210-WA0006.jpg",
  },
  {
    name: "Pranav Bansal",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/Content team/PranavBansal.jpg",
  },
];

const eventTeam = [
  {
    name: "Yagyansh Singh Deshwal",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/yagyansh.jpg",
  },
  {
    name: "Ansh Goel",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/IMG_20241208_144759.jpg",
  },
  {
    name: "Avni Gupta",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/IMG_20241228_155612.jpg",
  },
  {
    name: "Bhumika Nagar",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/IMG_20250210_214019.jpg",
    imagePosition: "top" as const,

  },
  {
    name: "Daksh Goswami",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/IMG_20250211_015050.jpg",
  },
  {
    name: "Nirdesh Tyagi",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/Nirdesh Tyagi.jpg",
    imagePosition: "top" as const,

  },
  {
    name: "Vaibhav Gupta",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/IMG-20250224-WA0021[1].jpg",
  },
  {
    name: "Tushar Tyagi",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/event team/Tushar Tyagi_.jpg",
  },
];

const prTeam = [
  {
    name: "Pari Agarwal",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/Pari.jpg",
  },
  {
    name: "Anushka Singhal",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/PR team/image.png",
    

  },
{
  name: "Kunj Agarwal",
    imageUrl:
  "/MLSA_WEBSITE/volunteer_photo/PR team/Kunj Agarwal.jpg",
    imagePosition: "top" as const,

  },
{
  name: "Sahil Gulati",
    imageUrl:
  "/MLSA_WEBSITE/volunteer_photo/PR team/Sahil Gulati.jpg",
  },
{
  name: "Bhavya Sharma",
    imageUrl:
  "/MLSA_WEBSITE/volunteer_photo/PR team/Screenshot_2025-02-09-18-10-36-67_99c04817c0de5652397fc8b56c3b3817.jpg",

  },
{
  name: "Gungun Goel",
    imageUrl:
  "/MLSA_WEBSITE/volunteer_photo/PR team/Screenshot_20250209_180247_Gallery.jpg",
    imagePosition: "top" as const,

  },
{
  name: "Prafullit Bhattacharya",
    imageUrl:
  "/MLSA_WEBSITE/volunteer_photo/PR team/WhatsApp Image 2024-12-28 at 22.45.34.jpeg",
  },
];

const socialTeam = [
  {
    name: "Muskan Jain",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/MUSKAN2.jpg",
  },
  {
    name: "Yash Goel",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/social team/yashgoyal.png",
  },
  {
    name: "Navya Yadav",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/social team/IMG-20241025-WA0023.jpg",
  },
  {
    name: "Tanishka Agarwal",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/social team/Tanishkaagg.jpg",
  },
  {
    name: "Kushagra Sharma",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/social team/WhatsApp Image 2025-02-09 at 11.20.04 PM.jpeg",
  },
];

const visualTeam = [
  {
    name: "Asit Upadhyay",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/ASIT_UPADHYAY.jpg",
  },
  {
    name: "Ansh Sharma",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/visual team/Ansh Sharma.jpg",
  },
  {
    name: "Harshit Rana",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/visual team/c395055e-2096-41b9-992c-762ccf40cf04.jpg",
  },
  {
    name: "Gagan Saini",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/visual team/Gagan Saini.jpg",
  },
  {
    name: "Sahil Gulati",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/visual team/Sahil Gulati.jpg",
  },
  {
    name: "Sumit Aggarwal",
    imageUrl:
      "/MLSA_WEBSITE/volunteer_photo/visual team/image.png",
  },
];

export function Teams() {
  return (
    <div className="container mx-auto px-20 py-16">
      <h1 className="text-2xl md:text-5xl text-center mb-16 text-[#203A61] primary">
        <TextAnimate>
          THE MINDS BEHIND THE MISSION
        </TextAnimate>
      </h1>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Content Creation</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {contentTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Creative Design</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {graphicsTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Digital Marketing</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {socialTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Event Operations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {eventTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Public Relations & Outreach</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {prTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Technical Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technicalTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl sm:text-4xl font-bold mb-8 text-[#203A61] secondary">Visuals Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {visualTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>
    </div>
  );
}
