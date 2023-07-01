import React from "react";
import { AiFillGithub, AiFillEye } from "react-icons/ai";


const Project = (props) => {
  return (
    <div className="max-w-sm  border border-gray-200 rounded-lg shadow bg-[#101319] dark:border-gray-700">
      <a href={props.demo} rel="noreferrer" target="_blank">
        <img className="rounded-t-lg" src={props.img} alt="project" />
      </a>
      <div className="p-5">
        <a href={props.demo} rel="noreferrer" target="_blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">
          {props.desc}
        </p>
        <div className=" flex gap-[1rem]">
          <a
            href={props.github}
            rel="noreferrer"
            target="_blank"
            className="inline-flex gap-[0.5rem] items-center px-3 py-2 text-sm font-medium text-center  rounded-md border focus:ring-4 focus:outline-none mr-2 mb-2 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800"
          >
            Github
            <AiFillGithub className=" w-[18px] h-[18px]" />
          </a>
          {props.demo && <a
            href={props.demo}
            rel="noreferrer"
            target="_blank"
            className="inline-flex gap-[0.5rem] items-center px-3 py-2 text-sm font-medium text-center text-white rounded-md border hover:text-white border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Demo
            <AiFillEye className="  w-[18px] h-[18px]" />
          </a>}
        </div>
      </div>
    </div>
  );
};

export default Project;
