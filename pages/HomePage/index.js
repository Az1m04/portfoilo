import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import MeImage from "../../public/azim.jpg";

function HomePage() {
  const sidemenu = ["About", "Work", "Contact"];
  useEffect(() => {
    AOS.init({ duration: 1600 });
  });
  return (
    <div>
      <div className="text-white flex flex-col items-start mt-40 ">
        <div className=" flex items-center -mt-10 mb-10 justify-center text-white text-lg font-semibold space-x-10  visible md:visible lg:hidden xl:hidden w-full ">
          {sidemenu?.map((val, index) => (
            <div className="">
              <span className="text-yellow-500 ">{index + 1}. </span>{" "}
              <span className="ml-2"> {val}</span>{" "}
            </div>
          ))}
        </div>
        <div className="flex justify-between visible md:visible lg:hidden xl:hidden w-full">
          <div className="leading-3 w-14 border-2 rounded-full border-yellow-500 my-10">
            <Image
              className="rounded-full"
              width={50}
              height={50}
              objectFit="cover"
              src={MeImage}
              alt=""
            />
          </div>
          <div
            data-aos="fade-down"
            className="text-right mt-12 w-full mb-10 bg-clip-text  text-lg font-semibold text-transparent bg-gradient-to-r  from-yellow-500 to-yellow-700"
          >
            azimcool06@gmail.com
          </div>
        </div>

        <div data-aos="fade-down" className="text-4xl font-semibold">
          My name is
        </div>
        <div class="text-6xl lg:text-8xl xl:text-8xl  upper mt-2 font-extrabold w-full">
          <div
            data-aos="fade-right"
            class="bg-clip-text  text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700"
          >
            Md Azim Babu
          </div>
          <div
            data-aos="fade-left"
            className="bg-clip-text  text-transparent bg-gradient-to-r from-gray-500 to-gray-700"
          >
            Software Developer
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="text-gray-400  mt-10 lg:mt-28 xl:mt-28 text-xl lg:text-3xl xl:text-3xl font-medium "
        >
          Helping organization to build thier projects.
          <br />
          If you are in search of a person, who can develop your projects.
        </div>
        <div
          data-aos="fade-up"
          className=" mt-10  xl:mt-20 text-2xl  lg:text-2xl xl:text-2xl "
        >
          <Link href="#contact" htmlFor="">
            <button className="transition ease-in-out delay-150 font-semibold text-gray-900  bg-gradient-to-r  from-yellow-500 to-yellow-700 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-700 duration-300 px-6 py-4 rounded-full">
              Hire me
            </button>
          </Link>
        </div>
        <div className="flex  items-center mt-14  justify-items-end w-full space-x-6 visible md:visible lg:hidden xl:hidden">
          <div className="border-b-2  w-40"></div>
          <div className=" h-8 w-8 rounded-full hover:bg-yellow-500">
            <Link href="https://github.com/Az1m04">
              <img src="https://img.icons8.com/material-outlined/40/ffffff/github.png" />
            </Link>
          </div>
          <div className="h-8 w-8 rounded-full hover:bg-yellow-500">
            <Link href="https://www.linkedin.com/in/mdazimbabu/">
              <img
                className="p-1"
                src="https://img.icons8.com/ios-glyphs/36/ffffff/linkedin-2--v1.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
