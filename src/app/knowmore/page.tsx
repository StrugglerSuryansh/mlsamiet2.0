"use client";
import ImageCarousel from "@/components/ImageCarousel";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Users2, Calendar, Trophy, Building2 } from "lucide-react";


export default function KnowMore() {
  const images = [
    {
      src: "/mlsamietlogo1.png",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_1001.JPG",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_105027481.jpg",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/Sponsers_photos/WhatsApp Image 2025-02-23 at 17.17.31 (1).jpeg",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/Sponsers_photos/WhatsApp Image 2025-02-23 at 17.17.31.jpeg",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/Sponsers_photos/WhatsApp Image 2025-02-23 at 17.17.32 (1).jpeg",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/Sponsers_photos/WhatsApp Image 2025-02-23 at 17.17.32 (2).jpeg",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/Sponsers_photos/WhatsApp Image 2025-02-23 at 17.17.32.jpeg",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/Sponsers_photos/WhatsApp Image 2025-02-23 at 17.17.33 (1).jpeg",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/Sponsers_photos/WhatsApp Image 2025-02-23 at 17.17.33.jpeg",
      objectPosition: "center",
    },
    {
      src: "/MLSA_WEBSITE/Sponsers_photos/WhatsApp Image 2025-02-23 at 17.17.34.jpeg",
      objectPosition: "top",
    },
  ];

  const stats = [
    { value: "4000+", label: "Community Members" },
    { value: "1000+", label: "Event Registrations" },
    { value: "30+", label: "Total Events" },
    { value: "14+", label: "Industry Partners" },
  ];

  const sponsors = [
    "Reskill Ecosystem",
    "Bobble Fanstore",
    "Microsystem Azure",
    "Squareboat",
    "Azure Developer Community",
    "Devfolio",
    "Polygon",
    "ETHIndia",
    "GitHub",
    "Virtual Protocol",
    "Tekshila AI",
    "Quill Audits",
    "Tezos",
    "Dcornerr",
  ];


  const partners = [
    "Microsoft",
    "Fetch.ai",
    "Commudle",
    "Startup4Nation",
    "ADS Labs",
    "CSI-SRM"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with About Us */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-xl sm:text-4xl md:text-5xl text-center text-[#203A61] mb-16 primary"
          >
            UNCOVER OUR JOURNEY
          </TextAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-2xl text-gray-700 leading-relaxed text-justify secondary">
                MLSA MIET is a vibrant community dedicated to fostering tech
                enthusiasm, innovation, and collaboration. Since its inception,
                the community has actively engaged students in cutting-edge
                technologies, hands-on workshops, and industry networking,
                creating a strong bridge between academia and the professional
                world.
              </p>
            </div>
            <div className="h-[400px]">
              <ImageCarousel images={images} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#203A61] primary">
            <TextAnimate>

              Our Legacy
            </TextAnimate>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4"
              >

                <div className="text-3xl font-bold text-center text-gray-900 mb-2 secondary">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-center secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey & Impact Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#203A61] primary">
              <TextAnimate>
                Our Journey & Impact

              </TextAnimate>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center secondary">
              With a history of impactful events, industrial visits, and
              tech-driven initiatives, MLSA MIET has consistently grown,
              attracting thousands of participants across various technical
              domains. Our events, including SAMAARAMBH, PRAYAS, and Generative
              AI sessions, have witnessed an overwhelming response, with
              footfalls exceeding 1000+ registrations per event.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#203A61] primary">
            <TextAnimate>

              Our Trusted Sponsors
            </TextAnimate>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-self-center
">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-white  p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <p className="text-center text-gray-800 font-medium secondary">
                  {sponsor}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 mt-8 secondary text-secondary">
            Supported by 14+ leading sponsors, backed by global and
            community-driven brands.
          </p>
        </div>
      </section>




      {/* Collaborations Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#203A61] primary">
              <TextAnimate>
                Our Collaborations
              </TextAnimate>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  self-center
">
              {partners.map((partners, index) => (
                <div
                  key={index}
                  className="bg-white  p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <p className="text-center text-gray-800 font-medium secondary">
                    {partners}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-16 px-8 bg-[#203A61] text-white ">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-medium italic primary">
            "At MLSA MIET, we continue to empower students, create
            opportunities, and build a thriving tech ecosystem—one event at a
            time! 🚀💙"
          </p>
        </div>
      </section>
    </div>
  );
}
