// import Image from "next/image";
// import { Button } from "./ui/button";

// export default function Hero() {
//   return (
//     <div className="relative w-full  ">
//      <Image
//   className="w-full h-[11vh] md:h-[23vh] lg:h-[38vh] xl:h-[44vh] 2xl:h-[48vh]
//             hidden md:block
//             mt-0 md:mt-1z lg:mt-7 xl:mt-1"
//   src="/hero-bg1.svg"
//   alt="Decorative background"
//   width={1200}
//   height={600}
//   priority
//   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
// />
//       {/* <Image
//         className="w-full h-[30vh] md:hidden "
//         src="/Vector1.svg"
//         alt="Decorative background"
//         width={600}
//         height={250}
//         sizes=""
//       /> */}

//       {/* Center logo */}
//       <h1 className="md:block hidden absolute text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                md:text-sm md:top-40 md:mt-6
//                lg:text-lg lg:top-50 lg:mt-8
//                xl:text-xl xl:top-53 xl:mt-10
//                2xl:text-2xl 2xl:top-70 2xl:mt-12">
//   18th APRIL - 20th APRIL 2025
//   <br />
//   <span className="font-libreCaslon
//                    md:text-lg
//                    lg:text-xl
//                    xl:text-2xl
//                    2xl:text-3xl">
//     Taj Hotels, Puri
//   </span>
// </h1>
//      {/*   <h1 className="md:hidden absolute text-sm -mt-6 left-1/2 transform -translate-x-1/2 translate-y-3/6 text-center">
//         18th APRIL - 20th APRIL 2025
//         <br />
//         <span className="text-xl">Taj Hotels, Puri</span>
//       </h1>
//       <h1 className="text-red-600 md:hidden  absolute text-2xl translate-2/3 mt-8 transform  left-1/2 -translate-x-1/2 text-center font-libreBodoni">
//         CELEBRATING
//         <span>
//           <br />
//           BOOKS & IDEAS
//         </span>
//       </h1>

//       <Button
//         variant="destructive"
//         className="fixed z-100 md:hidden -left-10 top-1/2 transform -translate-y-1/2 -rotate-90 m-0 font-leckerli px-3 py-2"
//       >
//         Register Now&nbsp;
//       </Button>  */}

//       <div
//         className="absolute top-16 left-1/2 transform -translate-x-1/2
//         md:top-11 lg:top-14 xl:top-19
//         md:-translate-y-1/4
//         h-[30vh] md:h-[25vh] lg:h-[20vh] xl:h-[15vh]
//         w-[18.5vw] md:w-[8.8vw] lg:w-[7vw] xl:w-[5.5vw]"
//       >
//         <div>
//           <Image
//             src="/logo.svg"
//             alt="Festival logo"
//             width={127}
//             height={52}
//             className="object-cover w-full md:block hidden"
//             priority
//           />
//           {/* <Image
//             src="/centermobilelogo.png"
//             alt="Festival logo"
//             width={127}
//             height={122}
//             className="object-cover w-full md:hidden"
//             priority
//           /> */}
//         </div>
//       </div>
//       <div className="relative hidden md:block z-10 hero-temple bg-center bg-cover bg-no-repeat
//                 md:mt-20 lg:mt-0 xl:mt-0 2xl:mt-0 mt-0  md:h-[90vh]
//                 lg:h-[94vh]
//                 xl:h-[90vh]
//                 2xl:h-[90vh]">
// </div>
//       {/* <div className="mt-50 md:hidden">
//         <Image
//           src="/mobileherobg.png"
//           alt="Festival logo"
//           width={127}
//           height={52}
//           className="object-cover w-full md:hidden"
//           priority
//         />
//       </div> */}

//       <div className="absolute md:block hidden bottom-0 left-0 right-0 bg-[#D72327] h-12 md:h-16 lg:h-28 xl:h-40"></div>
//     </div>
//   );
// }

// import React from "react";
// import Image from "next/image";

// function Hero() {
//   return (
//     <div className="relative pt-15 inset-0  md:bg-transparent bg-[#FFFCF5]">
//       {/* Desktop View */}
//       <div className="hidden hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] md:flex md:flex-col items-center justify-start">
//         <div className="flex justify-center items-center">
//           <Image
//             className="size-30 xl:size-52"
//             src="/mainpage/logo.svg"
//             alt="Festival logo"
//             width={127}
//             height={52}
//           />
//         </div>
//         <h1 className="text-center font-libreBodoni md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-[#D72327] font-bold">
//           18th APRIL - 20th APRIL <br /> 2025
//         </h1>
//         <Image
//           src="/tajLogo.svg"
//           alt="taj logo"
//           width={127}
//           height={52}
//           className="object-contain ml-5 size-25 xl:size-42"
//         />
//       </div>
//       <div className=" hero-temple-img bg-center bg-cover bg-no-repeat h-[95vh] hidden md:block "></div>
//       {/* Mobile View */}
//       <div className="  md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex justify-center items-center">
//         <Image
//           src="/centermobilelogo.png"
//           alt="Festival logo"
//           width={67}
//           height={52}
//           className="object-cover full"
//         />
//       </div>
//       <div className="md:hidden block">
//         <h1 className="text-center font-libreBodoni text-[#D72327] md:text-sm lg:text-lg">
//           18th APRIL - 20th APRIL 2025
//         </h1>
//         <Image
//           src="/tajLogo.svg"
//           alt="taj logo"
//           width={127}
//           height={52}
//           className="object-contain mx-auto -my-5 size-25 xl:size-42"
//         />
//         <p className="text-center font-libreBodoni text-xl py-8 text-[#D72327] w-3/4 mx-auto">
//           <span className="text-[#2F3082]">Weaving Stories of</span>
//           <span className="text-[#D72327]">
//             <br />
//             Tradition,
//           </span>
//           <br /> <span className="text-[#F5C721]">Transformation,</span>
//           <span className="text-[#2F3082]">&</span>
//           <br />
//           <span className="text-[#3E8D19]">Triumph!</span>
//         </p>
//       </div>
//       <div className="md:hidden hero-temple-mobile bg-center bg-cover bg-no-repeat h-70  z-2 "></div>
//       <div className="bg-[#D72327] h-40 w-full absolute bottom-0 -z-20"></div>
//     </div>
//   );
// }

// export default Hero;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative pt-23 inset-0  md:bg-transparent bg-[#FFFCF5]"
    >
      {/* Desktop View */}
      <div className="hidden hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] md:flex md:flex-col items-center justify-start">
        <div className="flex justify-center items-center">
          <Image
            className="size-30 xl:size-52"
            // src="https://ik.imagekit.io/zjaqik2mc/homehero/logo.svg?updatedAt=1743486047833"
            src="/mainpage/logo.svg"
            alt="Festival logo"
            width={127}
            height={52}
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center font-libreBodoni md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-[#D72327] font-bold"
        >
          18th APRIL - 20th APRIL <br /> 2025
        </motion.h1>
        {/* <Image
          // src="https://ik.imagekit.io/zjaqik2mc/homehero/tajLogo.svg?updatedAt=1743486468570"
          src="/mainpage/tajLogo.svg"
          alt="taj logo"
          width={127}
          height={52}
          className="object-contain ml-5 size-25 xl:size-42"
        /> */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center font-ebGaramond md:text-sm lg:text-2lg xl:text-4xl 2xl:text-6xl text-[#B9975A]  mb-2 "
        >
          TAJ
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center font-ebGaramond md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-[#B9975A]  "
        >
          PURI RESORT & SPA, ODISHA
        </motion.h1>
      </div>
      <div className=" hero-temple-img bg-center bg-cover bg-no-repeat h-[95vh] hidden md:block mt-12 "></div>
      {/* Mobile View */}
      <div className="  md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex justify-center items-center">
        <Image
          src="/mobilecenterlogo2.svg"
          alt="Festival logo"
          width={80}
          height={52}
          className="object-cover full"
        />
      </div>
      <div className="md:hidden block">
        <h1 className="text-center font-libreBodoni text-[#D72327] md:text-sm lg:text-lg">
          18th APRIL - 20th APRIL 2025
        </h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl font-ebGaramond md:text-sm lg:text-2lg xl:text-4xl 2xl:text-6xl text-[#B9975A]  mb-2 "
        >
          TAJ
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center font-ebGaramond md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-[#B9975A]  "
        >
          PURI RESORT & SPA, ODISHA
        </motion.h1>

        {/* <Image
          // src="https://ik.imagekit.io/zjaqik2mc/homehero/tajLogo.svg?updatedAt=1743486468570"
          src="/mainpage/tajLogo.svg"
          alt="taj logo"
          width={127}
          height={52}
          className="object-contain mx-auto -my-5 size-25 xl:size-42"
        /> */}

        <p className="text-center font-libreBodoni text-xl py-4 text-[#D72327] w-3/4 mx-auto">
          <span className="text-[#2F3082]">Weaving Stories of</span>
          <span className="text-[#D72327]">
            <br />
            Tradition,
          </span>
          <br /> <span className="text-[#F5C721]">Transformation,</span>
          <span className="text-[#2F3082]">&</span>
          <br />
          <span className="text-[#3E8D19]">Triumph!</span>
        </p>
      </div>
      <div className="md:hidden hero-temple-mobile bg-center bg-cover bg-no-repeat h-70  z-2 "></div>
      <div className="bg-[#D72327] h-40 w-full absolute bottom-0 -z-20"></div>
    </motion.div>
  );
}

export default Hero;
