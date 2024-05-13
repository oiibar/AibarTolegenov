import React from "react";
import logo from "../assests/logo.svg";
import "../index.css";

function Navbar() {
  return (
    <header class="flex items-center p-4 shadow-sm bg-slate-800 backdrop-blur-sm">
      <img src={logo} class="h-14" alt="BIL" />
      <nav class="ml-auto mr-10">
        <ul class="flex items-center gap-5">
          <li className="text-white/50 hover:text-white">
            <a href="/#" aria-current="page">
              Home
            </a>
          </li>
          <li className="text-white/50 hover:text-white">
            <a href="/#">About</a>
          </li>
          <li className="text-white/50 hover:text-white">
            <a href="/#">Projects</a>
          </li>
          <li className="text-white/50 hover:text-white">
            <a
              href="https://github.com/oiibar/CV"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li className="text-white/50 hover:text-white">
            <a href="/#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
