"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

interface ThreeDCardProps {
  size?: "default" | "small";
  name: string;
  headline: string;
  image?: string;
  links?: {
    github?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export function ThreeDCardDemo({
  size = "default",
  name,
  headline,
  image = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  links,
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto ${
          size === "small" ? "sm:w-[20rem]" : "sm:w-[30rem]"
        } h-auto rounded-xl p-6 border transition-all duration-300`}
      >
        <CardItem
          translateZ={50}
          className="text-xl font-bold text-neutral-600 dark:text-white"
          as="h3"
        >
          {name}
        </CardItem>
        
        <CardItem
          translateZ={60}
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
          as="p"
        >
          {headline}
        </CardItem>

        <CardItem translateZ={100} className="w-full mt-4" as="div">
          <Image
            src={image}
            width={1000}
            height={1000}
            className={`h-${size === "small" ? "40" : "60"} w-full object-cover rounded-xl shadow-lg group-hover/card:shadow-xl`}
            alt={name}
          />
        </CardItem>

        <div className="flex justify-between items-center mt-6">
          {links?.github && (
            <CardItem
              translateZ={20}
              as="a"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:scale-110 transition"
            >
              <Link href={links?.github} target="__blank">
              <Image src="/Github.svg" width={24} height={24} alt="GitHub" className="hover:cursor-pointer"/>
              </Link>
            </CardItem>
          )}
          
          {links?.instagram && (
            <CardItem
              translateZ={20}
              as="a"
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:scale-110 transition"
            >
              <Link href={links?.instagram} target="__blank">
              <Image src="/instagram.svg" width={24} height={24} alt="Instagram" className="hover:cursor-pointer"/>
              </Link>
            </CardItem>
          )}
          
          {links?.linkedin && (
            <CardItem
              translateZ={20}
              as="a"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:scale-110 transition"
            >
              <Link href={links?.linkedin} target="__blank">
              <Image src="/linkedIn.svg" width={24} height={24} alt="LinkedIn" className="hover:cursor-pointer"/>
              </Link>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}