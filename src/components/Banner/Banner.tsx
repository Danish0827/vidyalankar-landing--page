import React from "react";

const Banner = () => {
  return (
    <div className="relative top-12 lg:top-28">
      <img
        className="w-full"
        src="https://uhip.ca/wp-content/uploads/2021/10/intro.jpg"
        alt=""
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div>
          <p className="text-white head-font lg:text-base text-sm font-bold uppercase text-center lg:pb-4 pb-2">
            Unlock your potential
          </p>
          <h1 className="text-white head-font lg:text-5xl text-2xl font-bold uppercase text-center lg:px-96">
            {" "}
            Ace the GATE 2025 with Vidyalankar Infinite.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
