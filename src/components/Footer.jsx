import React from "react";
import pic from "../assests/pic.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-[#011724]">
      <div className="container p-4 flex flex-col text-center items-center justify-between gap-4">
        <div className="text-center flex flex-col items-center gap-2 mb-4 justify-center">
          <img src={pic} className="w-10" />
          <p>Tolegenov Aibar</p>
        </div>
        <ul className="flex gap-4 cursor-pointer text-white/60">
          <li className="link">
            <a href="#home">Home</a>
          </li>
          <li className="link">
            <a href="#skills">Skills</a>
          </li>
          <li className="link">
            <a href="#portfolio">Projects</a>
          </li>
          <li className="link">
            <a href="#experience">Experience</a>
          </li>
          <li className="link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <hr className="container" />
        <ul className="flex w-full items-center justify-between text-center">
          <li className="text-white/60 cursor-pointer">
            <a href="mailto:quovein@gmail.com" className="link">
              quovein@gmail.com
            </a>
          </li>
          <li>
            <div className="flex gap-2 ">
              <a
                href="https://github.com/oiibar"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/aibar-tolegenov-167a962a3/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://github.com/oiibar/CV"
                target="_blank"
                rel="noreferrer"
              >
                <MdLibraryBooks size={25} />
              </a>
            </div>
          </li>
          <li className="text-white/60 cursor-pointer">
            <a href="tel:+77058797593" className="link">
              +7 705 879 7593
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
