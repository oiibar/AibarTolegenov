import React from "react";

function Portfolio() {
  return (
    <div className="flex flex-col text-center items-center justify-center mx-auto max-w-screen-xl align-center p-10">
      <h2 className="mb-16 text-xl font-bold">Portfolio</h2>
      <div className="flex">
        <div className="mr-5 w-1/2">
          <div className="bg-black w-20 h-20"></div>
          <a href="/#">Visit</a>
        </div>
        <div className="mr-5 w-1/2">
          <div className="bg-black w-20 h-20"></div>
          <a href="/#">Visit</a>
        </div>
        <div className="w-1/2">
          <div className="bg-black w-20 h-20"></div>
          <a href="/#">Visit</a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
