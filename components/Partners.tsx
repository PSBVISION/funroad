// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const partnerLogos = [
//   { src: "/Government_of_India_logo.svg", width: 150, height: 100 },
//   { src: "/logo2.svg", width: 100, height: 60 },
//   { src: "/Ministry_of_Culture_India.svg", width: 130, height: 85 },
//   { src: "/logo1.svg", width: 100, height: 70 },
//   { src: "/IGNCA.svg", width: 140, height: 90 },
//   { src: "/brhat.jpg", width: 170, height: 100 },
//   { src: "/isdm.jpg", width: 120, height: 85 },
//   { src: "/jindalUni.jpg", width: 180, height: 80 },
//   { src: "/argus.jpg", width: 90, height: 75 },
//   { src: "/prameya.jpg", width: 145, height: 90 },
//   { src: "/celsius.png", width: 140, height: 85 },
// ];

// const Partners: React.FC = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
//       className="flex flex-col items-center min-h-[30vh] md:min-h-[70vh] justify-center gap-10 md:gap-15 px-4 sm:px-6 lg:px-8 py-12"
//     >
//       <h1 className="md:block text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-leckerli text-[#FF0707]">
//         <Link href="./partners">Partners</Link>
//       </h1>

//       {/* Marquee Effect */}
//       <div className="w-full max-w-7xl overflow-hidden relative">
//         <div className="flex whitespace-nowrap animate-marquee">
//           {[...partnerLogos, ...partnerLogos].map((logo, index) => (
//             <div
//               key={index}
//               className="inline-flex justify-center items-center px-6"
//               style={{ minWidth: logo.width }}
//             >
//               <Image
//                 src={logo.src}
//                 alt={`Partner logo ${index + 1}`}
//                 width={logo.width}
//                 height={logo.height}
//                 className="h-auto object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Tailwind CSS Animation */}
//       <style jsx>{`
//         @keyframes marquee {
//           from {
//             transform: translateX(0%);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           display: flex;
//           width: max-content;
//           animation: marquee 20s linear infinite;
//         }
//       `}</style>
//     </motion.div>
//   );
// };

// export default Partners;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const partnerLogos = [
  {
    src: "/Government_of_India_logo.svg",
    width: 150,
    height: 100,
    link: "https://www.india.gov.in/",
  },
  {
    src: "/Seal_of_Odisha.svg",
    width: 100,
    height: 60,
    link: "https://odisha.gov.in",
  },
  {
    src: "/Ministry_of_Culture_India.svg",
    width: 130,
    height: 85,
    link: "https://www.indiaculture.gov.in/",
  },
  {
    src: "/logo1.svg",
    width: 100,
    height: 70,
    link: "https://culture.odisha.gov.in/",
  },
  { src: "/IGNCA.svg", width: 140, height: 90, link: "https://ignca.gov.in/" },
  { src: "/brhat.jpg", width: 170, height: 100, link: "https://www.brhat.in" },
  { src: "/isdm.jpg", width: 120, height: 85, link: "https://www.isdm.org.in" },
  { src: "/jindalUni.jpg", width: 180, height: 80, link: "https://jgu.edu.in" },
  {
    src: "/argus.jpeg",
    width: 90,
    height: 75,
    link: "https://www.argusmedia.com/en",
  },
  {
    src: "/prameya.jpg",
    width: 145,
    height: 90,
    link: "https://www.prameyaepaper.com",
  },
  {
    src: "/celsius.png",
    width: 140,
    height: 85,
    link: "https://www.celsius.com/",
  },
  {
    src: "/partners/dottly.png",
    width: 140,
    height: 85,
    link: "https://www.celsius.com/",
  },
  {
    src: "/partners/OS.png",
    width: 140,
    height: 85,
    link: "https://www.celsius.com/",
  },
];

const Partners: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
      className="flex flex-col items-center min-h-[30vh] md:min-h-[70vh] justify-center gap-10 md:gap-15 px-4 sm:px-6 lg:px-8 py-12"
    >
      <h1 className="md:block text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-leckerli text-[#FF0707]">
        <Link href="./partners">Partners</Link>
      </h1>

      {/* Marquee Effect */}
      <div className="w-full max-w-7xl overflow-hidden relative group">
        <div className="flex whitespace-nowrap animate-marquee group-hover:paused">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={index}
              className="inline-flex justify-center items-center px-6"
              style={{ minWidth: logo.width }}
            >
              <Link href={logo.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={logo.src}
                  alt={`Partner logo ${index + 1}`}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        .group-hover\\:paused {
          animation-play-state: paused;
        }
      `}</style>
    </motion.div>
  );
};

export default Partners;
