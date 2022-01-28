import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import Work from "./Work";
import About from "./About";
import ContactMe from "./ContactMe";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Home() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    AOS.init({ duration: 1600 });
  });

  return (
    <div className="">
      <Head>
        <title>Protfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex bg-gray-900 min-h-screen lg:h-full xl:h-full">
        <div
          data-aos="fade-right"
          className="w-1/6 bg-gray-900  min-h-screen hidden md:hidden lg:block xl:block"
        >
          <Header setTitle={setTitle} title={title} />
        </div>
        <div className="bg-gray-900  w-full h-sreen relative ">
          <div className="mt-10 md:mt-8 lg:mt-8 xl:mt-8 px-24 ">
            <div
              className="pl-5"
              style={{
                maxHeight: "96vh",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <div id="homepage" className="" style={{ maxHeight: "90vh" }}>
                <HomePage />
              </div>
              <div id="about" className="" style={{ maxHeight: "90vh" }}>
                <About />
              </div>

              <div id="work" className="mt-72" style={{ height: "96vh" }}>
                <Work />
              </div>
              <div id="contact" className="mt-72" style={{ height: "96vh" }}>
                <ContactMe />
              </div>
            </div>

            <div
              className={
                title !== "contact"
                  ? "flex justify-center text-center -mt-32  text-white relative cursor-pointer"
                  : "hidden"
              }
            >
              <Link href="#contact">
                <div className="flex justify-center">
                  <span className="chevron"></span>
                  <span className="chevron"></span>
                  <span className="chevron"></span>
                  <span className="text mt-20  ">Scroll down</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div></div>

        <div className="bg-gray-900 w-1/6  ">
          <form action="mailto:azimcool06@gmail.com">
            {" "}
            <div
              data-aos="fade-down"
              className="mt-10 bg-clip-text cursor-pointer  hidden md:hidden lg:block xl:block text-lg font-semibold text-transparent bg-gradient-to-r  from-yellow-500 to-yellow-700"
            >
              <button type="submit"> azimcool06@gmail.com</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
