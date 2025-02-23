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
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
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
            <h2 className="text-4xl font-bold text-center w-full text-[#203A61]">
              {item.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {item.body}
            </p>
            <Link
              href={`/gallery#${item.sectionId}`}
              className="flex justify-center"
            >
              <button className="px-6 py-3 bg-white text-[#203A61] rounded-xl hover:shadow-lg transition duration-200">
                {item.button}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
