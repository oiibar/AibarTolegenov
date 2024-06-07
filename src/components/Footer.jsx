import React from "react";
import pic from "../assests/pic.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-white">
      <div className="container p-4 flex flex-col text-center items-center justify-between gap-4">
        <div className="text-center flex flex-col items-center gap-2 mb-4 justify-center">
          <img src={pic} className="w-10" />
          <p>Tolegenov Aibar</p>
        </div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resumes</li>
        </ul>
        <hr className="container" />
        <ul className="flex w-full items-center justify-between text-center">
          <li>quovein@gmail.com</li>
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
          <li>+7 705 879 7593</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
