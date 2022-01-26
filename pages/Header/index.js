import React, { useEffect, useState } from "react";
import Image from "next/image";
import MeImage from "../../public/azim.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  console.log(router?.query);
  return (
    <div className="flex flex-col items-center mx-auto justify-start h-full">
      <div className="flex flex-col justify-between h-full ">
        <div className="leading-3 w-16 border-2 rounded-full border-yellow-500 my-10">
          <Image
            className="rounded-full"
            width={70}
            height={70}
            objectFit="cover"
            src={MeImage}
            alt=""
          />
        </div>

        <div className=" text-white text-lg font-semibold space-y-4 ">
          <div className="" onClick={() => setTitle("about")}>
            <span className="text-yellow-500 ">1. </span>{" "}
            <span
              className={title === "about" ? `ml-2 text-yellow-500` : `ml-2`}
            >
              {" "}
              <Link href="#about">About me</Link>{" "}
            </span>{" "}
          </div>
          <div className="" onClick={() => setTitle("work")}>
            <span className="text-yellow-500 ">2. </span>{" "}
            <span
              className={title === "work" ? `ml-2 text-yellow-500` : `ml-2`}
            >
              <Link href="#work">Work</Link>
            </span>{" "}
          </div>
          <div className="" onClick={() => setTitle("contact")}>
            <span className="text-yellow-500 ">3. </span>{" "}
            <span
              className={title === "contact" ? `ml-2 text-yellow-500` : `ml-2`}
            >
              {" "}
              <Link href="#contact">Contact</Link>{" "}
            </span>{" "}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
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
          <div className="border-r-2 mt-4 w-0  h-40"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
