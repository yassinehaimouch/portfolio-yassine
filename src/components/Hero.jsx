import React from "react";
import hero from "../assets/hero.png";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" flex justify-between items-center mx-[4rem] mt-[4rem] max-lg:mx-[1rem] max-lg:mt-[2rem] max-lg:gap-[4rem] max-lg:flex-col">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ y: [-250, 0], opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h1>Hi 👋, My name is</h1>
        <h3 className="text-[3rem] max-md:text-[1.9rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          YASSINE HAIMOUCH
        </h3>
        <h3 className="text-[3rem] max-md:text-[1.5rem] ">
          I'm a Frontend Developer,
          <br />
          Designer & Content Creator.
        </h3>
        <div className=" flex gap-[1rem] mt-[4rem] max-md:mt-[2rem]">
          <a
            href="https://github.com/yassinehaimouch"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillGithub className=" w-[30px] h-[30px] cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/gitcoder"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillInstagram className=" w-[30px] h-[30px] cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/yassinehaimouch/"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin className=" w-[30px] h-[30px] cursor-pointer" />
          </a>
        </div>
      </motion.div>

      <motion.img
        src={hero}
        alt="Hero"
        className=" w-[500px]"
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ y: [-250, 0], opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
};

export default Hero;
