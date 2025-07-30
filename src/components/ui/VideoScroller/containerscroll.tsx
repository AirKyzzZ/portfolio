"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/VideoScroller/container-scroll-animation";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden pb-[20px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Découvrez mes <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Projets & Réalisations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/moi.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
