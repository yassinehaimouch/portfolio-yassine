import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-[1rem] p-4 sm:p-6 xl:mx-[4rem] mt-[4rem]">
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-centertext-gray-400">
          Designed & Developed by{" "}
          <a
            href="https://github.com/yassinehaimouch"
            rel="noreferrer"
            target="_blank"
            className="hover:underline"
          >
            Yassine Haimouch
          </a>
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://github.com/yassinehaimouch"
            rel="noreferrer"
            target="_blank"
            className="text-gray-500 hover:text-white"
          >
            <AiFillGithub className="w-[20px] h-[20px]" />
          </a>
          <a
            href="https://www.instagram.com/gitcoder/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-500 hover:text-white"
          >
            <AiFillInstagram className="w-[20px] h-[20px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/yassinehaimouch/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-500 hover:text-white"
          >
            <AiFillLinkedin className="w-[20px] h-[20px]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
