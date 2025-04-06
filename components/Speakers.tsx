import React from "react";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";

function Speakers() {
  const speakerPositions = [
    { position: "absolute bottom-70 left-0", size: "w-25 md:w-20 " },
    { position: "absolute top-2 right-0", size: "w-25 md:w-20" },
    { position: "absolute bottom-2 left-0", size: "w-25 md:w-20 " },
    { position: "absolute top-80 right-0", size: "w-25 md:w-24 " },
  ];
  const speakers = [
    {
      name: "Sh. Gajendra Singh Shekhawat",
      position: "Union Minister of Culture and Tourism, ",
      position1:"Government of India.",
      image: "/Sh. Gajendra Singh Shekhawat.svg",
    },
    {
      name: "Sh. Sarbananda Sonowal",
      position: "Union Minister of Ports,",
      position1:" Shipping & Waterways, Government of India.",
      image: "/Sarvanand Sonowal Ji’s.svg",
    },
    {
      name: "Sh. Dharmendra Pradhan",
      position: "Union Minister of Education,",
      position1:" Government of India.",
      image: "/Sh. Dharmendra Pradhan.svg",
    },

    {
      name: "Sh. Shashi Tharoor",
      position: "MP for Thiruvananthapuram,",
      position1:" Ex Minister of State , Government of India",
      image: "/shashitharoor.svg",
    },
  ];

  const mobilespeakers = [
    {
      name: "Sh. Gajendra Singh Shekhawat",
      position: "Union Minister of Culture and Tourism, Government of India.",
      image: "/Sh. Gajendra Singh Shekhawat.svg",
    },
    {
      name: "Sh. Sarvanand Sonowal",
      position: "Minister of Ports, Shipping & Waterways, Government of India.",
      image: "/Sarvanand Sonowal Ji’s.svg",
    },
    {
      name: "Sh. Dharmendra Pradhan",
      position: "Minister of Education, Government of India.",
      image: "/Sh. Dharmendra Pradhan.svg",
    },
  ];

  return (
    <>
      <div className=" md:flex hidden speaker-bg bg-no-repeat bg-cover bg-top min-h-[120vh] md:h-[150vh]  flex-col md:flex-row justify-center items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
        {/* Yellow Background Circle - Mobile Hidden */}
        <div className="hidden md:block h-48 w-48 lg:h-80 lg:w-80 bg-[#FFEC8C] rounded-full absolute top-4 left-1/6 -z-10"></div>

        {/* Woman Illustration - Now Visible on Mobile */}
        <Image
          src="/woman.svg"
          alt="woman illustration"
          width={200}
          height={200}
          className="absolute top-16 md:-top-4 left-1/6 z-50 w-38 lg:w-80 block md:block"
        />

        {/* Title Section */}
        <div className="text-center md:w-1/3 z-10 md:mt-0 mt-34 mb-10 md:mb-0">
          <h1 className="text-xl sm:text-4xl md:p-0 pt-10 md:text-4xl lg:text-4xl text-[#E90909] font-leckerli">
            Puri Lit Fest&apos;s
            <br />
            Speakers
          </h1>
        </div>

        {/* Mobile Specific Layout */}
        <div className="block md:hidden w-full max-w-xs mx-auto relative h-[80vh] md:mt-8 mt-0 mb-5">
          {/* Speakers Layout for Mobile */}
          <div className="grid grid-cols-2 gap-4 absolute inset-0 -space-y-28 ">
            {speakers.map((speaker, index) => (
              <div
                key={`mobile-speaker-${index}`}
                className="flex flex-col items-center"
              >
                <div className="  overflow-hidden ">
                  <Image
                    src={speaker.image}
                    alt={speaker.name.toLowerCase()}
                    width={100}
                    height={100}
                    className="w-lg h-auto"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-white text-sm font-medium  font-ebGaramond">
                    {speaker.name}
                  </h1>
                  <p> </p>
                  <p className="text-white text-xs  font-ebGaramond">
                    {speaker.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Existing Desktop Layout */}
        {/* Desktop Layout */}
        <div className="hidden md:block relative w-lg h-[60vh] lg:h-[80vh] mx-20">
          {speakers.map((speaker, index) => (
            <div
              key={`desktop-speaker-${index}`}
              className={`${speakerPositions[index].position} ${speakerPositions[index]} w-2/5 transition-transform duration-300 hover:scale-105`}
            >
              <div className=" overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name.toLowerCase()}
                  width={150}
                  height={150}
                  className="w-full h-auto rounded-xl "
                />
                <div className="text-center">
                  <h3 className="text-[#FFFCF5] font-semibold text-sm pt-2  font-ebGaramond">
                    {speaker.name}
                  </h3>
                  <p className="text-[#FFFCF5] text-xs  font-ebGaramond">
                    {speaker.position}
                  </p>
                  <p className="text-[#FFFCF5] text-xs  font-ebGaramond">
                    {speaker.position1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/speakers">
          <IoIosArrowDropright className="absolute top-1/2  right-19 transform translate-x-2 -translate-y-1/2 text-red-500 text-6xl" />
        </Link>
      </div>

      <div className="md:hidden relative min-h-[60vh] md:h-[150vh] flex flex-col md:flex-row justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
        {/* Background Image for Mobile Only */}
        <div className="absolute top-0 left-0 w-full h-full md:hidden">
          <Image
            src="/darkbluebgabout.png"
            alt="darkbluebgabout"
            width={768}
            height={1024}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Your Content Here */}
        <div className="z-10 absolute w-full flex justify-center">
          <div className="block md:hidden w-full max-w-lg mx-auto relative">
            {/* Title */}
            <h2 className="text-yellow-400 text-center text-xl font-bold mb-4 font-leckerli">
              Puri Lit Fest&apos;s <br /> Speakers
            </h2>

            {/* Speakers Layout */}
            <div className="grid grid-cols-3  justify-items-center mx-10">
              {mobilespeakers.map((mobilespeaker, index) => (
                <div
                  key={`mobile-speaker-${index}`}
                  className="flex flex-col items-center  space-y-2 gap-2 "
                >
                  {/* Speaker Image with Decorative Frame */}
                  <div className="relative shadow-lg">
                    <Image
                      src={mobilespeaker.image}
                      alt={mobilespeaker.name.toLowerCase()}
                      width={120}
                      height={120}
                      className="w-22 h-22 object-cover rounded-lg"
                    />
                  </div>

                  {/* Speaker Details */}
                  <div className="text-center">
                    <h1 className="text-white text-[9px] font-semibold">
                      {mobilespeaker.name}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
              <Link href="/speakers">
                <Image
                  src="/mobileyellowarrow2.svg"
                  width={50}
                  height={50}
                  className="w-full h-auto"
                  alt="border decoration"
                />
              </Link>
            </div>
            <div className="absolute top-0 right-0 transform -translate-x-0 -translate-y-28">
              <Image
                src="/mobilebookstack.svg"
                width={50}
                height={50}
                className="w-full h-auto"
                alt="border decoration"
              />
            </div>
            <div className="absolute top-0 left-0 transform -translate-x-0 -translate-y-28">
              <Image
                src="/girlandbookillus.png"
                width={50}
                height={50}
                className="w-full h-auto"
                alt="border decoration"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Speakers;
