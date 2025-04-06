import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

function Footer({ className }: React.ComponentProps<"div">) {
  const socialIcons = [
    { Icon: Facebook, link: "https://www.facebook.com/purilitfest" },
    // { Icon: Twitter, link: "https://x.com/PuriLitFest" },
    { Icon: Instagram, link: "https://www.instagram.com/purilitfest" },
    { Icon: Youtube, link: "https://youtube.com/@purilitfest" },
  ];

  const footerLinks = {
    "About us": [
      { label: "About The Festival", href: "/aboutus" },

      { label: "Terms & Condition", href: "/terms" },
      { label: "FAQs", href: "/faq" },
    ],
    Events: [
      { label: "Brochure", href: "/aboutus" },
      { label: "Programs", href: "/programs" },
    ],
    "Important Links": [
      { label: "Volunteer", href: "https://forms.gle/Btj1d5yy5cs9o5zp8" },
      {
        label: "Partner With Us",
        href: "https://forms.gle/rvxZaKdMdkXy8z5Y9",
      },
    ],
  };

  return (
    <>
      {/* Desktop Footer */}
      <footer
        className={cn(
          "md:block hidden md:h-140 xl:h-180 relative font-ebGaramond z-50",
          className
        )}
      >
        {/* Background wave image */}
        <div className="absolute inset-0 z-10 w-full h-full mx-auto">
          <Image
            src="/footer/footer-wave.svg"
            alt="Footer background wave"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="relative z-10 sm:px-6 md:px-8 sm:pt-18 md:pt-24 lg:pt-34">
          <div className="grid sm:grid-cols-3 md:grid-cols-3">
            {/* Logo & Social Icons */}
            <div className="flex flex-col sm:items-center md:items-center">
              <div className="sm:mt-12 md:mt-6 lg:mt-2">
                <Image
                  src="/mainpage/logo.svg"
                  alt="logo"
                  width={100}
                  height={150}
                  className="sm:w-18 md:w-21 lg:w-30"
                />
              </div>
              <h1 className="sm:text-sm md:text-lg lg:text-xl font-leckerli text-[#FFFCF5] sm:mt-3 md:mt-3 lg:mt-6">
                Connect With US
              </h1>
              <div className="flex sm:space-x-2 md:space-x-1 sm:mt-3 lg:mt-4">
                {socialIcons.map(({ Icon, link }, index) => (
                  <Link
                    key={index}
                    href={link}
                    target="_blank"
                    className="hover:scale-110 transition-transform"
                  >
                    <Icon
                      color="#FFC81E"
                      size={24}
                      className="sm:size-5 md:size-5 lg:size-7"
                    />
                  </Link>
                ))}
                <Link
                  href="https://x.com/PuriLitFest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 256 256"
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    <g
                      fill="#FFC81E"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z"></path>
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid sm:grid-cols-3 sm:col-span-2 sm:gap-2 sm:pt-23 md:pt-22 lg:pt-26">
              {Object.entries(footerLinks).map(([title, links], index) => (
                <div key={index} className="sm:text-left sm:space-y-2">
                  <h2 className="sm:text-lg lg:text-2xl font-leckerli text-[#FFFCF5]">
                    {title}
                  </h2>
                  <ul className="sm:space-y-1">
                    {links.map(({ label, href }, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={href}
                          className="sm:text-xs md:text-sm lg:text-lg text-[#FFFCF5] hover:text-yellow-300 transition-colors"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom pattern */}
        <div className="w-full absolute left-0 bottom-0 z-10">
          <Image
            src={"/footer/footer-pattern.svg"}
            alt="Footer pattern"
            width={500}
            height={300}
            className="w-full"
            priority
          />
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="md:hidden block relative w-full">
        {/* Top Wave Background */}
        <div className="bg-cover bg-no-repeat bg-top footer-waveb h-[25vh] w-full"></div>

        {/* Logo */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex justify-center">
          <Image
            src={"/footer/mobilelogo.png"}
            alt="logo"
            width={100}
            height={100}
            className=" md:hidden w-24 sm:w-28 md:w-32"
          />
        </div>

        {/* Footer Content */}
        <div className="bg-[#2F3081] h-auto py-12 px-6 text-center flex flex-col items-center">
          <h1 className="text-sm font-leckerli text-[#FFFCF5]">
            Connect With Us
          </h1>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            {socialIcons.map(({ Icon, link }, index) => (
              <Link
                key={index}
                href={link}
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <Icon color="#FFC81E" size={24} />
              </Link>
            ))}
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-3 gap-6 mt-6 w-full max-w-sm">
            {Object.entries(footerLinks).map(([title, links], index) => (
              <div key={index} className="space-y-2">
                <h2 className="text-sm font-leckerli text-[#FFFCF5]">
                  {title}
                </h2>
                <ul className="space-y-1">
                  {links.map(({ label, href }, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={href}
                        className="text-xs text-[#FFFCF5] hover:text-yellow-300 transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
