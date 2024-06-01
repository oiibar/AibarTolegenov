import React from "react";

function Footer() {
  return (
    <footer className="bg-white">
      <div className="container p-4 flex text-center items-center justify-center gap-10">
        <ul className="flex flex-col gap-1">
          <li className="title">Contacts</li>
          <li>+7 705 879 7593</li>
          <li>aibartolegenov.2283@gmail.com</li>
          <li>quovein@gmail.com</li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li className="title">Links</li>
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
      </div>
    </footer>
  );
}

export default Footer;
