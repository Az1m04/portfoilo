import React from "react";
import Image from "next/image";
import MeImage from "../../public/azim.jpg";

function About() {
  return (
    <div className="mt-40 ">
      <div className="text-6xl font-bold bg-clip-text  text-transparent bg-gradient-to-r from-gray-400 to-gray-600">
        About
      </div>
      <div className="flex justify-between  mt-36 text-gray-400 text-2xl">
        <p className="">
          I am a nonchalant type of person who loves to do his work joyfully.
          Ready to learn new technologies and use my creative thinking to solve
          the problems.
          <p className="mt-5">
            I have done my education from lovely professional university in
            B.Tech (CSE) and now I am doing my internship in SimbaQuartz as
            Software Developer position.
          </p>
          <p className="mt-5 flex justify-between">
            <p className="">
              Non Technical skills:
              <p className="mt-4">
                <div className="space-x-4 flex text-xl">
                  <div className=" h-8 w-8 rounded-full flex tooltip">
                    <span class="tooltiptextLeft -ml-8 text-base">
                      Problem Solving
                    </span>

                    <img src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/40/000000/external-problem-solving-achievement-planning-parzival-1997-flat-parzival-1997.png" />
                  </div>
                  <div className=" h-8 w-8 rounded-full tooltip">
                    <span class="tooltiptext -ml-14 text-base">Adaptive</span>

                    <img src="https://img.icons8.com/external-wanicon-flat-wanicon/40/000000/external-data-transfer-internet-of-things-wanicon-flat-wanicon.png" />
                  </div>
                  <div className=" h-8 w-8 rounded-full tooltip">
                    <span class="tooltiptext -ml-14 text-base">Managment</span>

                    <img src="https://img.icons8.com/fluency/40/000000/time-management.png" />
                  </div>
                  <div className=" h-8 w-8 rounded-full tooltip">
                    <span class="tooltiptext -ml-14 text-base">Teamwork</span>

                    <img src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/48/000000/external-teamwork-organization-management-parzival-1997-flat-parzival-1997.png" />
                  </div>
                </div>
              </p>
            </p>
            <p>
              Technical skills:
              <p className="mt-4">
                <div className="flex space-x-2">
                  <div className=" h-8 w-8 rounded-full tooltip">
                    <span class="tooltiptext -ml-14 text-base">React Js</span>

                    <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" />
                  </div>
                  <div className=" h-8 w-8 rounded-full tooltip">
                    <span class="tooltiptext -ml-14 text-base">Node Js</span>

                    <img src="https://img.icons8.com/fluency/48/000000/node-js.png" />
                  </div>

                  <div className=" h-8 w-8 rounded-full tooltip">
                    <span class="tooltiptext -ml-14 text-base ">Mongodb</span>

                    <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" />
                  </div>
                  <div className=" h-8 w-8 rounded-full tooltip">
                    <span class="tooltiptext -ml-14 text-base">Javascript</span>

                    <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
                  </div>
                </div>
              </p>
            </p>
            <p>
              Graphic skills:
              <p className="mt-4">
                <div className="flex space-x-2">
                  <div className=" h-8 w-8 rounded-full tooltip">
                    <span class="tooltiptext -ml-14 text-base">Adobe XD</span>

                    <img src="https://img.icons8.com/color/48/000000/adobe-xd--v1.png" />
                  </div>
                  <div className=" h-8 w-8 rounded-full tooltip">
                    <span class="tooltiptext -ml-14 text-base">Figma</span>

                    <img src="https://img.icons8.com/color/48/000000/figma--v1.png" />
                  </div>

                  <div className=" h-8 w-8 rounded-full tooltip">
                    <span class="tooltiptext -ml-14 text-base">
                      Adobe Illustrator
                    </span>

                    <img src="https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png" />
                  </div>
                  <div className=" h-8 w-8 rounded-full tooltip">
                    <span class="tooltiptext -ml-14 text-base">
                      Adobe Photoshop
                    </span>

                    <img src="https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png" />
                  </div>
                </div>
              </p>
            </p>
          </p>
          <p className="mt-5">
            Hobbies:
            <p className="mt-4">
              <div className="flex space-x-2">
                <div className=" h-8 w-8 rounded-full tooltip">
                  <span class="tooltiptextLeft text-base -ml-5">
                    Listening Music
                  </span>

                  <img src="https://img.icons8.com/color/48/000000/listening-to-music-on-headphones.png" />
                </div>
                <div className=" h-8 w-8 rounded-full tooltip">
                  <span class="tooltiptext -ml-14 text-base">
                    Playing Games
                  </span>

                  <img src="https://img.icons8.com/color/50/000000/controller.png" />
                </div>
              </div>
            </p>
          </p>
        </p>

        <div className="-mr-24 w-full  ">
          <Image height={400} objectFit="contain" src={MeImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
