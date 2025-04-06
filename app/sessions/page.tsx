"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import dialogues from "@/data/sessions.json";
import { motion } from "framer-motion";
// Define proper types for dialogues
interface Dialogue {
  id: number;
  title: string;
  subtitle: string;
  paragraph: string;
}

interface DialoguesData {
  dialogues: Dialogue[];
  paralellDialogues: Dialogue[];
}

const Page: React.FC = () => {
  // Properly typed state variables
  const [dialogueActiveIndex, setDialogueActiveIndex] = useState(0);
  const [parallelDialogueActiveIndex, setParallelDialogueActiveIndex] =
    useState(0);
  const [emblaRef, setEmblaRef] = useState<EmblaCarouselType | null>(null);
  const [parallelEmblaRef, setParallelEmblaRef] =
    useState<EmblaCarouselType | null>(null);

  // Consolidated useEffect for carousel event handling
  useEffect(() => {
    if (emblaRef) {
      const handleSelect = () => {
        setDialogueActiveIndex(emblaRef.selectedScrollSnap());
      };

      emblaRef.on("select", handleSelect);

      return () => {
        emblaRef.off("select", handleSelect);
      };
    }
  }, [emblaRef]);

  useEffect(() => {
    if (parallelEmblaRef) {
      const handleParallelSelect = () => {
        setParallelDialogueActiveIndex(parallelEmblaRef.selectedScrollSnap());
      };

      parallelEmblaRef.on("select", handleParallelSelect);

      return () => {
        parallelEmblaRef.off("select", handleParallelSelect);
      };
    }
  }, [parallelEmblaRef]);

  // Type assertion for dialogues data
  const sessionsData = dialogues as DialoguesData;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="relative overflow-x-hidden">
      {/* Responsive Header Section */}
      <header className="relative pt-23">
        <div className="hidden md:flex hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] flex-col items-center justify-start">
          <Image
            className="size-30 xl:size-52"
            // src="https://ik.imagekit.io/zjaqik2mc/homehero/logo.svg?updatedAt=1743486047833"
            src="/mainpage/logo.svg"
            alt="Festival logo"
            width={127}
            height={52}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center font-libreBodoni md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-[#D72327] font-bold"
          >
            18th APRIL - 20th APRIL <br /> 2025
          </motion.h1>
        </div>

        <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center">
          <Image
            src="/centermobilelogo.png"
            alt="Festival logo"
            width={67}
            height={67}
            className="object-cover w-20 "
          />
        </div>
      </header>

      {/* Sessions Section */}
      <section className="text-center h-[90vh] md:h-auto">
        <h1 className="font-leckerli font-bold text-2xl md:text-4xl lg:text-5xl text-[#D72327] pt-5 md:pt-5">
          Dialogue Sessions
        </h1>

        <div className="w-full flex justify-center relative">
          <Image
            src="/Sessionbg.svg"
            alt="sessions"
            width={300}
            height={120}
            className="object-contain w-full mt-2 mx-auto"
            priority
          />
        </div>

        {/* Sessions Carousel */}
        <div className="session-slider-bg bg-center bg-cover bg-no-repeat h-100 md:h-270 w-full flex items-center justify-center relative -top-40 overflow-hidden mt-23 md:m-0">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="max-w-[380px] md:max-w-7xl"
            setApi={(api) => setEmblaRef(api || null)}
          >
            <CarouselContent>
              {sessionsData.dialogues.map((dialogue, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/2 lg:basis-1/3 text-center relative"
                >
                  <div className="p-1">
                    <Card
                      className={
                        index !== dialogueActiveIndex
                          ? "transition-all opacity-35 scale-80 "
                          : "transition-all"
                      }
                    >
                      <CardContent className="flex items-center justify-center md:h-110 md:w-94 w-50 h-80 bluedialoguebox bg-center bg-no-repeat bg-contain relative">
                        <div
                          className={
                            index === dialogueActiveIndex
                              ? "flex flex-col items-center justify-center yellowdialoguebox bg-center bg-no-repeat bg-contain md:h-110 md:w-84 w-100 h-58 hover:-rotate-10 hover:scale-110 transition-all duration-500 ease-in-out group mb-1"
                              : "flex flex-col items-center justify-center yellowdialoguebox bg-center bg-no-repeat bg-contain md:h-110 md:w-84 w-100 h-58 mb-1"
                          }
                        >
                          <h2 className="text-[#D72327] font-leckerli font-bold md:text-3xl group-hover:text-xl text-[11px] w-33  md:w-84 ">
                            {dialogue.title}
                          </h2>

                          <h3 className="text-blue-800 font-leckerli md:text-xl group-hover:text-md md:w-55 w-23 text-xs">
                            {dialogue.subtitle}
                          </h3>

                          {/* Know More Button - Only Mobile */}
                          <button
                            onClick={() =>
                              setOpenIndex(openIndex === index ? null : index)
                            }
                            className="md:hidden mt-2  text-blue-900 underline text-xs"
                          >
                            {openIndex === index ? "Show Less" : "Know More"}
                          </button>

                          {/* Paragraph - Visible on Hover (Desktop) or Click (Mobile) */}
                          <p
                            className={`font-inter text-[10px] text-justify w-33 md:text-sm md:w-65 transition-opacity ease-in-out font-ebGaramond duration-500 ${
                              openIndex === index ? "block" : "hidden"
                            }  group-hover:block`}
                          >
                            {dialogue.paragraph}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="bg-[#ECCA19] text-[#2F3082] border-none hover:bg-amber-500 transition-colors absolute -left-[0.1%] top-[46%] md:top-[46%] md:-left-[4%]" />
            <CarouselNext className="bg-[#ECCA19] text-[#2F3082] border-none hover:bg-amber-500 transition-colors absolute left-[90%] top-[46%] md:top-[46%] md:left-[100%]" />
          </Carousel>
        </div>
      </section>

      {/* Parallel Sessions Section */}
      <section className="relative">
        <div className="relative md:h-111 h-80 md:mb-45">
          <div className="w-full absolute top-0 left-0 paralleltree bg-contain md:bg-cover bg-center bg-no-repeat md:h-175 h-115">
            <h1 className="font-leckerli font-bold text-2xl md:mt-22 md:m-0 md:text-5xl lg:text-6xl text-[#D72327] text-center">
              Parallel Sessions
            </h1>
          </div>
        </div>
        {/* Parallel Sessions Carousel */}
        <div className="relative w-full flex justify-center items-center md:pb-30  pb-14 mobilecurvedbluebg bg-center bg-no-repeat bg-cover md:curvedbluebg md:bg-bottom md:bg-cover md:bg-no-repeat md:h-150 h-90">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="max-w-[660px] md:max-w-[1440px]"
            setApi={(api) => setParallelEmblaRef(api || null)}
          >
            <CarouselContent>
              {sessionsData.paralellDialogues.map((dialogue, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/2 lg:basis-1/3 text-center relative"
                >
                  <div className="p-1">
                    <Card
                      className={
                        index !== parallelDialogueActiveIndex
                          ? "transition-all opacity-35 scale-80 "
                          : "transition-all"
                      }
                    >
                      <CardContent className="flex items-center justify-center md:h-100 md:w-135 w-90 h-80 redparallel bg-center bg-no-repeat bg-contain relative">
                        {/* <div className="absolute -top-4 rounded-full bg-[#D72327] z-50 h-15 w-15 font-leckerli text-[#2F3082] text-3xl text-center py-2">
                          {dialogue.id + 1}
                        </div> */}
                        <div
                          className={
                            index === dialogueActiveIndex
                              ? "flex flex-col items-center justify-center yellowparallel bg-center bg-no-repeat bg-contain md:h-110 md:w-125 w-100 h-58  hover:-rotate-10 hover:scale-110 transition-all duration-500 ease-in-out group mb-1"
                              : "flex flex-col items-center  justify-center yellowparallel bg-center bg-no-repeat bg-contain md:h-110 md:w-120 w-100 h-58 mb-1"
                          }
                        >
                          <h2 className="text-[#D72327] font-leckerli font-bold md:text-3xl group-hover:text-xl text-lg">
                            {dialogue.title}
                          </h2>
                          <h3 className="text-blue-800 font-leckerli md:text-xl group-hover:text-md md:w-55 w-40 text-lg ">
                            {dialogue.subtitle}
                          </h3>
                          <button
                            onClick={() =>
                              setOpenIndex(openIndex === index ? null : index)
                            }
                            className="md:hidden mt-2  text-blue-900 underline text-xs"
                          >
                            {openIndex === index ? "Show Less" : "Know More"}
                          </button>

                          {/* Paragraph - Visible on Hover (Desktop) or Click (Mobile) */}
                          <p
                            className={`font-inter text-[9px] text-justify w-60 md:text-sm md:w-65 transition-opacity ease-in-out font-ebGaramond duration-500 ${
                              openIndex === index ? "block" : "hidden"
                            }  group-hover:block`}
                          >
                            {dialogue.paragraph}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#ECCA19] text-[#2F3082] border-none hover:bg-amber-500 transition-colors absolute left-[22%] top-[50%] md:top-[48%] md:left-[3%]" />
            <CarouselNext className="bg-[#ECCA19] text-[#2F3082] border-none hover:bg-amber-500 transition-colors absolute left-[74%] top-[50%] md:top-[48%] md:left-[95%]" />
          </Carousel>
        </div>

        <div className="md:h-80 h-50 w-full flex justify-center items-center">
          <div className="relative h-40">
            <Image
              src="/girlbook.svg"
              alt="Girl Reading Book"
              width={200}
              height={120}
              className="object-contain absolute top-8 md:top-6 -left-15 md:-left-15 md:size-30 size-25"
              priority
            />
            <a
              href="/plfbrochure.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#ECCA19] text-[#2F3082] font-bold md:text-xl text-xs font-leckerli md:px-8 px-4 md:py-6 py-4 rounded-full hover:bg-[#C1A513] -z-10 mt-25 [text-shadow:_0_2px_2px_rgb(99_102_241_/_0.8)] md:w-fit w-30">
                Download <br className="block md:hidden" />
                Brochure
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
