import React from "react";
import ContactImg from "../assets/mem.png";
import { AiFillMail } from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Contact = () => {
  return (
    <div
      className=" mx-[4rem] max-lg:mx-[1rem] pt-[12rem] flex gap-[5rem] items-center justify-center"
      id="contact"
    >
      <LazyLoadImage src={ContactImg} alt="Memoji" className=" w-[30%] max-lg:hidden" effect="blur"/>
      <div className=" w-[45%] max-lg:w-[100%]">
        <h1 className=" text-[2rem] font-bold mb-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Don't be a Stranger!
        </h1>
        <p className=" text-[1.5rem] mb-[2rem]">
          Shoot me an email if you think we're a great fit and would like to
          work with me and let's have a great time while we're at it.
        </p>
        <h1 className=" flex items-center gap-[1rem] text-[1.5rem] max-lg:text-[1rem]">
          {" "}
          <AiFillMail className=" w-[25px] h-[25px]" />
          yassinehaimouch@proton.me
        </h1>
        <a
          href="mailto:yassinehaimouch@proton.me"
          className=" cursor-pointer mt-[2rem] relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Get In Touch
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
