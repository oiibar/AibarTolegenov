import React, { useEffect, useState } from "react";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects([
      {
        name: "CS Timer",
        url: "https://cs-timer-cli.onrender.com/",
      },
      {
        name: "Gym",
        url: "https://gym-cli.onrender.com/",
      },
      {
        name: "Wisely",
        url: "https://wisely-vgxa.onrender.com/",
      },
      {
        name: "Prayer",
        url: "https://prayer-cli.onrender.com/",
      },
      {
        name: "Hackathon",
        url: "https://hackathon2-cli.onrender.com/",
      },
      {
        name: "Cat Wiki",
        url: "https://cat-wiki-cli.onrender.com/",
      },
      {
        name: "IMDB",
        url: "https://imdb-clone-5wl7.onrender.com/",
      },
      {
        name: "Weather",
        url: "https://weather-app-ten-ecru-51.vercel.app/",
      },
      {
        name: "Talimger",
        url: "https://talimger.vercel.app/",
      },
      {
        name: "Connection",
        url: "https://connection-cli.onrender.com/",
      },
      {
        name: "Flashcards",
        url: "https://flashcards-054o.onrender.com/",
      },
      {
        name: "Quotes",
        url: "https://quotes-ashy.vercel.app/",
      },
    ]);
  }, []);
  return (
    <section className="">
      <div className="container p-10 flex flex-col gap-2 text-center items-center justify-center">
        <h2 className="title">Portfolio</h2>
        <ul className="flex gap-4 flex-wrap items-center justify-center text-center">
          {projects.map((project) => (
            <a
              className="project"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              {project.name}
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
