import Image from "next/image";
import React from "react";
import Contact from "../../public/contact.png"

function ContactMe() {
  return (
    <div className="text-white">
      <div className="text-6xl font-bold bg-clip-text  text-transparent bg-gradient-to-r from-gray-500 to-gray-700">
        Contact
      </div>
      <div className="w-full flex justify-between mt-24">
      <div className="w-full flex items-end hidden lg:hidden xl:block ">
        <Image height={700} src={Contact} objectFit="contain" alt=""/>
      </div>
        <div className=" xl:w-2/3  my-10 bg-gradient-to-r from-gray-700 to-gray-900  p-5 rounded-md shadow-xl">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-yellow-600 ">
              Contact me
            </h1>
            <p className="text-gray-300 text-lg">
              Fill up the form below to send us a message.
            </p>
          </div>
          <div className="m-7">
            <form action="mailto:azimcool06@gmail.com" method="POST" enctype="multipart/form-data" id="form">
            

              <div className="mb-6">
                <label
                  for="name"
                  className="block mb-2  text-gray-400 text-base "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring   bg-gray-700 placeholder-gray-500 border-gray-600 focus:ring-yellow-600 focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <label
                  for="email"
                  className="block mb-2 text-base text-gray-400 "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring   bg-gray-700 placeholder-gray-500 border-gray-600 focus:ring-yellow-600 focus:border-gray-500"
                />
              </div>

              <div className="mb-6">
                <label
                  for="message"
                  className="block mb-2 text-base text-gray-400 "
                >
                  Your Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 border focus:outline-none focus:ring rounded-md   bg-gray-700 placeholder-gray-500 border-gray-600 focus:ring-yellow-600 focus:border-gray-500"
                  required
                ></textarea>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-md focus:bg-yellow-600 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
              <p
                className="text-base text-center text-gray-400"
                id="result"
              ></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
