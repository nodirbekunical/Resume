// import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { BiCaretRight } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { Context } from "../../Context/ModalContext";

// ------> Css
import "./experience.css";

function Experience() {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(true);
  const [active4, setActive4] = useState(false);

  // ------> Context
  const ctx = useContext(Context);
  const { show } = ctx;

  const handleClick = () => {
    setActive(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };
  const handleClick1 = () => {
    setActive(false);
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };
  const handleClick2 = () => {
    setActive(false);
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
  };
  const handleClick3 = () => {
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
  };
  const handleClick4 = () => {
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
  };

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();

  //   const token = "5850891292:AAEloOzyUHZkmtt6lytPkuOlsiVVH2l_Z6k";
  //   const chatId = 5022460942;

  //   const name = evt.target.elements.name.value;
  //   const lastName = evt.target.elements.lastname.value;
  //   let fullText = `\u{2705} Name: ${name}%0A\u{2705} Name: ${lastName}%0A\u{260F} Phone Number: \u{FF0B}998${"970130322"}`;

  //   // --- Sent Telegram Bot
  //   axios.post(
  //     `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText},`
  //   );
  // };

  return (
    <section id="experience" className="pt-[80px] sm:pt-[120px]">
      <div className="container">
        <h2 className="flex items-center justify-center text-xl sm:text-2xl text-white">
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full mr-5"></span>{" "}
          Experience{" "}
          <span className="inline-block ml-2">
            <MdWorkOutline className="text-lg sm:text-xl" />
          </span>
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full ml-5"></span>
        </h2>
        <div className="max-w-[800px] mx-auto">
          <div className="mt-8 sm:mt-12">
            <div className="flex flex-col sm:flex-row items-start">
              <div className="w-[70%] sm:w-[25%]">
                <button
                  className={`${
                    active3 ? "text-[#64ffda] active bg-[#112240]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-gray-300 w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#112240] rounded-r-md`}
                  onClick={handleClick3}
                >
                  Codebridge School
                </button>
                <button
                  className={`${
                    active4 ? "text-[#64ffda] active bg-[#112240]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-gray-300 w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#112240] rounded-r-md`}
                  onClick={handleClick4}
                >
                  Tragon
                </button>
                <button
                  className={`${
                    active ? "text-[#64ffda] active bg-[#112240]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-gray-300 w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#112240] rounded-r-md`}
                  onClick={handleClick}
                >
                  Unical Solutions
                </button>
                <button
                  className={`${
                    active1 ? "text-[#64ffda] active bg-[#112240]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-gray-300 w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#112240] rounded-r-md`}
                  onClick={handleClick1}
                >
                  Support - IT Solutions
                </button>
                <button
                  className={`${
                    active2 ? "text-[#64ffda] active bg-[#112240]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-gray-300 w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#112240] rounded-r-md`}
                  onClick={handleClick2}
                >
                  RoboticsLab
                </button>
              </div>
              <div className="w-[100%] sm:w-[75%] sm:ml-10 mt-8 sm:mt-0">
                {active ? (
                  <>
                    <h2 className="text-xl text-[#64ffda] font-medium">
                      <span className="inline-block text-white">
                        Front End Developer at
                      </span>{" "}
                      Unical Solutions
                    </h2>
                    <strong className="inline-block font-normal text-sm text-white tracking-wide">
                      Yanuary 2023 - Present
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          I worked with lots of project which was for well-known
                          companies in Uzbekistan such as JETOUR. While working
                          with team, I gained very valuable skills that help me
                          to built gid project.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          while coding, I gave attention every code I wrote to
                          be accurate and not make problem. This progress was
                          the one of the factor that was thr way to succeed.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          I learned how to work effectively with a team on
                          Github as well.
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active1 ? (
                  <>
                    <h2 className="text-xl text-[#64ffda] font-medium">
                      <span className="inline-block text-white">
                        Front End Developer at
                      </span>{" "}
                      Support - IT Solutions
                    </h2>
                    <strong className="inline-block font-normal text-sm text-white tracking-wide">
                      August 2022 - Yanuary 2023
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          Worked with a variety of different languages,
                          platforms and frameworks management systems such as
                          JavaScript (ES6+), TypeScript, React Js,
                          React-router-dom, Tailwind Css, Redux Github, Gitlab
                          and Netlify
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          This company gave me first change to join a team and
                          taught me how to increase my level. I attempted a lot
                          of meetings the company held to encourage their
                          employees and every meeting had unexpected gifts that
                          was for hard working peopleю
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          I had a team which made of 5 people. We were so close
                          toeach other and that is why finding a solutions for
                          problems was not such difficult.
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active2 ? (
                  <>
                    <h2 className="text-xl text-[#64ffda] font-medium">
                      <span className="inline-block text-white">
                        Front End Mentor at
                      </span>{" "}
                      RoboticsLab
                    </h2>
                    <strong className="inline-block font-normal text-sm text-white tracking-wide">
                      July - August 2022
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          I understood how to communicate with students, even if
                          only a little.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          In 1 month, I and the students found answers to such
                          questions as what is the web industry itself,
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          Why we need to learn programming, and we started
                          programming basic,
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active3 ? (
                  <>
                    <h2 className="text-xl text-[#64ffda] font-medium">
                      <span className="inline-block text-white">
                        Co-Founder of
                      </span>{" "}
                      Codebridge School
                    </h2>
                    <strong className="inline-block font-normal text-sm text-white tracking-wide">
                      April 2023 - Present
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          We are alse working on one project which is for
                          Education systems. The initiation of a new IT project
                          focusing on managing students at school. This system
                          will involve scoring in classes and monitoring
                          attendance. We believe this innovation could bring a
                          positive change to the school environment.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          Codebridge School is non-profit organization dedicated
                          to providing free Coding and English language
                          education to local children. Our mission is to empower
                          the next generation of learners with the skills and
                          knowledge they need to succeed in today's digital
                          world.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          - English Language
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          - IT (Frontend development)
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active4 ? (
                  <>
                    <h2 className="text-xl text-[#64ffda] font-medium">
                      <span className="inline-block text-white">
                        Frontent Developer at
                      </span>{" "}
                      Tragon
                    </h2>
                    <strong className="inline-block font-normal text-sm text-white tracking-wide">
                      May - September 2023
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          One project which was convenient to sell Generator was
                          done.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          Working with a team from a distance was the main
                          advantage for my IT skills.
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
