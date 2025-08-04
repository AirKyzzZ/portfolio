"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/ContainerScroll/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";

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
        <Link 
          href="https://linkedin.com/in/maxime-mansiet/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`/openpk.jpg`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </Link>
      </ContainerScroll>
    </div>
  );
}
