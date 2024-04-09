import React from "react";
import { BsTelephoneOutbound } from "react-icons/bs";

// ------> Images
import Me from "../../Assets/Images/dev.png";

// ------> Css
import "./hero.css";

function Hero() {
  return (
    <section id="home" className="mt-12 sm:mt-[70px] pt-[100px] sm:pt-[130px]">
      <div className="container flex flex-wrap justify-center lg:flex lg:items-center lg:justify-between">
        <div className="max-w-[500px] text-center lg:text-start">
          <div className="flex ">
            <h2 className="flex mx-auto lg:mx-0 items-end font-semibold text-4xl sm:text-5xl text-white tracking-normal">
              Hi, I'm
              <ul id="enthusiasm" className="list flex items-center m-0 p-0">
                <li id="N" className="item">
                  N
                </li>
                <li id="O" className="item">
                  o
                </li>
                <li id="D" className="item">
                  d
                </li>
                <li id="I" className="item">
                  i
                </li>
                <li id="R" className="item">
                  r
                </li>
                <li id="B" className="item">
                  b
                </li>
                <li id="E" className="item">
                  e
                </li>
                <li id="K" className="item">
                  k
                </li>
                <li id="DOT" className="item">
                  .
                </li>
              </ul>
            </h2>
          </div>
          <strong className="inline-block dev font-normal text-base sm:text-2xl mt-3 mb-3 sm:mt-2 sm:mb-3 text-gray-300 -z-20">
            Frontend developer
          </strong>
          <p className="text-gray-300 text-base">
            Front End Developer with more than a year of experience working with
            JavaScript, React Js, Next Js to deliver customer a great product. I
            know how to work on Github with a team and being responsible for
            every duties. Furthermore, I'm looking forwart to setting up my own
            company with many employees.
          </p>
          <a
            href="tel:+998970130322"
            className="flex items-center mx-auto lg:mx-0 w-fit text-sm border border-[#64ffda] text-[#64ffda] rounded-[4px] hover:bg-[rgba(100,255,218,0.1)] py-2 px-4 duration-200 mt-6 group"
          >
            Contact Me <BsTelephoneOutbound className="ml-2 text-[#64ffda]" />
          </a>
        </div>
        <div className="relative sm:ml-5 mt-14 lg:mt-0 ">
          <img
            className="max-w-[300px] sm:max-w-[400px] w-full h-[300px] sm:h-[400px] rounded-b-[50px] sm:rounded-b-[100px] z-50"
            src={Me}
            alt="front-img"
          />
          <span className="absolute w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full bg-[#114b50] blur-2xl sm:blur-3xl -right-[10px] sm:-right-[20px] top-[20px] -z-10"></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
