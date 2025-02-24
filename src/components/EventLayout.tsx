"use client";
import Link from "next/link";

interface EventItem {
  title: string;
  body: string;
  button: string;
  src: string;
  sectionId: string;
}

export function EventLayout({ items }: { items: EventItem[] }) {
  return (
    <div className="h-full max-w-7xl mx-auto px-4 py-16 space-y-24">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 items-center`}
        >
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center space-y-6">
            <h2 className="text-4xl text-center font-bold w-full text-[#203A61] secondary">
              {item.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify secondary">
              {item.body}
            </p>
            <Link
              href={`/gallery#${item.sectionId}`}
              className="flex justify-center"
            >
              <button className="bg-[#203A61] hover:bg-[#607da9] text-white font-bold py-2 px-6 rounded-[5px] shadow-lg transition-all duration-300 transform hover:scale-105 secondary">
                {item.button}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
