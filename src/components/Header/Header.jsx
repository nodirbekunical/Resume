import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { TbDownload } from "react-icons/tb";
import { TfiGallery } from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import Modal from "../Modal/Modal";

// ------> Pdf
import Resume from "../../Assets/pdf/resume.pdf";
import { useContext } from "react";
import { Context } from "../../Context/ModalContext";

import Me from "../../Assets/Images/me.png";

function Header() {
  const [showModal, setShowModal] = useState(false);

  // ------> Context
  const ctx = useContext(Context);
  // eslint-disable-next-line no-unused-vars
  const { show, setShow } = ctx;

  return (
    <header
      className={`bg-[#0a192f] fixed top-0 z-50 w-full h-fit duration-500 border-b border-b-[rgba(100,255,218,0.1)] shadow-header_shadow`}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-3 sm:py-4">
          <img
            className="h-[40px] w-[40px] rounded-full z-50"
            src={Me}
            alt="front-img"
          />
          <div className="hidden sm:flex items-center">
            <ul className="flex items-center space-x-6">
              <li className="nav_item text-sm px-2 py-1 group">
                <a
                  href="#about"
                  className="nav_link text-white group-hover:text-[#64ffda] duration-150"
                >
                  About
                </a>
              </li>
              <li className="nav_item text-sm px-2 py-1 group">
                <a
                  href="#experience"
                  className="nav_link text-white group-hover:text-[#64ffda] duration-150"
                >
                  Experience
                </a>
              </li>
              <li className="nav_item text-sm px-2 py-1 group">
                <a
                  href="#work"
                  className="nav_link text-white group-hover:text-[#64ffda] duration-150"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav_item text-sm px-2 py-1 group">
                <a
                  href="#contactme"
                  className="nav_link text-white group-hover:text-[#64ffda] duration-150"
                >
                  Contactme
                </a>
              </li>
            </ul>
            <a
              href={Resume}
              download="Nodirbek's resume.pdf"
              className="flex items-center text-sm ml-5 border border-[#64ffda] text-[#64ffda] rounded-[6px] hover:bg-[rgba(100,255,218,0.1)] py-2 px-3 duration-200"
            >
              Resume
              <span className="inline-block ml-2">
                <TbDownload />
              </span>
            </a>
          </div>
          <button
            className="flex flex-col justify-between w-7 h-5 sm:hidden"
            onClick={() => {
              setShowModal(true);
              setShow(true);
            }}
          >
            <span
              className={`${
                showModal ? "-rotate-45 translate-y-[8.8px]" : ""
              } inline-block w-full h-[2px] border border-white duration-300`}
            ></span>
            <span
              className={`${
                showModal ? "hidden" : ""
              } inline-block w-[60%] h-[2px] border border-white`}
            ></span>
            <span
              className={`${
                showModal ? "rotate-45 -translate-y-[8.8px]" : ""
              } inline-block w-full h-[2px] border border-white duration-300`}
            ></span>
          </button>
        </nav>
      </div>

      {/* ---------------- Modal --------------- */}

      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
          setShow(false);
        }}
      >
        <span
          onClick={() => {
            setShowModal(false);
            setShow(false);
          }}
          className="absolute left-[40%] inline-block w-20 h-2 bg-[#0a192f] rounded-b-2xl"
        ></span>
        <ul className="grid grid-cols-3 gap-y-8 gap-x-4 pt-14 pb-10">
          <li
            onClick={() => {
              setShowModal(false);
              setShow(false);
            }}
            className="border border-[#0a192f] hover:bg-[#0a192f] rounded-md w-full mx-auto duration-300"
          >
            <a
              href="#home"
              className="flex flex-col items-center justify-center font-medium text-sm text-[#0a192f] hover:text-white duration-200 py-2"
            >
              <span className="block text-lg mb-[2px] sm:mr-2">
                <AiOutlineHome />
              </span>
              Home
            </a>
          </li>
          <li
            onClick={() => {
              setShowModal(false);
              setShow(false);
            }}
            className="border border-[#0a192f] hover:bg-[#0a192f] rounded-md w-full mx-auto duration-300"
          >
            <a
              href="#about"
              className="flex flex-col items-center justify-center font-medium text-sm text-[#0a192f] hover:text-white duration-200 py-2"
            >
              <span className="block text-lg mb-[2px] sm:mr-2">
                <BiUser />
              </span>
              About
            </a>
          </li>
          <li
            onClick={() => {
              setShowModal(false);
              setShow(false);
            }}
            className="border border-[#0a192f] hover:bg-[#0a192f] rounded-md w-full mx-auto duration-300"
          >
            <a
              href="#experience"
              className="flex flex-col items-center justify-center font-medium text-sm text-[#0a192f] hover:text-white duration-200 py-2"
            >
              <span className="block text-lg mb-[2px] sm:mr-2">
                <MdWorkOutline />
              </span>
              Experience
            </a>
          </li>
          <li
            onClick={() => {
              setShowModal(false);
              setShow(false);
            }}
            className="border border-[#0a192f] hover:bg-[#0a192f] rounded-md w-full mx-auto duration-300"
          >
            <a
              href="#work"
              className="flex flex-col items-center justify-center font-medium text-sm text-[#0a192f] hover:text-white duration-200 py-2"
            >
              <span className="block text-lg mb-[2px] sm:mr-2">
                <TfiGallery />
              </span>
              Portfolio
            </a>
          </li>
          <li
            onClick={() => {
              setShowModal(false);
              setShow(false);
            }}
            className="border border-[#0a192f] hover:bg-[#0a192f] rounded-md w-full mx-auto duration-300"
          >
            <a
              href="contactme"
              className="flex flex-col items-center justify-center font-medium text-sm text-[#0a192f] hover:text-white duration-200 py-2"
            >
              <span className="block text-lg mb-[2px] sm:mr-2">
                <TbBrandTelegram />
              </span>
              Contactme
            </a>
          </li>
          <a
            href={Resume}
            download="Nodirbek's resume.pdf"
            className="flex flex-col-reverse items-center justify-center text-sm w-full border border-[#0a192f] text-[#0a192f] hover:text-white rounded-[6px] bg-white hover:bg-[#0a192f] py-2 px-3 mx-auto duration-300"
          >
            Resume
            <span className="inline-block">
              <TbDownload />
            </span>
          </a>
        </ul>
      </Modal>
    </header>
  );
}

export default Header;
