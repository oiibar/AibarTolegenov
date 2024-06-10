import React, { useState, useEffect } from "react";
import logo from "../assests/logo.svg";
import "../index.css";

function Navbar() {
  return (
    <header className="fixed top-0 w-full shadow-md flex items-center justify-between py-4 px-6 bg-slate-900">
      <a href="#home">
        <img src={logo} className="w-14" alt="BIL" />
      </a>
      <ul className="flex items-center gap-4 cursor-pointer text-white/60">
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
        <li className="link">
          <a
            href="https://github.com/oiibar/Curriculum_Vitae"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
