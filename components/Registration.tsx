import React from "react";
import Image from "next/image";

const Registration = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 h-100">
      <div className="relative hidden md:block w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
        <Image
          className="pt-10 md:pt-20 lg:pt-40 mx-auto mb-25"
          src="/mobile.svg"
          alt="People walking on smartphone"
          width={450}
          height={450}
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className="w-6/7 md:w-1/2 lg:w-3/5 md:mt-0 mb-10">
        {/* Registration heading with decorative elements */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Image
            src="/shank.svg"
            alt="Decorative element"
            width={60}
            height={150}
            className="w-12 md:w-16 lg:w-20"
          />
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-red-600 font-leckerli">
            Registration
          </h1>
          <Image
            src="/shank.svg"
            alt="Decorative element"
            width={60}
            height={150}
            className="w-12 md:w-16 lg:w-20 scale-x-[-1]"
          />
        </div>

        {/* Registration text */}
        <p className="text-center text-[10px] md:text-lg lg:text-xl px-2 md:px-4 lg:px-24  font-ebGaramond">
          The 2025 edition of the Puri Literary Festival will bring together
          literary icons, cultural historians, and thought leaders for an
          inspiring celebration of India&apos;s heritage and future. Register
          now to be part of this immersive experience from April 18-20 in Puri,
          Odisha, featuring dynamic sessions, cultural performances, heritage
          walks, and interactive workshops that bridge tradition with
          contemporary discourse.
        </p>
      </div>
      <div className="absolute block md:hidden -bottom-20 -left-10">
        <Image
          className="size-52"
          src="/mobile.svg"
          alt="People walking on smartphone"
          width={450}
          height={450}
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className="absolute block md:hidden -bottom-5 right-0 size-25">
        <Image
          src="/activities/flyinggirl.svg"
          alt="Flying Girl"
          width={150}
          height={200}
          className=""
        />
      </div>
    </div>
  );
};

export default Registration;
