import React from "react";
import Navbar from "../components/Header";
import pic from "../assests/pic.png";

function Home() {
  return (
    <main className="flex items-center justify-between p-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl">Hello, I'm Tolegenov Aibar</h1>
        <p className="text-xl">
          I'm a front end developer who is pationed to build modern & responsive
          webpages
        </p>
        <button
          className="btn"
          href="https://github.com/oiibar/Curriculum_Vitae/blob/main/CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </button>
      </div>

      <div>
        <img alt="me" src={pic} className="w-60" />
      </div>
    </main>
  );
}

export default Home;
