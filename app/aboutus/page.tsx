"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Page = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const directors = [
    {
      name: "Omm Priyadarshi",
      surname: "Chotaray",
      image: "/aboutus/ompriyadarshi.png",
      about1: (
        <>
          Traversing across all states and more than
          <span className="font-semibold">6,000 villages</span> in India, Omm
          Priyadarshi has gained deep insights from the country&apos;s
          <span className="font-semibold">
            diverse socio-economic fabric, establishing himself as a
            distinguished voice in development and policy advocacy.
          </span>
        </>
      ),
      about2: (
        <>
          He is the{" "}
          <span className="font-semibold">
            author of Paika: Jana, Akhyana O Andolana,
          </span>{" "}
          and a recipient of the Prime Minister&apos;s Young Author Award.
        </>
      ),
      about3: (
        <>
          He has helped shape policy at both national and global levels, having
          served as the{" "}
          <span className="font-semibold">Treasurer of the G20 Youth</span> and
          represented India at prestigious international platforms, including{" "}
          <span className="font-semibold">BRICS and the Commonwealth</span>.
        </>
      ),
      link: "https://www.instagram.com/iommpriyadarshi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      name: "Shivam",
      surname: "Raghuwanshi",
      image: "/aboutus/sheshankshekhar.png",
      about1: (
        <>
          Shashank Shekhar Singh is at the forefront of transformative thinking
          with his brainchild, the{" "}
          <span className="font-semibold">
            Adhyayan Foundation for Policy & Research (AFPR), which operates at
            the trisection of law, governance, and policymaking.
          </span>
        </>
      ),
      about2: (
        <>
          A lawyer by profession, his expertise in{" "}
          <span className="font-semibold">
            data-driven policymaking, ethical governance, and sustainability
          </span>{" "}
          has made him a sought-after consultant and advisor in India and
          abroad.
        </>
      ),
      about3:
        "He is deeply committed to and actively engages in initiatives that safeguard linguistic heritage and promote cultural continuity",
      link: "https://www.instagram.com/shashank_shekhar_sinh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      name: "shivamraghuwanshi ",
      surname: "shivamraghuwanshi",
      image: "/aboutus/shivamraghuwanshi.png",
      about1:
        "A lawyer advocating for the right causes at the Supreme Court of India, Shivam Raghuwanshi has risen to prominence through his exceptional academic and professional achievements despite his humble background.",
      about2: (
        <>
          He is the author of{" "}
          <span className="font-semibold">two best-selling books,</span> with
          his latest work,{" "}
          <span className="font-semibold">Ballot, Bullet and Blood,</span>{" "}
          receiving significant acclaim.
        </>
      ),
      about3: (
        <>
          In addition to his legal career, he has made notable contributions to
          student leadership, serving as the{" "}
          <span className="font-semibold">
            National Co-convenor of Think India,
          </span>{" "}
          a national organization focused on empowering youth across premier
          academic institutions.
        </>
      ),
      link: "https://www.instagram.com/shivamraghu_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  ];

  const team = [
    {
      name: "mahendr ",
      surname: "singh",
      image: "/aboutus/mahendrasing.png",
      rotation: "2deg",
      instagram:
        " https://www.instagram.com/jnu_mahendra?igsh=MWdzNGhxd3F0c293YQ==",
    },
    {
      name: "Mahendra Singh Sekhala",
      surname: "Sekhala",
      image: "/aboutus/hemathakur.png",
      rotation: "-1.5deg",
      instagram: "", // Replace with actual image path
    },

    {
      name: "Hema",
      surname: "Thakur",
      image: "/aboutus/pradhymnamalpani.png",
      rotation: "-1.5deg",
      instagram:
        "https://www.instagram.com/pradhyumnamalpani?igsh=dzIwa2lrN3JyaWJ",
      // Replace with actual image path
    },
  ];

  const team2 = [
    {
      name: "Pradhumna ",
      surname: "Malpani",
      image: "/aboutus/tejaswisingh.png",
      rotation: "2deg",
      instagram:
        "https://www.instagram.com/tejaswisingh_?igsh=ZmNlMTNta2k4dXJr", // Replace with actual image path
    },
    {
      name: "Mahendra Singh Sekhala",
      surname: "Sekhala",
      image: "/aboutus/mrunmayeeprasadpng.png",
      rotation: "-1.5deg",
      instagram:
        "https://www.instagram.com/mrunmayee_prasad_chitale?igsh=MWUya21ycjFwNmE2eg%3D%3D&utm_source=qr", // Replace with actual image path
    },

    {
      name: "Hema",
      surname: "Thakur",
      image: "/aboutus/pratuyshdebashish.png",
      rotation: "-1.5deg",
      instagram:
        "https://www.instagram.com/inkofpratyush?igsh=MXZ4aDlhbG1lZzljYw==",
      // Replace with actual image path
    },
    {
      name: "Pradhumna ",
      surname: "Malpani",
      image: "/aboutus/awasthihariharan.png",
      rotation: "2deg",
      instagram:
        "https://www.instagram.com/achu.hari_5?igsh=MXU3Mmc4eHV1M3cwaw==", // Replace with actual image path
    },
    {
      name: "Mahendra Singh Sekhala",
      surname: "Sekhala",
      image: "/aboutus/sirisriram.png",
      rotation: "-1.5deg",
      instagram: "https://www.instagram.com/chalk.cheer?igsh=b3dkZXI1a2R6a2ts", // Replace with actual image path
    },

    {
      name: "poojamundadamehta",
      surname: "poojamundadamehta",
      image: "/aboutus/poojamundadamehta.png",
      rotation: "-1.5deg",
      instagram:
        "https://www.instagram.com/__poojamundadamehta?igsh=bWFyczA3a2hkYmhk",
      // Replace with actual image path
    },
    {
      name: "Pradhumna ",
      surname: "Malpani",
      image: "/aboutus/rakeshbarik.png",
      rotation: "2deg",
      instagram: "https://www.instagram.com/rakeshutkal?igsh=M3czcjB1eHUydXRr", // Replace with actual image path
    },
    {
      name: "sumanyakashyap ",
      surname: "sumanyakashyap",
      image: "/aboutus/sumanyakashyap.png",
      rotation: "-1.5deg",
      instagram:
        " https://www.instagram.com/sukanya_sumanya?igsh=MTR6bTNpMW10b2YxdQ==", // Replace with actual image path
    },

    {
      name: "pawansinghbutati",
      surname: "pawansinghbutati",
      image: "/aboutus/pawansinghbutati.png",
      rotation: "-1.5deg",
      instagram:
        "https://www.instagram.com/pawan_singh_butati?igsh=eHE3OTk4NDN0djMy",
      // Replace with actual image path
    },
    {
      name: "ashutosh ",
      surname: "ashutosh",
      image: "/aboutus/ashutosh.png",
      rotation: "2deg",
      instagram: "", // Replace with actual image path
    },
    {
      name: "ridhiverma",
      surname: "ridhiverma",
      image: "/aboutus/ridhiverma.png",
      rotation: "-1.5deg",
      instagram: "", // Replace with actual image path
    },
  ];
  const socialIcons = [
    { Icon: Facebook, link: "https://www.facebook.com/purilitfest" },
    { Icon: Twitter, link: "https://x.com/PuriLitFest" },
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
      { label: "Volunteer", href: "/volunteer" },
      { label: "Partner With Us", href: "/partner" },
    ],
  };
  return (
    <div className="relative overflow-x-hidden pt-22 ">
      {/* Header - Desktop */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="hidden md:flex hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] flex-col items-center justify-start"
      >
        <Image
          src="/mainpage/logo.svg"
          alt="Festival logo"
          width={208}
          height={208}
          className="w-20 h-20 xl:w-52 xl:h-52"
        />
      </motion.div>

      {/* Header - Mobile */}
      <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex items-center justify-center">
        <Image
          src="/centermobilelogo.png"
          alt="Festival logo"
          width={80}
          height={80}
          className="w-20 h-20 object-cover"
        />
      </div>

      {/* Festival Dates */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center font-libreBodoni text-[#D72327] font-bold mb-4 text-base md:text-lg lg:text-xl xl:text-2xl"
      >
        18th APRIL - 20th APRIL <br /> 2025
      </motion.h1>

      {/* About Us Title */}
      <h1 className="font-leckerli font-bold text-3xl md:text-4xl lg:text-5xl text-[#D72327] text-center mt-4 md:mt-8 mb-10 md:mb-0">
        About us
      </h1>

      {/* Decorative Section at Bottom */}
      <div className="relative w-full md:h-[320px] h-[120px] bg-white overflow">
        {/* Left Decorative Image */}
        <Image
          src="/aboutus/wierdanimal.png"
          alt="Left decoration"
          width={390}
          height={520}
          className="absolute left-[-0rem] -bottom-[4.1rem] md:bottom-[-10rem] w-32 md:w-96 z-30"
        />

        {/* Center Decorative Image */}
        <Image
          src="/aboutus/aboutcenter.png"
          alt="Center decoration"
          width={290}
          height={220}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-12 md:bottom-30 w-40 md:w-72 z-10"
        />

        {/* Right Decorative Image (Flipped) */}
        <Image
          src="/aboutus/wierdanimal.png"
          alt="Right decoration"
          width={390}
          height={520}
          className="absolute right-[-0rem] -bottom-[4.1rem] md:bottom-[-10rem] w-32 md:w-96 scale-x-[-1] z-20"
        />
      </div>
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="absolute w-full h-30 md:h-40 lg:h-80 xl:h-110  bg-center bg-cover bg-no-repeat -top-[5%] md:-top-[18%] xl:-top-[30%] z-[-10]"></div>
        {/* Background Image */}
        <Image
          src="/redbgabout.png"
          alt="About Us Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10 hidden md:block "
        />

        {/* Content Wrapper */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative bg-[#D72327] md:bg-transparent  w-full max-w-7xl min-h-screen px-6 md:px-8 lg:px-0 flex flex-col md:flex-row items-center md:items-start md:gap-8 py-20 md:pt-6 my-12 "
        >
          {/* Left Section */}
          <div className="  w-full md:w-1/3 flex flex-col items-center md:items-center md:text-left mt-0 md:mt-[300px] justify-center ">
            <div className=" items-center gap-2 mb-4  md:flex hidden ">
              <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-12 md:w-16 lg:w-10"
              />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center items-center flex">
                Our
              </h1>
              <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-12 md:w-10 lg:w-10 scale-x-[-1]"
              />
            </div>
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center md:block hidden">
              Philosophy
            </h1>

            {/* for mobile */}
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center md:hidden ">
              Our
            </h1>
            <div className=" items-center gap-2 mb-4 md:hidden flex ">
              <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-10 md:w-16 lg:w-10"
              />
              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center">
                Philosophy
              </h1>

              <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-10 md:w-10 lg:w-10 scale-x-[-1]"
              />
            </div>

            <h2 className="text-[#2F3082] md:bg-transparent text-sm md:text-4xl font-semibold md:text-white  text-center md:text-left flex justify-center items-center font-ebGaramond md:mt-2">
              Samavāya
            </h2>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 text-white md:pt-30 pt-8  md:pb-0 pb-8 ">
            <p className="text-xs md:text-[18px]  text-justify font-ebGaramond text-semibold ">
              Set against the serene backdrop of Puri, a city steeped in
              <span className="font-semibold">
                spirituality and heritage,
              </span>{" "}
              the Puri Literary Festival 2025 celebrates India&apos;s enduring
              cultural legacy and its progressive aspirations. Rooted in the
              philosophy of{" "}
              <span className="font-semibold">
                Samavāya —the harmonious coexistence of tradition and modernity
              </span>{" "}
              —the festival seeks to inspire a holistic dialogue that bridges
              India&apos;s ancient wisdom with its contemporary ambitions. The{" "}
              <span className="font-semibold">Puri Literary Festival 2025</span>{" "}
              is an ode to the eternal cyclicity of time and knowledge, a
              harmonious dialogue between the past and the future, inspired by
              the sacred wheels of the{" "}
              <span className="font-semibold">
                Konark Sun Temple and the divine Ratha of Lord Jagannath.
              </span>{" "}
              These wheels symbolize the perpetual motion of life, the ceaseless
              journey of humanity through epochs, and the profound interplay of
              tradition and transformation.
            </p>
            <br />
            <p className="text-xs md:text-[18px]  text-justify font-ebGaramond ">
              Key objectives of the session are to reaffirm Puri&apos;s
              spiritual and cultural legacy and to foster global dialogue with
              an indigenous lens. At its core, the festival embraces the belief
              that India&apos;s timeless wisdom and artistic heritage serve not
              as relics of the past but as guiding lights for the future. It is
              through this lens that the festival seeks to explore how the
              nation can ascend to new{" "}
              <span className="font-semibold">
                {" "}
                pinnacles in art, architecture, literature, and economic
                development
              </span>{" "}
              while remaining deeply rooted in its cultural ethos.
            </p>
            <br />

            <p className="text-xs md:text-[18px]  text-justify font-ebGaramond">
              The festival&apos;s impact will extend far beyond the venue, with
              an outreach program{" "}
              <span className="font-semibold">
                spanning every district of Odisha.
              </span>{" "}
              Events including{" "}
              <span className="font-semibold">
                heritage walks, folk art performances, and discussions on Odia
                literature
              </span>{" "}
              will ensure grassroots participation, rekindling pride in
              Odisha&apos;s traditions. In schools and colleges, workshops and
              storytelling sessions will inspire the youth, while expert-led
              dialogues on{" "}
              <span className="font-semibold">
                {" "}
                environmental sustainability, digital literacy, and cultural
                preservation.
              </span>
            </p>
            <br />
            <p className="text-xs md:text-[18px] text-justify font-ebGaramond ">
              The culmination of these efforts will be a{" "}
              <span className="font-semibold">“Vision for Tomorrow”</span>
              document, encapsulating insights to guide{" "}
              <span className="font-semibold">
                future policy and cultural initiatives.{" "}
              </span>{" "}
              The Puri Literary Festival 2025 promises to be an enriching
              experience that echoes throughout the state, inspiring a deeper
              connection with India&apos;s cultural roots
              <span className="font-semibold">
                {" "}
                while embracing a modern, forward-thinking world.
              </span>
            </p>
          </div>
        </motion.div>

        <div className="absolute bottom-0 ">
          <Image
            src="/centercurved.png"
            alt="Decorative element"
            width={600}
            height={600}
            className="block md:hidden w-full h-44l "
          />
        </div>
      </div>

      {/* text */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="relative flex items-center justify-center min-h-[50vh] md:min-h-[80vh] text-center flex-col overflow-hidden md:z-0 z-10"
      >
        {/* Left Elephant Image */}

        <h1 className="text-[#2F3082] text-xl md:text-4xl font-semibold font-ebGaramond">
          पुरुषोत्तम क्षेत्रं वैकुण्ठस्य सदृशं
        </h1>
        <h1 className="text-xl md:text-4xl font-semibold font-ebGaramond md:pt-8">
          <span className="text-[#D72327] block md:inline font-semibold font-ebGaramond">
            Purushottama kṣhetraṁ Vaikuṇṭhasya sadṛśaṁ
          </span>
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="relative -z-20"
      >
        <Image
          src="/aboutus/leftelephant.svg"
          alt="Decorative element"
          width={390}
          height={520}
          className="absolute -bottom-10 sm:-bottom-7 md:-bottom-15 left-0 z-20 w-24 sm:w-32 md:w-40 lg:w-88 h-auto max-w-none"
        />

        {/* Right Elephant Image (mirrored) */}
        <Image
          src="/aboutus/leftelephant.svg"
          alt="Decorative element"
          width={390}
          height={520}
          className="
        absolute 
        right-0 
        -bottom-15 sm:-bottom-7 md:-bottom-10  
        w-24 sm:w-32 md:w-40 lg:w-88 
        h-auto 
        scale-x-[-1]
        max-w-none
        "
        />
      </motion.div>
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden md:z-60">
        {/* Background Images */}
        <Image
          src="/aboutus/bluebg.png"
          alt="Background"
          layout="fill"
          objectFit="conrain"
          className="hidden md:block absolute inset-0 -z-10"
          priority
        />
        <Image
          src="/mobilefoundingbg2.svg"
          alt="Mobile Background"
          width={200}
          height={200}
          className="block md:hidden absolute inset-0 -z-10 w-full h-full object-cover"
          priority
        />

        {/* Main Content */}
        <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-15 md:py-20 flex flex-col items-center">
          {/* Title */}
          <div className="mb-24 md:mb-0 md:mt-15">
            <div className="flex justify-center items-center gap-2 mb-10 md:mt-25">
              <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-8 sm:w-10 md:w-12 lg:w-16"
              />
              <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-[#D72327] font-leckerli">
                Founding
                <br /> Directors
              </h1>
              <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-8 sm:w-10 md:w-12 lg:w-16 scale-x-[-1]"
              />
            </div>
          </div>
          {/* Director Cards */}
          <div className="flex flex-col w-full px-5 space-y-5 md:space-y-20">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex flex-row items-center justify-between gap-8 md:gap-16 ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-[30%] md:w-[40%] relative aspect-[3/4] max-w-[400px]">
                  <Link href={director.link}>
                    <Image
                      src={director.image}
                      alt={`${director.name} ${director.surname}`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-xl"
                    />
                  </Link>
                </div>

                {/* Text */}
                <div className="w-[70%] md:w-[60%] max-w-3xl text-white text-[10px] md:text-lg font-light font-ebGaramond text-justify md:space-y-4 px-2">
                  {director.about1 && <p>{director.about1}</p>}
                  {director.about2 && <p>{director.about2}</p>}
                  {director.about3 && <p>{director.about3}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Element */}
          <Image
            src="/bookflyingkid.svg"
            alt="Decorative element"
            width={384}
            height={512}
            className="absolute bottom-0 md:-bottom-60 right-0 z-40 w-24 md:w-40 lg:w-52"
          />
        </div>

        {/* Bottom Red Bar */}
        <div className="bg-[#D72327] absolute bottom-0 w-full h-40 -z-30"></div>
      </div>

      <div className="relative bg-[#D72327] min-h-screen overflow-hidden w-full">
        {/* Header with Shanks and Title */}
        <div className="flex justify-center items-center gap-2 mb-8 pt-12">
          <Image
            src="/shank.svg"
            alt="Decorative element"
            width={60}
            height={150}
            className="w-8 sm:w-10 md:w-12 lg:w-16"
          />

          <div className="text-center">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-[#FFC40C] font-leckerli leading-tight mt-10 sm:mt-16 md:mt-20">
              Festival
              <br />
              <span>Co-ordinators</span>
            </h1>
          </div>

          <Image
            src="/shank.svg"
            alt="Decorative element"
            width={60}
            height={150}
            className="w-8 sm:w-10 md:w-12 lg:w-16 scale-x-[-1]"
          />
        </div>

        {/* Floating Illustration */}
        <Image
          src="/bookstackabus.svg"
          alt="Decorative element"
          width={384}
          height={512}
          className="absolute -bottom-20 md:-bottom-40 -left-3 md:left-0 z-20 w-20 sm:w-28 md:w-36"
        />

        {/* Grid Section */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-45 pt-12 mx-auto">
          {team.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex justify-center w-full"
                >
                  <Link
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full max-w-[260px]"
                  >
                    <div className="relative w-[260px] aspect-square md:w-[300px] md:h-[350px] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name} ${member.surname}`}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-xl hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* teams */}

      <div className="relative w-full min-h-[210vh] md:min-h-[280vh] flex items-center justify-center overflow-hidden">
        <div className="bg-[#D72327] absolute top-0 w-full h-200 -z-30"></div>
        {/* Background Image - EDIT: Replace with your actual background image */}
        <Image
          src="/aboutus/yellowbgabout3.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="md:block hidden absolute inset-0 -z-10"
          priority
        />
        <Image
          src="/aboutus/mobileyellowbgabout.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="block md:hidden absolute inset-0 -z-10"
          priority
        />

        {/*  founding director */}
        <div className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-0 py-1 flex flex-col items-center justify-center z-5 pt-0 md:pt-20">
          {/* Founding Title with Decorative Elements */}
          <div className="flex justify-center items-center gap-2 mb-4 mt-0 md:mt-20">
            <Image
              src="/shank.svg"
              alt="Decorative element"
              width={60}
              height={150}
              className="w-8 sm:w-10 md:w-12 lg:w-16"
            />
            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-[#D72327] font-leckerli">
              Team
            </h1>
            <Image
              src="/shank.svg"
              alt="Decorative element"
              width={60}
              height={150}
              className="w-8 sm:w-10 md:w-12 lg:w-16 scale-x-[-1]"
            />
          </div>

          {/* Polaroid-style photo cards */}
          <div className="w-full md:max-w-[1100px] mt-10 mb-45 hidden md:block">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
              {team2
                .slice(0, Math.floor(team2.length / 3) * 3)
                .map((person, index) => (
                  <motion.div
                    key={index}
                    className="relative w-[300px] h-[420px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Link
                      href={person.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={person.image}
                        alt={`${person.name} ${person.surname}`}
                        layout="fill"
                        objectFit="contain"
                        className="hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </motion.div>
                ))}
            </div>

            {/* Last Row (flex only if leftover) */}
            {team2.length % 3 !== 0 && (
              <div className="flex justify-evenly gap-6 md:gap-8 mt-6">
                {team2
                  .slice(Math.floor(team2.length / 3) * 3)
                  .map((person, index) => (
                    <motion.div
                      key={`last-${index}`}
                      className="relative w-[300px] h-[420px]"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Link
                        href={person.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={person.image}
                          alt={`${person.name} ${person.surname}`}
                          layout="fill"
                          objectFit="contain"
                          className="hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                    </motion.div>
                  ))}
              </div>
            )}
          </div>
          <div className="w-full max-w-[800px] mt-0 mb-45 md:hidden block">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
              {team2.map((person, index) => {
                const total = team2.length;
                const itemsInLastRow = total % 3;
                const startOfLastRow = Math.floor(total / 3) * 3;

                const isSingleItemLastRow =
                  itemsInLastRow === 1 && index === total - 1;
                const isTwoItemLastRow =
                  itemsInLastRow === 2 && index >= startOfLastRow;

                return (
                  <motion.div
                    key={index}
                    className={`relative w-full max-w-[260px] aspect-square 
            ${isSingleItemLastRow ? "md:col-span-3 justify-self-center" : ""}
            ${isTwoItemLastRow ? "md:col-span-1" : ""}
          `}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Link
                      href={person.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={person.image}
                        alt={`${person.name} ${person.surname}`}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-xl hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-[#D72327] absolute top-0 w-full h-20 -z-30"></div>
      </div>
      <div className=" z-6 w-full">
        <footer className="md:block hidden md:h-150 xl:h-210 relative  font-ebGaramond  mt-20">
          {/* Background wave image with lower z-index */}
          <div className="absolute inset-0 z-10 w-full h-full mx-auto">
            <Image
              // src="https://ik.imagekit.io/zjaqik2mc/footer/footer-wave.svg?updatedAt=1743490389529"
              src="/footer/footer-wave.svg"
              alt="Footer background wave"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="absolute w-full -top-[65%] flex items-center justify-center h-240  -z-10 ">
            <Image
              src="/aboutus/sunset.svg"
              alt="Background"
              layout="fill"
              objectFit="contain"
              className="md:block hidden absolute inset-0 w-full"
              priority
            />
          </div>

          <div className="relative z-10 sm:px-6 md:px-8 sm:pt-18 md:pt-44 lg:pt-44  ">
            <div className="grid sm:grid-cols-3 md:grid-cols-3">
              {/* Left part logo and icon */}
              <div className="flex flex-col sm:items-center md:items-center">
                <div className="sm:mt-12 md:mt-6 lg:mt-2">
                  <Image
                    // src="https://ik.imagekit.io/zjaqik2mc/homehero/logo.svg?updatedAt=1743486047833"
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
                {/* socialIcons */}
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
                </div>
              </div>

              {/* Right section */}
              <div className="grid sm:grid-cols-3 sm:col-span-2 sm:gap-2 sm:pt-23 md:pt-22 lg:pt-26">
                {Object.entries(footerLinks).map(([title, links], index) => (
                  <div key={index} className="sm:text-left sm:space-y-2">
                    <h2 className="sm:text-lg lg:text-2xl font-leckerli text-[#FFFCF5]">
                      {title}
                    </h2>
                    <ul className="sm:space-y-1">
                      {links.map((link, linkIndex) => (
                        <li
                          key={linkIndex}
                          className="sm:text-xs md:text-sm lg:text-lg text-[#FFFCF5] hover:text-yellow-300 transition-colors cursor-pointer"
                        >
                          {link.href}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom pattern with proper z-index */}
          <div className="w-full absolute left-0 bottom-0 z-10">
            <Image
              // src="https://ik.imagekit.io/zjaqik2mc/footer/footer-pattern.svg?updatedAt=1743490196018"
              src={"/footer/footer-pattern.svg"}
              alt="Footer pattern"
              width={500}
              height={300}
              className="w-full"
              priority
            />
          </div>
        </footer>
        <footer className="md:hidden block relative w-full">
          {/* Top Wave Background */}
          <div className="bg-cover bg-no-repeat bg-top footer-waveb h-[25vh] w-full"></div>

          {/* Logo */}
          <div className="absolute w-full -top-[45%] flex items-center justify-center h-90 -z-10 ">
            <Image
              src="/aboutus/sunset.svg"
              alt="Background"
              layout="fill"
              objectFit="contain"
              className="absolute inset-0 w-full"
              priority
            />
            Punnu
          </div>
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
      </div>
    </div>
  );
};

export default Page;
