"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail } from "lucide-react";

function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isMenuOpen]);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed z-[100] top-0 w-full">
      <footer className="bg-[#D72327] py-2 flex justify-between items-center px-4 md:px-10 w-full">
        {/* <Image
          src="/icons/mail.png"
          alt="phone"
          width={20}
          height={20}/> */}
        <div className="flex space-x-3">
          <Mail className="text-white text-lg flex-cols justify-left size-[15px] md:size-[20px]" />
          <p className="text-white text-[10px]  md:text-sm flex-cols justify-left">
            <Link href="mailto:purliteraryfestival@gmail">
              purliteraryfestival@gmail.com
            </Link>
          </p>{" "}
        </div>
        <div className="flex space-x-3">
          <Link href="https://www.facebook.com/purilitfest">
            <Image
              src="/icons/fb.svg"
              alt="phone"
              width={20}
              height={20}
              className="text-white text-lg cursor-pointer"
            />
          </Link>
          <Link href="https://www.instagram.com/purilitfest">
            <Image
              src="/icons/insta.svg"
              alt="phone"
              width={22}
              height={20}
              className="text-white text-lg cursor-pointer"
            />
          </Link>
          {/* <Link href="https://twitter.com/PuriLitFest">
            <Image
              src="/icons/linkdin.svg"
              alt="phone"
              width={20}
              height={20}
              className="text-white text-lg cursor-pointer"
            />
          </Link> */}
          <Link href="https://youtube.com/@purilitfest">
            <Image
              src="/icons/yt.svg"
              alt="phone"
              width={20}
              height={20}
              className="text-white text-lg cursor-pointer"
            />{" "}
          </Link>
          <Link href="https://x.com/PuriLitFest">
            <Image
              src="/icons/x.svg"
              alt="phone"
              width={20}
              height={20}
              className="text-white text-lg cursor-pointer"
            />
          </Link>
        </div>
      </footer>
      {/* Main Navigation Bar */}
      <div className="h-16 sm:h-16 w-full bg-[#FFC40C] flex items-center justify-between px-4 sm:px-6 lg:px-10 ">
        {/* Logo */}
        <div className="flex items-center  mt-0 sm:mt-12 lg:mt-18 ">
          <Image
            // src="https://ik.imagekit.io/zjaqik2mc/homehero/logo.svg?updatedAt=1743486047833"
            src={"/mainpage/logo.svg"}
            alt="Festival logo"
            width={60}
            height={60}
            className="hidden md:block w-12 md:w-16 lg:w-20 h-auto "
            priority
          />
          <Image
            src="/mobilelogo.png"
            alt="Decorative element"
            width={60}
            height={150}
            className="w-10 sm:w-12 md:hidden"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block flex-1">
          <ul className="flex justify-center items-center space-x-5 lg:space-x-5 xl:space-x-14 text-sm lg:text-base">
            <li className="hover:text-[#D72327] cursor-pointer hover:scale-115">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-[#D72327] cursor-pointer hover:scale-115">
              <Link href={"/partners"}>Partners</Link>
            </li>
            <li className="hover:text-[#D72327] cursor-pointer hover:scale-115">
              <Link href={"/programs"}>Programs</Link>
            </li>
            <li className="hover:text-[#D72327] cursor-pointer hover:scale-115">
              <Link href={"/sessions"}>Sessions</Link>
            </li>
            <li className="hover:text-[#D72327] cursor-pointer hover:scale-115">
              <Link href={"/speakers"}>Speakers</Link>
            </li>
            <li className="hover:text-[#D72327] cursor-pointer hover:scale-115">
              <Link href={"/activities"}>Activities</Link>
            </li>
            <li className="hover:text-[#D72327] cursor-pointer hover:scale-115">
              <Link href={"/aboutus"}>About Us</Link>
            </li>
            {/* <li className="hover:text-[#D72327] cursor-pointer hover:scale-115">
              Contact Us
            </li> */}
          </ul>
        </nav>

        {/* Register Button - Always visible */}
        <div className="hidden md:block">
          <Button
            onClick={() => router.push("/registernow")}
            variant="destructive"
            className="m-0 font-leckerli text-sm lg:text-base cursor-pointer hover:scale-110 transition-transform"
          >
            Register Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-start overflow-y-auto bg-[#FFC40C] pt-16 md:hidden">
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 p-2 rounded-full transition duration-200 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Close navigation menu"
          >
            <X size={24} className="text-black" />
          </button>

          {/* Navigation Menu */}
          <nav className="z-[1000] w-full px-6 py-8">
            <ul className="flex flex-col items-center space-y-6 text-lg">
              {[
                { href: "/", label: "Home" },
                { href: "/partners", label: "Partners" },
                { href: "/programs", label: "Programs" },
                { href: "/sessions", label: "Sessions" },
                { href: "/speakers", label: "Speakers" },
                { href: "/activities", label: "Activities" },
                { href: "/aboutus", label: "About Us" },
                // { href: "/contactus", label: "Contact Us" },
              ].map(({ href, label }) => (
                <li key={href} className="w-full text-center pb-2">
                  <Link
                    href={href}
                    className="block hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* Register Now Button */}
              <li className="w-full flex justify-center pt-4">
                <Button
                  asChild
                  variant="destructive"
                  onClick={closeMenu}
                  className="font-leckerli sm:w-auto cursor-pointer hover:scale-110 transition-transform"
                >
                  <Link href="/registernow">Register Now</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
