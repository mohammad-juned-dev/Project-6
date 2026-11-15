import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center mt-[10%]">
      <div className=" w-[60%] items-center justify-center flex flex-col ">
        <h1 className="md:block hidden w-full text-[35px] font-semibold leading-tight">
          {" "}
          Empower your courses with the <br /> courses designed to{" "}
          <span className="text-blue-500">to fit your Choices.</span>
        </h1>
        <h1 className="md:hidden block w-full text-[20px] font-semibold leading-none">
          {" "}
          Empower your courses with the courses designed to{" "}
          <span className="text-blue-500">to fit your Choices.</span>
        </h1>
        <img
          className="hidden md:block h-8 self-end mr-8"
          src={assets.sketch}
          alt="sketch"
        />
        <p className="w-[85%] text-[15px] md:block hidden leading-tight">
          We bing together world class instructors, interactive content and a
          supportive community to help you achieve your personal and
          proffessional goals.
        </p>
        <p className="md:hidden block text-[12px] ">
          We bring together worls-class instructors to help you achieve your
          personal goals.{" "}
        </p>
      </div>
      <SearchBar/>
    </div>
  );
};

export default Hero;
