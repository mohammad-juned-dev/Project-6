import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-start gap-10 bg-gray-900 md:px-36 text-left w-full mt-10 text-gray-300 py-8 mb-10 ">
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <div className="flex flex-col items-start justify-start gap-5">
            <img src={assets.logo_dark} alt="" />
            <p className="w-full">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationemrporis ab debitis atque aliquid aulpa quidem.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-lg">Company</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col gap-5">
          <h2 className="text-white text-lg">Subscribe to our Newsletter</h2>
          <p className="w-full">
            The latest news, articles, resources, sent to your inbox weekly.
          </p>
          <div className="flex items-start gap-3">
            <input className="border-[1px] border-gray-500 bg-transparent rounded-md outline-none py-1 px-3" type="email" placeholder="Enter Your Email" />
            <button className="border-[1px] text-white hover:text-blue-600 border-gray-500 px-5 py-1 bg-blue-600 hover:bg-white rounded-md">Subscribe</button>
          </div>
        </div>
      </div>
      <hr className="w-full" />
      <p className="text-md w-full text-center">
        Copyright © 2026. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
