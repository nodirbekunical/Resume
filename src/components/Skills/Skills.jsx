import React from "react";
import { BiCaretRight } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";

function Skills() {
  return (
    <section id="skills" className="pt-[80px] sm:pt-[120px]">
      <div className="container">
        <h2 className="flex items-center justify-center text-xl sm:text-2xl text-white">
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full mr-5"></span>{" "}
          Skills
          <span className="inline-block ml-2">
            <GrTechnology className="text-lg sm:text-xl bg-white" />
          </span>
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full ml-5"></span>
        </h2>
        <div className="max-w-[700px] mx-auto mt-8 sm:mt-12">
          <p className="text-gray-300 text-center"></p>
          <div className="mt-5">
            <p className="text-gray-300 text-center">
              Here are a few main technologies I’ve been working with so far:
            </p>
          </div>
        </div>
        <ul className="flex justify-center items-center flex-wrap gap-4 mt-10">
          <li className="flex items-center max-w-[200px] w-full text-gray-300 cursor-pointer border border-[#fff] hover:bg-[rgba(100,255,218,0.1)] duration-150 px-4 py-2 rounded-lg">
            <span className="inline-block">
              <BiCaretRight className="text-[#64ffda]" />
            </span>{" "}
            JavaScript (ES6+)
          </li>
          <li className="flex items-center max-w-[200px] w-full text-gray-300 cursor-pointer border border-[#fff] hover:bg-[rgba(100,255,218,0.1)] duration-150 px-4 py-2 rounded-lg">
            <span className="inline-block">
              <BiCaretRight className="text-[#64ffda]" />
            </span>
            React Js
          </li>
          <li className="flex items-center max-w-[200px] w-full text-gray-300 cursor-pointer border border-[#fff] hover:bg-[rgba(100,255,218,0.1)] duration-150 px-4 py-2 rounded-lg">
            <span className="inline-block">
              <BiCaretRight className="text-[#64ffda]" />
            </span>
            TypeScript
          </li>
          <li className="flex items-center max-w-[200px] w-full text-gray-300 cursor-pointer border border-[#fff] hover:bg-[rgba(100,255,218,0.1)] duration-150 px-4 py-2 rounded-lg">
            <span className="inline-block">
              <BiCaretRight className="text-[#64ffda]" />
            </span>
            Next Js
          </li>
          <li className="flex items-center max-w-[200px] w-full text-gray-300 cursor-pointer border border-[#fff] hover:bg-[rgba(100,255,218,0.1)] duration-150 px-4 py-2 rounded-lg">
            <span className="inline-block">
              <BiCaretRight className="text-[#64ffda]" />
            </span>
            Tailwind Css
          </li>
          <li className="flex items-center max-w-[200px] w-full text-gray-300 cursor-pointer border border-[#fff] hover:bg-[rgba(100,255,218,0.1)] duration-150 px-4 py-2 rounded-lg">
            <span className="inline-block">
              <BiCaretRight className="text-[#64ffda]" />
            </span>
            MUI (Material UI)
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
