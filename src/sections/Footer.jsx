import React from "react";

function Footer() {
  return (
    <footer id="contact" className="bg-background bottom-0 color-carbon">
      <nav className="flex text-center items-center justify-center lg:justify-between mx-auto max-w-screen-xl align-center p-5">
        <p className="text-xl font-bold">Tolegenov Aibar</p>
        <ul>
          <li className="mb-5 text-xl font-bold">Contacts</li>
          <li>+7 705 879 7593</li>
          <li>aibartolegenov.2283@gmail.com</li>
          <li>quovein@gmail.com</li>
          <li>Astana, Nazarbayev University, Kazakhstan</li>
        </ul>
        <ul>
          <li className="mb-5 text-xl font-bold">Links</li>
          <li>
            <a
              href="https://github.com/oiibar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aibar-tolegenov-167a962a3/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/oiibar/CV"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
