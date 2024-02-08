import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

// ------> Images
import Me from "../../Assets/Images/me.png";

function Footer() {
  return (
    <footer className="mt-[80px] sm:mt-[120px]">
      <div className="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img
              className="h-[40px] w-[40px] rounded-full z-50"
              src={Me}
              alt="front-img"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Academic skills
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                <li>
                  <p className="text-gray-500">Math</p>
                </li>
                <li>
                  <p className="text-gray-500">Physics</p>
                </li>
                <li>
                  <p className="text-gray-500">English</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Passion projects
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://t.me/Codebridgeschool"
                    className="hover:underline "
                  >
                    CodeBridge School
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Edu Tizim (for school)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between sm:flex-row-reverse">
          <ul className="flex items-center space-x-4 ">
            <li>
              <a
                href="https://www.linkedin.com/in/nodirbek-kholiqulov-67a712246/"
                target="_blank"
                rel="noreferrer"
              >
                <CiLinkedin className="text-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a href="https://t.me/khn_dev" target="_blank" rel="noreferrer">
                <FaTelegramPlane className="text-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/khn_dev/"
                rel="noreferrer"
              >
                <FaInstagram className="text-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100079926716522&mibextid=ZbWKwL"
              >
                <FiFacebook className="text-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/node-nodir"
              >
                <FaGithub className="text-white w-7 h-7" rel="noreferrer" />
              </a>
            </li>
          </ul>
          <span className="inline-block text-sm text-gray-500 dark:text-gray-400 my-5">
            © 2023 . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
