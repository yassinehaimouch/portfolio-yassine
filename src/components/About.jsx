import React from "react";
import aboutImage from "../assets/About.jpg";


const About = () => {
  return (
    <div className="pt-[12rem] mx-[4rem] max-xl:mx-[1rem]" id="about">
      <h1 className=" text-[3rem] font-bold mb-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
        About Me
      </h1>
      <div className=" flex gap-[10rem] max-xl:gap-[3rem] max-xl:flex-wrap justify-center">
        <img
          src={aboutImage}
          alt="Me"
          className=" w-[30%] h-[100%] rounded-xl max-xl:w-[100%]"
        />
        <div className=" w-[100%] flex flex-col gap-[2rem]">
          <h1 className=" text-[2.5rem] max-md:text-[2rem]">
            I’m Developer, Designer, Magician and Content Creator.
          </h1>
          <p className=" text-[2rem] max-md:text-[1.5rem] text-[#838697]">
            I'm developer armed with proficient knowledge of entire software
            development life cycle and React expertise. I'm also kind of person
            who love learn new technologies and apply them in real world
            projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
