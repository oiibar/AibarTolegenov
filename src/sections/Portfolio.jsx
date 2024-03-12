import React from "react";

function Portfolio() {
  return (
    <section className="bg-back">
      <div className="flex flex-col text-center items-center justify-center mx-auto max-w-screen-xl p-10">
        <h2 className="mb-16 text-xl font-bold">Portfolio</h2>
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-1/3 flex flex-col items-center mb-5">
            <div className="relative bg-blue hover:bg-hov w-96 h-96 flex items-center justify-center">
              <div className="absolute">
                <a href="/#" className="text-white font-bold text-xl">
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center mb-5">
            <div className="relative bg-blue hover:bg-hov w-96 h-96 flex items-center justify-center">
              <div className="absolute">
                <a href="/#" className="text-white font-bold text-xl">
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center mb-5">
            <div className="relative bg-blue hover:bg-hov w-96 h-96 flex items-center justify-center">
              <div className="absolute">
                <a href="/#" className="text-white font-bold text-xl">
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center mb-5">
            <div className="relative bg-blue hover:bg-hov w-96 h-96 flex items-center justify-center">
              <div className="absolute">
                <a href="/#" className="text-white font-bold text-xl">
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center mb-5">
            <div className="relative bg-blue hover:bg-hov w-96 h-96 flex items-center justify-center">
              <div className="absolute">
                <a href="/#" className="text-white font-bold text-xl">
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
