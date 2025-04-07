"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="relative pt-24 inset-0 overflow-x-hidden w-full">
      {/* Header Section */}
      <div className="hidden hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] md:flex md:flex-col items-center justify-start relative">
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
          className="text-center font-libreBodoni md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-[#D72327] font-bold md:mt-3"
        >
          18th APRIL - 20th APRIL <br /> 2025
        </motion.h1>
      </div>
      <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center relative">
        <Image
          src="/centermobilelogo.png"
          alt="Festival logo"
          width={67}
          height={67}
          className="object-cover w-20 "
        />
      </div>

      {/* Title Section */}
      <div className="w-full flex flex-col items-center relative">
        {/* Heading */}
        <h1 className="font-leckerli text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-[#D72327] text-center mt-2 md:mt-3 lg:mt-10">
          A Celebration of
        </h1>
        <h1 className="font-leckerli text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-[#ECCA19] text-center md:mt-1 ">
          Heritage & Culture
        </h1>

        {/* Responsive Image */}
        {/* <div className="w-full flex justify-center mt-16  md:hidden absolute">
          <Image
            src="/programs/programstemple2.png"
            alt="Festival logo"
            width={200}
            height={80}
            className="object-contain w-120 h-auto"
          />

        </div> */}

        <div className="w-full  justify-center md:mt-4 flex">
          <Image
            src="/programs/programstemple2.png"
            alt="Festival logo"
            width={227}
            height={100}
            className="object-contain w-[230px] max-w-lg md:max-w-lg lg:max-w-lg absolute -left-4 md:-bottom-106"
          />
        </div>
        <div className="absolute md:-bottom-95  -bottom-64 right-12 -z-20 ">
          <Image
            src="/programs/musician.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-[100px] sm:w-1/2 md:w-[350px]  rounded-lg "
          />
        </div>
        <div className="absolute md:-bottom-95 -bottom-60 right-0 -z-10 ">
          <Image
            src="/programs/female-dancer.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-[60px] sm:w-1/2 md:w-50 rounded-lg "
          />
        </div>
      </div>

      {/* Mustard Background Section - Fixed */}
      <div className="relative w-full min-h-130 md:min-h-[120vh] lg:min-h-260 flex md:items-center justify-center overflow-hidden mt-46 md:mt-60">
        <div className="absolute inset-0 z-0 h-full w-full hidden md:block">
          <Image
            src="/programs/mustardbg.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>

        <div className="absolute inset-0 z-0 md:h-120  h-120  w-full md:hidden">
          <Image
            src="/programs/mobilemustardbg.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            quality={100}
            priority
            className="w-[70%] "
          />
        </div>

        {/* Your content goes here */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-[90%] md:w-[80%] lg:w-[85%] mx-auto md:gap-28">
          <h1 className="text-lg md:hidden text-white font-bold font-ebGaramond  mt-16">
            Heritage Walk
          </h1>
          <h2 className="text-xs font-semibold italic text-[#83660F]  md:hidden font-ebGaramond">
            Vision of the Past to Shape our Present
          </h2>

          <div className="flex justify-center mt-5 md:mt-0 ">
            <Image
              src="/programs/heritagewalk.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-[150px] sm:w-1/2 md:w-105 shadow-[10px_10px_20px_rgba(0,0,0,0.5)]  "
            />
          </div>

          {/* Right Section - Image with 3D Shadow */}
          <div className="w-full md:w-1/2 text-center md:text-left md:my-auto ">
            <h1 className="text-xl md:text-5xl hidden md:block text-white font-bold font-ebGaramond">
              Heritage Walk
            </h1>
            <h2 className="text-3xl md:text-3xl font-semibold italic text-[#83660F] hidden md:block mb-10 font-ebGaramond">
              Vision of the Past to Shape our Present
            </h2>

            <p className="text-[#000000] text-xs md:text-lg pt-8 md:pt-0 px-12  md:px-0 text-justify font-ebGaramond ">
              An immersive Heritage Walk, allowing participants to explore
              Puri’s iconic landmarks such as the Jagannath Temple, Gundicha
              Temple, and the vibrant bylanes echoing with tales of devotion and
              tradition.
            </p>
          </div>
        </div>
        <div className="absolute md:-bottom-8 bottom-16 right-0  z-20">
          <Image
            src="/programs/warriorhorse.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-26 sm:w-1/2 md:w-[357px] rounded-lg"
          />
        </div>
      </div>
      <div className="relative">
        <Image
          src="/programs/fighting.svg"
          alt="Decorative Line"
          width={357}
          height={52}
          className="absolute md:-top-62 -top-24 md:-left-8  z-20 w-56 md:w-xl rotate-10"
        />
      </div>
      {/* Voilet */}
      <div className="relative w-full min-h-[100vh] md:min-h-[120vh] lg:min-h-275 flex items-center justify-center overflow-hidden ">
        <div className="absolute inset-0 z-0 h-[70vh] md:h-full w-full hidden md:block">
          <Image
            src="/programs/voiletbg.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 z-0 md:h-120  h-160  w-full md:hidden">
          <Image
            src="/programs/mobilevoiletbg.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-[70%] "
          />
        </div>
        {/* Your content goes here */}
        <div className=" z-10 flex flex-col md:flex-row items-center  md:items-center w-[400px] md:w-[80%] lg:w-[95%] md:px-20 md:gap-38 gap-0 px-10 ">
          <h1 className="text-lg md:text-5xl font-bold text-white  font-ebGaramond absolute mt-0 md:mb-0 mb-24   md:hidden ">
            Cultural Night
          </h1>
          <h2 className="text-sm md:text-4xl text-[#9F6EEA] italic  font-ebGaramond absolute mt-5  mb-4 md:mb-0   md:hidden ">
            A tapestry of Traditions
          </h2>
          {/* Left Section - Text */}

          <div className="flex justify-center md:mt-12 mt-12  md:hidden md:mb-0 mb-14">
            <Image
              src="/programs/culturalnight.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-[156px] sm:w-1/2 md:w-105 shadow-[5px_5px_30px_rgba(0,0,0,0.5)]  "
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left mt-0 md:my-auto ">
            <h1 className="text-xl md:text-5xl font-bold text-white  font-ebGaramond hidden md:block">
              Cultural Night
            </h1>
            <h2 className="text-lg md:text-4xl text-[#9F6EEA] italic  font-ebGaramond hidden md:block">
              A tapestry of Traditions
            </h2>
            <p className="text-white text-xs md:text-base md:pt-10 pt-0 font-ebGaramond text-justify mb-22 md:mb-0">
              While the days will lead to thought-provoking discussions, the
              evenings will soothe the audience with a Cultural Night
              celebrating India&apos;s diverse artistic heritage. From the
              hypnotic beats of Odissi dance to the soulful strains of
              Hindustani classical & contemporary music and Paika martial art
              performances, the event will feature performances by renowned
              artists.
            </p>
          </div>

          {/* Right Section - Image with 3D Shadow */}
          <div className=" justify-center md:mt-0  hidden md:flex">
            <Image
              src="/programs/culturalnight.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-[150px] sm:w-1/2 md:w-105 shadow-[5px_5px_30px_rgba(0,0,0,0.5)]  "
            />
          </div>
        </div>
        <div className="absolute -bottom-22 left-20 z-20 hidden md:block">
          <Image
            src="/programs/musician.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-3/4 sm:w-1/2 md:w-[350px] rounded-lg"
          />
        </div>
      </div>
      <div className="relative ">
        <Image
          src="/programs/male-dancer.svg"
          alt="Decorative Line"
          width={357}
          height={52}
          className="absolute md:-top-62 -top-35 md:right-1/3 right-1/4 z-10 w-30 md:w-75"
        />
      </div>
      <div className="relative">
        <Image
          src="/programs/female-dancer.svg"
          alt="Decorative Line"
          width={357}
          height={52}
          className="absolute md:-top-70 -top-35  right-1/9 z-10 w-20 md:w-60"
        />
      </div>
      {/* pinkdiv */}
      <div className="relative w-full min-h-[90vh] md:min-h-[120vh] lg:min-h-263 flex items-center justify-center overflow-hidden md:mt-20 z-20">
        <div className="absolute inset-0 z-0 h-full w-full hidden md:block">
          <Image
            src="/programs/pinkbg.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 z-0 md:h-120  h-150  w-full md:hidden">
          <Image
            src="/programs/mobilepinkbg.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-[70%] "
          />
        </div>
        {/* Your content goes here */}

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-[90%] md:w-[80%] lg:w-[84%] mx-auto md:gap-30 ">
          {/* Left Section - Text */}
          <h2 className="text-lg md:text-5xl font-bold text-white  font-ebGaramond md:hidden">
            Gallery of Pattachitra Art
          </h2>
          <h1 className="text-sm md:text-3xl font-semibold text-[#992586] italic  font-ebGaramond md:hidden mb-2">
            Stories in Strokes
          </h1>
          <div className="flex justify-center mt-4 md:mb-15 mb-3">
            <Image
              src="/programs/patchart.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-[150px] sm:w-1/2 md:w-105 shadow-[-14px_14px_6px_rgba(0,0,0,0.5)] "
            />
          </div>

          {/* Right Section - Image with 3D Shadow */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:my-auto">
            <h2 className="text-lg md:text-5xl font-bold text-white  font-ebGaramond md:block hidden">
              Gallery of Pattachitra Art
            </h2>
            <h1 className="text-sm md:text-3xl font-semibold text-[#992586] italic  font-ebGaramond hidden md:block">
              Stories in Strokes
            </h1>
            <p className="text-white text-sm md:text-base md:pt-8 font-ebGaramond text-justify mb-40 md:mb-0 px-6 md:px-0">
              An immersive Heritage Walk, allowing participants to explore
              Puri&apos;s iconic landmarks such as the Jagannath
              Temple, Gundicha Temple, and the vibrant bylanes echoing with
              tales of devotion and tradition.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-0 right-20  z-20 hidden md:block">
          <Image
            src="/programs/illus1.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-3/4 sm:w-1/2 md:w-[200px]  rounded-lg"
          />
        </div>
      </div>
      <div className="relative">
        <Image
          src="/programs/painter.svg"
          alt="Decorative Line"
          width={357}
          height={52}
          className="absolute md:left-60 left-0 md:-top-45 -top-30 z-20 w-50 md:w-120"
        />
      </div>
      {/* blue div */}
      <div className="relative w-full min-h-[90vh] md:min-h-[120vh] lg:min-h-264 flex items-center justify-center overflow-hidden md:mt-18  z-30">
        <div className="absolute inset-0 z-0 h-full w-full hidden md:block">
          <Image
            src="/programs/blue.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 z-0 md:h-120  h-155  w-full md:hidden">
          <Image
            src="/programs/mobilebluebg.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-[70%] "
          />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-[90%] md:w-[80%] lg:w-[85%] mx-auto  md:gap-50">
          {/* Left Section - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left md:mt-14 md:my-auto">
            <h1 className="text-xl md:text-5xl font-bold text-white  font-ebGaramond">
              Tales by the Tide{" "}
            </h1>
            <h2 className="text-sm  font-semibold md:text-3xl text-[#2F3082] italic font-ebGaramond">
              Seaside Storytelling Sessions
            </h2>
            <p className="text-[#000000] text-sm md:text-base pt-12 font-ebGaramond hidden md:block">
              Puri’s serene beaches will serve as the backdrop for enchanting
              storytelling sessions that celebrate the oral and intangible
              traditions of Odisha and beyond. Storytellers and performers will
              share folk tales in an engaging format that blends performance
              with interaction
            </p>
          </div>

          {/* Right Section - Image with 3D Shadow */}
          <div className="w-full flex justify-center mt-4 md:w-1/3 md:my-auto">
            <Image
              src="/programs/tidesimg.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-[150px] sm:w-1/2 md:w-105 shadow-[10px_10px_10px_rgba(0,0,0,0.5)] "
            />
          </div>
          <p className="text-[#000000] text-sm md:text-base pt-12 font-ebGaramond md:hidden text-justify mb-22 px-6">
            Puri&apos;s serene beaches will serve as the backdrop for enchanting
            storytelling sessions that celebrate the oral and intangible
            traditions of Odisha and beyond. Storytellers and performers will
            share folk tales in an engaging format that blends performance with
            interaction
          </p>
        </div>

        <div className="absolute -bottom-65 left-20  z-20">
          <Image
            src="/programs/turtle.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-3/4 sm:w-1/2 md:w-[350px]  rounded-lg"
          />
        </div>
      </div>
      <div className="relative">
        <Image
          src="/programs/dolphin.svg"
          alt="Decorative Line"
          width={357}
          height={52}
          className="absolute right-0 md:-top-40 -top-26 z-30 w-90 md:w-240"
        />
      </div>
      {/* orange */}
      <div className="relative w-full min-h-[110vh] md:min-h-[120vh] lg:min-h-270 flex items-center justify-center overflow-hidden md:mt-20 z-30">
        <div className="absolute inset-0 z-0 h-full w-full hidden md:block">
          <Image
            src="/programs/orange.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 z-0 md:h-120  h-170  w-full md:hidden">
          <Image
            src="/programs/mobileorangebg.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-[70%] "
          />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-[90%] md:w-[80%] lg:w-[85%] mx-auto md:gap-30">
          {/* Left Section - Text */}

          <h2 className="text-lg md:text-5xl font-bold text-white md:hidden">
            Timeless Sands of Odisha
          </h2>
          <h1 className="text-sm md:text-3xl font-semibold text-[#7F1822] italic  font-ebGaramond md:mt-2 md:hidden">
            Baluka Kala
          </h1>

          <div className="w-full flex justify-center mt-4 md:w-1/3 md:my-auto">
            <Image
              src="/programs/sandart.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-[180px] sm:w-1/2 md:w-105 shadow-[-12px_14px_2px_rgba(0,0,0,0.5)] "
            />
          </div>

          {/* Right Section - Image with 3D Shadow */}
          <div className="w-full md:w-1/2 text-center md:text-left md:my-auto font-ebGaramond ">
            <h2 className="text-xl md:text-5xl font-bold text-white hidden md:block">
              Timeless Sands of Odisha
            </h2>
            <h1 className="text-2xl md:text-3xl font-semibold text-[#7F1822] italic  font-ebGaramond md:mt-2 md:block hidden ">
              Baluka Kala
            </h1>

            <p className="text-[#000000] text-sm md:text-lg md:pt-10 font-ebGaramond pt-8 md:mb-0 mb-14 text-justify px-8">
              Renowned sand artists like Sudarshan Patnaik and others will grace
              the festival with their extraordinary talent,
              creating breathtaking sand sculptures that align with the themes
              of literature, heritage of Odisha, and global visions. Visitors
              will have the chance to witness live sand art demonstrations and
              admire a special exhibit of his iconic works, which have garnered
              international acclaim.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-38 right-20  z-20">
          <Image
            src="/programs/shank.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-3/4 sm:w-1/2 md:w-[300px]  rounded-lg"
          />
        </div>
      </div>
      <div className="relative">
        <Image
          src="/programs/sand.svg"
          alt="Decorative Line"
          width={357}
          height={52}
          className="absolute left-0 md:-top-45 -top-28 z-30 w-200 md:w-240"
        />
      </div>
      {/* greensection */}
      <div className="relative w-full min-h-[90vh] md:min-h-[120vh] lg:min-h-[150vh] flex items-center justify-center overflow-hidden md:my-15 z-40">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full w-full hidden md:block">
          <Image
            src="/programs/green.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 z-0 md:h-120  h-150  w-full md:hidden">
          <Image
            src="/programs/mobilegreenbg.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-[70%] "
          />
        </div>
        {/* Content Container */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-[90%] md:w-[80%] lg:w-[88%] mx-auto md:gap-15">
          {/* Left Section - Text */}
          <div className="w-full md:w-2/3 text-center md:text-left my-auto">
            <h1 className="text-xl md:text-5xl font-bold text-white  font-ebGaramond">
              Food Festival
            </h1>
            <h2 className="text-sm md:text-4xl font-semibold   text-[#495B0D] italic  font-ebGaramond">
              Taste of the Odia Cuisine
            </h2>
            <p className="text-[#000000] text-sm md:text-base md:pt-12 font-ebGaramond hidden md:block">
              From the savory flavors of and Pakhala Bhata to the sweet delights
              of Chhena Poda and Rasagola, the festival will be a gastronomic
              journey for food enthusiasts. Live cooking demonstrations will
              showcase the preparation of these iconic dishes, paired with
              stories about their cultural significance.
            </p>
          </div>

          {/* Right Section - Image with 3D Shadow */}
          <div className="flex justify-center my-auto md:pt-0 pt-6 pb-6 md:pb-0">
            <Image
              src="/programs/food.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-[160px] sm:w-1/2 md:w-105 shadow-[13px_14px_8px_rgba(0,0,0,0.5)] "
            />
          </div>
          <p className="text-[#000000] text-sm md:text-base md:pt-12 font-ebGaramond text-justify md:hidden mb-24  px-8">
            From the savory flavors of and Pakhala Bhata to the sweet delights
            of Chhena Poda and Rasagola, the festival will be a gastronomic
            journey for food enthusiasts. Live cooking demonstrations will
            showcase the preparation of these iconic dishes, paired with stories
            about their cultural significance.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
