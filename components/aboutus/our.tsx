// import React from 'react'
// import Image from "next/image";
// import { motion } from "framer-motion";

// const our = () => {
//     const fadeIn = {
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { duration: 1.5 } },
//       };
      
//   return (
//     <div className="relative w-full flex flex-col items-center justify-center">
//     <div className="absolute w-full h-30 md:h-40 lg:h-80 xl:h-110  bg-center bg-cover bg-no-repeat -top-[5%] md:-top-[18%] xl:-top-[30%] z-[-10]"></div>
//     {/* Background Image */}
//     <Image
//       src="/redbgabout.png"
//       alt="About Us Background"
//       layout="fill"
//       objectFit="cover"
//       className="absolute inset-0 -z-10 hidden md:block "
//     />

//     {/* Content Wrapper */}
//     <motion.div
//       variants={fadeIn}
//       initial="hidden"
//       animate="visible"
//       className="relative bg-[#D72327] md:bg-transparent  w-full max-w-7xl min-h-screen px-6 md:px-8 lg:px-0 flex flex-col md:flex-row items-center md:items-start md:gap-8 py-20 md:pt-6 my-12 "
//     >
//       {/* Left Section */}
//       <div className="  w-full md:w-1/3 flex flex-col items-center md:items-center md:text-left mt-0 md:mt-[300px] justify-center ">
//         <div className=" items-center gap-2 mb-4  md:flex hidden ">
//           <Image
//                   src="/shank.svg"
//                   alt="Decorative element"
//                   width={60}
//                   height={150}
//                   className="w-12 md:w-16 lg:w-10"
//                 />
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center items-center flex">
//             Our
//           </h1>
//           <Image
//                   src="/shank.svg"
//                   alt="Decorative element"
//                   width={60}
//                   height={150}
//                   className="w-12 md:w-10 lg:w-10 scale-x-[-1]"
//                 />
//         </div>
//         <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center md:block hidden">
//           Philosophy
//         </h1>

//         {/* for mobile */}
//         <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center md:hidden ">
//           Our
//         </h1>
//         <div className=" items-center gap-2 mb-4 md:hidden flex ">
//           <Image
//             src="/shank.svg"
//             alt="Decorative element"
//             width={60}
//             height={150}
//             className="w-10 md:w-16 lg:w-10"
//           />
//           <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center">
//             Philosophy
//           </h1>

//           <Image
//             src="/shank.svg"
//             alt="Decorative element"
//             width={60}
//             height={150}
//             className="w-10 md:w-10 lg:w-10 scale-x-[-1]"
//           />
//         </div>

//         <h2 className="text-[#2F3082] md:bg-transparent text-sm md:text-4xl font-semibold md:text-white  text-center md:text-left flex justify-center items-center font-ebGaramond md:mt-2">
//           Samavāya
//         </h2>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-2/3 text-white md:pt-30 pt-8  md:pb-0 pb-8 ">
//         <p className="text-xs md:text-[18px]  text-justify font-ebGaramond text-semibold ">
//           Set against the serene backdrop of Puri, a city steeped in
//           <span className="font-semibold">
//             spirituality and heritage,
//           </span>{" "}
//           the Puri Literary Festival 2025 celebrates India&apos;s enduring
//           cultural legacy and its progressive aspirations. Rooted in the
//           philosophy of{" "}
//           <span className="font-semibold">
//             Samavāya —the harmonious coexistence of tradition and modernity
//           </span>{" "}
//           —the festival seeks to inspire a holistic dialogue that bridges
//           India&apos;s ancient wisdom with its contemporary ambitions. The{" "}
//           <span className="font-semibold">Puri Literary Festival 2025</span>{" "}
//           is an ode to the eternal cyclicity of time and knowledge, a
//           harmonious dialogue between the past and the future, inspired by
//           the sacred wheels of the{" "}
//           <span className="font-semibold">
//             Konark Sun Temple and the divine Ratha of Lord Jagannath.
//           </span>{" "}
//           These wheels symbolize the perpetual motion of life, the ceaseless
//           journey of humanity through epochs, and the profound interplay of
//           tradition and transformation.
//         </p>
//         <br />
//         <p className="text-xs md:text-[18px]  text-justify font-ebGaramond ">
//           Key objectives of the session are to reaffirm Puri&apos;s
//           spiritual and cultural legacy and to foster global dialogue with
//           an indigenous lens. At its core, the festival embraces the belief
//           that India&apos;s timeless wisdom and artistic heritage serve not
//           as relics of the past but as guiding lights for the future. It is
//           through this lens that the festival seeks to explore how the
//           nation can ascend to new{" "}
//           <span className="font-semibold">
//             {" "}
//             pinnacles in art, architecture, literature, and economic
//             development
//           </span>{" "}
//           while remaining deeply rooted in its cultural ethos.
//         </p>
//         <br />

//         <p className="text-xs md:text-[18px]  text-justify font-ebGaramond">
//           The festival&apos;s impact will extend far beyond the venue, with
//           an outreach program{" "}
//           <span className="font-semibold">
//             spanning every district of Odisha.
//           </span>{" "}
//           Events including{" "}
//           <span className="font-semibold">
//             heritage walks, folk art performances, and discussions on Odia
//             literature
//           </span>{" "}
//           will ensure grassroots participation, rekindling pride in
//           Odisha&apos;s traditions. In schools and colleges, workshops and
//           storytelling sessions will inspire the youth, while expert-led
//           dialogues on{" "}
//           <span className="font-semibold">
//             {" "}
//             environmental sustainability, digital literacy, and cultural
//             preservation.
//           </span>
//         </p>
//         <br />
//         <p className="text-xs md:text-[18px] text-justify font-ebGaramond ">
//           The culmination of these efforts will be a{" "}
//           <span className="font-semibold">“Vision for Tomorrow”</span>
//           document, encapsulating insights to guide{" "}
//           <span className="font-semibold">
//             future policy and cultural initiatives.{" "}
//           </span>{" "}
//           The Puri Literary Festival 2025 promises to be an enriching
//           experience that echoes throughout the state, inspiring a deeper
//           connection with India&apos;s cultural roots
//           <span className="font-semibold">
//             {" "}
//             while embracing a modern, forward-thinking world.
//           </span>
//         </p>
//       </div>
//     </motion.div>

//     <div className="absolute bottom-0 ">
//       <Image
//         src="/centercurved.png"
//         alt="Decorative element"
//         width={600}
//         height={600}
//         className="block md:hidden w-ful h-44l "
//       />
//     </div>
//   </div>
//   )
// }

// export default our
