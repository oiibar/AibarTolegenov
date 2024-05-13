import React from "react";

function Portfolio() {
  return (
    <section className="bg-green-600 flex flex-col gap-2 text-center items-center justify-center mx-auto">
      <h2 className="text-xl font-bold">Portfolio</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className=" bg-red-600 w-96 h-96"></div>
        <div className=" bg-red-600 w-96 h-96"></div>
        <div className=" bg-red-600 w-96 h-96"></div>
      </div>
    </section>
  );
}

export default Portfolio;
