import React from "react";

function Footer() {
  return (
    <footer className="flex text-center items-center justify-between">
      <p className="text-xl font-bold">Tolegenov Aibar</p>
      <ul className="flex flex-col gap-1">
        <li className="text-xl font-bold">Contacts</li>
        <li>+7 705 879 7593</li>
        <li>aibartolegenov.2283@gmail.com</li>
        <li>quovein@gmail.com</li>
        <li>Astana, Nazarbayev University, Kazakhstan</li>
      </ul>
      <ul className="flex flex-col gap-1">
        <li className="text-xl font-bold">Links</li>
        <li>
          <a href="https://github.com/oiibar" target="_blank" rel="noreferrer">
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
    </footer>
  );
}

export default Footer;
