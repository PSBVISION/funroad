"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
// Make sure framer-motion is correctly installed in your project
import { motion, useAnimation } from "framer-motion";

export default function Page() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.6 },
    });
  }, [controls]);

  return (
    <div className="relative pt-22 inset-0 overflow-x-hidden">
      {/* Desktop view: hero section with logo and background image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="hidden hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] md:flex md:flex-col items-center justify-start "
      >
        {/* <Image
          src="/partnersDate.svg"
          alt="Festival logo"
          width={127}
          height={52}
          className="object-contain min-w-xl w-120 h-100"
        /> */}
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
      </motion.div>

      {/* Mobile view: hero section with logo and background image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center"
      >
        {/* Logo image */}
        <Image
          src="/centermobilelogo.png"
          alt="Festival logo"
          width={67}
          height={67}
          className="object-cover w-20 "
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={controls}
        className="font-leckerli font-bold text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-[#D72327] text-center md:mt-0 lg:mt-5"
      >
        Partners
      </motion.h1>

      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center items-center mt-5 sm:mt-8 md:mt-10 lg:mt-10 px-6 sm:px-4 md:px-5">
        {/* In Association With Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl"
        >
          <h1 className="font-libreBodoni font-medium text-xl sm:text-2xl text-center py-3 sm:py-5 mt-7 md:mt-0">
            In Association With
          </h1>
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center justify-items-center mt-6 md:mt-0">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-sm sm:text-base md:text-lg"
            >
              <Link href="https://www.india.gov.in/" target="_blank">
                <Image
                  src="/Government_of_India_logo.svg"
                  alt="govt of india "
                  width={150}
                  height={150}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                />
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="https://odisha.gov.in" target="_blank">
                <Image
                  src="/Seal_of_Odisha.svg"
                  alt="odisha seal"
                  width={150}
                  height={150}
                  className="w-22 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-30 lg:h-30"
                />
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center text-sm sm:text-base md:text-lg"
            >
              <Link href="https://www.indiaculture.gov.in/" target="_blank">
                <Image
                  src="/Ministry_of_Culture_India.svg"
                  alt="ministry of culture"
                  width={150}
                  height={150}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                />
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center text-sm sm:text-base md:text-lg"
            >
              <Link href="https://culture.odisha.gov.in/" target="_blank">
                <Image
                  src="/logo1.svg"
                  alt="culture of odisha"
                  width={150}
                  height={150}
                  className="w-21 h-24 sm:w-30 sm:h-32 md:w-34 md:h-36 lg:w-30 lg:h-40"
                />
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center text-sm sm:text-base md:text-lg"
            >
              <Link href="https://ignca.gov.in/" target="_blank">
                <Image
                  src="/IGNCA.svg"
                  alt="ignca"
                  width={150}
                  height={150}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                />
              </Link>
            </motion.li>
          </ul>
        </motion.div>

        {/* Session Partners Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl"
        >
          <h1 className="font-libreBodoni font-medium text-lg sm:text-2xl text-center py-3 sm:py-5">
            Session Partners
          </h1>
          <div>
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-center justify-items-center">
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Link href="https://www.brhat.in" target="_blank">
                  <Image
                    src="/brhat.jpg"
                    alt="Brhat logo"
                    width={170}
                    height={150}
                  />
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href="https://www.isdm.org.in" target="_blank">
                  <Image
                    src="/isdm.jpg"
                    alt="ISDM logo"
                    width={120}
                    height={150}
                  />
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center text-sm sm:text-base md:text-lg"
              >
                <Link href="https://www.celsius.com/" target="_blank">
                  <Image
                    src="/celsius.png"
                    alt="Celsius logo"
                    width={120}
                    height={150}
                  />
                </Link>
              </motion.li>
            </ul>
          </div>
        </motion.div>

        {/* University Partner Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl"
        >
          <h1 className="font-libreBodoni font-medium text-lg sm:text-2xl text-center py-0 sm:py-0">
            University Partner
          </h1>
          <div>
            <ul className="grid grid-cols-1 items-center justify-items-center">
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="https://jgu.edu.in" target="_blank">
                  <Image
                    src="/jindalUni.jpg"
                    alt="Jindal University logo"
                    width={170}
                    height={150}
                  />
                </Link>
              </motion.li>
            </ul>
          </div>
        </motion.div>

        {/* Media Partners Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl md:pb-0 pb-6"
        >
          <h1 className="font-libreBodoni font-medium text-lg sm:text-2xl text-center pb-3 md:pb-10 ">
            Media Partners
          </h1>
          <div className="mb-10 sm:mb-16 md:mb-20 md:mt-4 mt-6">
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-0 items-center justify-items-center">
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Link href="https://www.argusmedia.com/en" target="_blank">
                  <Image
                    src="/argus.jpeg"
                    alt="Argus Media logo"
                    width={100}
                    height={150}
                  />
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href="https://www.prameyaepaper.com" target="_blank">
                  <Image
                    src="/prameya.jpg"
                    alt="Prameya logo"
                    width={150}
                    height={150}
                  />
                </Link>
              </motion.li>
              
            </ul>
          </div>
        </motion.div>



        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl md:pb-0 pb-6"
        >
          <h1 className="font-libreBodoni font-medium text-lg sm:text-2xl text-center pb-3 md:pb-10 ">
           Socail Media Partners
          </h1>
          <div className="mb-10 sm:mb-16 md:mb-20 md:mt-4 mt-6">
            <ul className="grid grid-cols-2 sm:grid-cols-2  items-center justify-items-center">
            
            
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href="https://www.prameyaepaper.com" target="_blank">
                  <Image
                    src="/partners/dottly.png"
                    alt="Prameya logo"
                    width={150}
                    height={150}
                  />
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href="https://www.prameyaepaper.com" target="_blank">
                  <Image
                    src="/partners/OS.png"
                    alt="Prameya logo"
                    width={110}
                    height={150}
                  />
                </Link>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
