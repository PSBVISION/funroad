import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";

function Events() {
  return (
    <div className=" md:flex hidden relative h-[100vh] md:h-[140vh]  flex-col md:flex-row md:justify-evenly items-center bg-cover bg-right md:bg-center bg-no-repeat event-bg w-full  px-4  gap-5 md:gap-0">
      {/* Heading */}
      <div className="text-center md:w-1/3 z-10 md:pb-60 md:pr-32">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-[#E90909] font-leckerli">
          Dialogue
          <br />
          Session
        </h1>
      </div>

      {/* Event Cards */}
      <div className="flex w-full md:w-auto justify-between mb-50  md:flex-row gap-2  font-ebGaramond">
        <div className="bg-cover bg-center bg-no-repeat event-red w-[168.3px] md:w-[18.6vw] h-[201px] md:h-[48vh] flex flex-col justify-center items-center px-5">
          <h1 className="text-lg md:text-xl font-bold text-[#FFFCF5] text-center ">
            Agents of Change:
          </h1>
          <p className="py-2 text-sm md:text-base font-medium text-[#FFFCF5] text-center">
            Role of Writers as Social Commentators and Activists
          </p>
        </div>
        <div className="bg-cover bg-center bg-no-repeat event-blue w-[168.3px] md:w-[18.6vw] h-[201px] md:h-[48vh] flex flex-col justify-center items-center px-5">
          <h1 className="text-lg md:text-xl font-bold text-[#FFFCF5] text-center">
            Unveiling the Past:
          </h1>
          <p className="py-2 text-sm md:text-base font-medium text-[#FFFCF5] text-center">
            The Craft and Challenges of Indian History Writing
          </p>
          <Link href="/sessions">
            <IoIosArrowDropright className="absolute top-1/2 right-13 transform translate-x-2 -translate-y-1/2 text-red-500 text-6xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Events;
