import React from "react";
import Navbar from "../components/Navbar";
import pic from "../assests/pic.png";

function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <div className="mt-32 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="">
          <h1 className="text-5xl">Hello, I'm Tolegenov Aibar</h1>
          <p className="text-xl my-3">
            I'm a front end developer who is pationed to build modern &
            responsive webpages
          </p>
          <a
            className="bg-blue hover:bg-blue mt-3 text-white font-bold py-2 px-4 rounded-full"
            href="https://github.com/oiibar/CV"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        <img alt="name" src={pic} className="w-1/4" />
      </div>
    </main>
  );
}

export default Home;
