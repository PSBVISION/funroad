import { Button } from "./ui/button";
import Link from "next/link";

const Programes = () => {
  return (
    <div className="hidden md:flex min-h-[80vh]  relative w-full flex-col md:flex-row md:justify-end items-end md:items-center  py-16 md:py-0">
      {/* <div className="programs-bg bg-right bg-no-repeat bg-cover absolute left-0 -bottom-133 h-[134vh] w-full md:w-4xl -z-50"></div> */}
      <div className="programs-bg bg-center bg-no-repeat bg-cover -z-50 h-224 w-135 absolute left-10 -bottom-53"></div>
      
      <div className="w-1/2 md:w-2/5 md:mx-25 flex flex-col items-end md:items-center gap-5 px-4 md:px-5 mt-12 mb-44 md:mt-0">
        <h1 className="text-[#D72327] mt-12 pb-8 text-4xl md:text-4xl font-leckerli text-center">Programmes</h1>
        <p className="text-right md:text-center text-xl pb-8   font-ebGaramond  ">
          The Puri Literary Festival 2025 celebrates India&apos;s rich heritage
          through literature, art, and tradition. Set in the spiritual heart of
          Puri, it blends ancient wisdom with modern dialogue, reviving
          Odisha&apos;s cultural legacy through storytelling, folk arts, and
          indigenous crafts.
        </p>
        <Link href="/programs" >
        <Button variant={"destructive"} className="font-leckerli py-6 px-6 text-sm md:text-base hover:cursor-pointer "> View All Programmes</Button>
        </Link>
      </div>
    </div>
  );
};

export default Programes;