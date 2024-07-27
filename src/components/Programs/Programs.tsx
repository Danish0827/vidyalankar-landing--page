"use client";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
const Programs = () => {
  const DevelopmentData = [
    {
      id: "01",
      heading: "Flexible time",
      content: "learn at your own pace, anytime, anywhere, &amp; revise concepts as needed.",
    },
    {
      id: "02",
      heading: "Expert Faculty",
      content: "Recorded lectures by renowned faculty members with 10+ years of teaching experience from IITs, IISc, NITs, &amp; more",
    },
    {
      id: "03",
      heading: "Practice sets",
      content: "Get to solve daily Chapter level &amp; subject level practice problems.",
    },
    {
      id: "04",
      heading: "Pervasive Tests",
      content: "Attempts mock tests by chapter level, subject level &amp; full length tests as per GATE paper pattern.",
    },
    {
      id: "05",
      heading: "Extensive practice:",
      content: "Access to 8,000+ practice questions, infinite custom tests, past 15 years GATE papers with solutions",
    },
    {
      id: "06",
      heading: "Doubt Solving",
      content: "Get all your doubts solved through Email &amp; WhatsApp",
    }
  ];
  return (
    <>
      {" "}
      <div id="program" className="lg:pt-40 pt-24">
        <div className="block ">
          <h2
            // style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="lg:text-5xl md:text-4xl text-3xl pb-5 text-center font-bold text-[#ed3c36]"
          >
            Our Programs
          </h2>
        
        </div>
        <div className="flex flex-wrap w-full justify-center px-6 pt-6">
          {DevelopmentData.map((item) => (
            <div
              className="lg:w-1/3 md:w-1/2 w-full p-3 group"
              key={item.id}
            >
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
                className="font-bold text-gray-400 bg-white text-3xl p-4 inline rounded-full relative group-hover:-top-[7px] duration-300 ml-5 group-hover:bg-[#ed3c36] group-hover:text-[#fff]"
              >
                {item.id}
              </div>
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
                className="px-5 py-7 mb-5 shadowhover bg-white rounded-lg"
              >
                <h2 className="text-2xl pb-3 font-bold">{item.heading}</h2>
                <p className="font-extralight h-16 text-gray-800 pb-2">
                  {item.content}
                </p>
                <span className="group-hover:text-[#ed3c36] flex items-center gap-1 pt-5">
                  Contact Us
                  <LuArrowUpRight className="group-hover:-rotate-[315deg] duration-300" />
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center ">
          <Link
            // style={{
            //   background:
            //     "linear-gradient(96deg, rgb(255 104 0) 0%, rgb(255 224 196 / 100%) 51.56%, rgb(237 142 46) 100%",
            // }}
            href="https://wa.me/919867356907"
            className=" text-white  bg-[#ed3c36] hover:border-[#ed3c36] hover:text-white block w-52 text-center border-[#ee143] rounded-full m-auto py-3  font-semibold px-7 border-2 hover:bg-[#ed3c36]"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Programs;
