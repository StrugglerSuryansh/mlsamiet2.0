"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

interface propType{
  name:string,
  headling:string,
  image?:string
}

export function ThreeDCardDemo({ size = 'default', name,headling, image }: { size?: 'default' | 'small' } & propType) {
  return (
    <CardContainer className="inter-var">
      <CardBody className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto ${
        size === 'small' ? 'sm:w-[20rem]' : 'sm:w-[30rem]'
      } h-auto rounded-xl p-6 border`}>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {headling}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className={`h-${size === 'small' ? '40' : '60'} w-full object-cover rounded-xl group-hover/card:shadow-xl`}
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Image src="/Github.svg" width={24} height={24} alt="GitHub Logo"/>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Image src="/instagram.svg" width={24} height={24} alt="Instagram Logo"/>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Image src="/linkedIn.svg" width={24} height={24} alt="Linkedin Logo"/>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}