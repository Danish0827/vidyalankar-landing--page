import React from "react";
import chat from "../../../public/image/chat.png";
import { FaArrowRight } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div id="about" className="lg:pt-44 pt-32">
        <div className="lg:w-10/12 px-10 m-auto">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 m-auto w-full mb-3">
              <div className="about__image">
                <img
                  src="https://echooling-react.vercel.app/static/media/ab.fcda2469b98ffc37a148.png"
                  alt="About"
                />
              </div>
            </div>
            <div className="lg:w-1/2 m-auto w-full fadeInLeft">
              <div className="lg:px-10 py-4 ">
                <h2
                  className="text-[#00306e] lg:text-5xl text-3xl font-bold lg:leading-[55px]"
                  data-wow-duration="0.3s"
                >
                  Welcome to <br />{" "}
                  <span className="text-red-600">Vidyalankar</span>
                </h2>
                <p
                  className="text-[#777] pt-5 lg:text-2xl text-base font-bold"
                  data-wow-duration="0.5s"
                >
                  Prepare for GATE the Infinite way & get the AIR you deserve.
                </p>
                <p
                  className="text-[#777] pt-4 pb-4 text-sm lg:text-lg"
                  data-wow-duration="0.6s"
                >
                  With our expert guidance and proven teaching methodology, you
                  can achieve remarkable results & open doors to unlimited
                  opportunities.
                </p>
                <p className="text-[#777] pb-10  text-sm" data-wow-duration="0.7s">
                  {" "}
                  Have questions?{" "}
                  <a href="/" className="text-red-600 underline font-semibold">
                    {" "}
                    Get Free Guide{" "}
                  </a>
                </p>
                <hr className="py-4" />
                <ul
                  className="flex flex-wrap justify-between gap-5 items-center"
                  data-wow-duration="0.9s"
                >
                  <li
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
                    }}
                    className=" rounded-lg hover:bg-red-600 text-[#00306e] hover:text-white"
                  >
                    <a className="flex items-center gap-2 lg:px-6 lg:py-4 px-3 py-2 text-sm lg:text-base" href="#contact">
                      {" "}
                     Contact Now{" "}
                      <FaArrowRight />

                    </a>
                  </li>
                  <li className="flex gap-3 items-center">
                    <img src={chat.src} alt="" />
                    <div>
                      <p className="w-full text-xs text-[#777]">Get Support</p>
                      <a
                        className="text-[#00306e] font-semibold"
                        href="/mailto:info@vidyalankar.org"
                      >
                       info@vidyalankar.org
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
