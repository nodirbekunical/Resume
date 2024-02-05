import React from "react";
import { useEffect } from "react";
import AOS from "aos";

// ------> Css
import "aos/dist/aos.css";

function Modal({ isVisible, onClose, children }) {
  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  if (!isVisible) return null;

  const handleClick = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      onClick={handleClick}
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-[2px] flex justify-center items-center z-50 duration-300"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        className={`${
          isVisible ? "bottom-0" : "-bottom-[100%]"
        } w-full absolute left-0 bg-white rounded-t-2xl px-5`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
