import React from "react";
import logo from "../assests/logo.svg";
import "../index.css";

function Navbar() {
  return (
    <header class="fixed top-0 w-full shadow-md flex items-center justify-between py-4 px-6 bg-slate-800">
      <img src={logo} class="w-14" alt="BIL" />
      <ul class="flex items-center gap-5 cursor-pointer">
        <li className="text-white/50 hover:text-white">Home</li>
        <li className="text-white/50 hover:text-white">About</li>
        <li className="text-white/50 hover:text-white">Projects</li>
        <li className="text-white/50 hover:text-white">
          <a
            href="https://github.com/oiibar/Curriculum_Vitae"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
        <li className="text-white/50 hover:text-white">
          <a
            href="https://contact-me-neon.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
