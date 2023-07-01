import React from "react";
import Project from "./Project";
import rickandmorty from "../../assets/project-1.png";
import magictrick from "../../assets/project-2.png";
import camerashop from "../../assets/project-3.png";
import bookshelf from "../../assets/project-4.png";
import reacthooks from "../../assets/project-5.png";
import reactperformance from "../../assets/project-6.png";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className=" flex flex-col justify-center mx-[1rem] lg:mx-[4rem] pt-[12rem]"
      id="projects"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className=" text-[3rem] font-bold mb-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
      >
        Projects
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: [-100, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" grid grid-cols-1 gap-[5rem] md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 "
      >
        <Project
          img={bookshelf}
          title="Bookshelf a full React Application Workshop"
          github="https://github.com/yassinehaimouch/bookshelf"
          desc={`Building a full React application from scratch. using (React JS, React Query, Bootstrap).`}
        />
        <Project
          img={reacthooks}
          title="Advanced React Hooks Workshop"
          github="https://github.com/yassinehaimouch/react-hooks"
          desc="It provides comprehensive training on React Hooks, covering topics like built-in Hooks, custom Hooks, and performance."
        />
        <Project
          img={reactperformance}
          title="React Performance Workshop"
          github="https://github.com/yassinehaimouch/react-performance"
          desc="It focuses on optimizing React application performance by covering, memoization, code splitting, and rendering. "
        />
        <Project
          img={rickandmorty}
          title="Rick And Morty Characters With API"
          github="https://github.com/yassinehaimouch/Rick-and-Morty"
          demo="https://mortyandrick.vercel.app/"
          desc="This project consumes The Rick and Morty API to render a beautiful interface with all characters from the show."
        />
        <Project
          img={magictrick}
          title="Beautiful Magic Trick With Playing Cards"
          github="https://github.com/yassinehaimouch"
          demo="https://magic-trick.vercel.app/"
          desc="As Me Magician and developer i builded Beautiful dynamic Magic Trick With (Face Up Face down) Playing Cards."
        />
        <Project
          img={camerashop}
          title="Shop To Increase Decrease Products"
          github="https://github.com/yassinehaimouch/CameraShop"
          demo="https://camera-shop-beige.vercel.app/"
          desc="You can ADD Product To Cart, increase decrease Products, Get Total Cost, Remove Product and Clear Shopping Cart."
        />
      </motion.div>
    </div>
  );
};

export default Projects;
