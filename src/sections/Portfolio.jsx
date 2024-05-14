import React, { useEffect, useState } from "react";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects([
      {
        name: "Wisely",
        url: "",
      },
      {
        name: "CS Timer",
        url: "",
      },
      {
        name: "Cat Wiki",
        url: "",
      },
      {
        name: "IMDB",
        url: "",
      },
      {
        name: "Prayer",
        url: "",
      },
      {
        name: "Hackathon",
        url: "",
      },
      {
        name: "Weather",
        url: "",
      },
      {
        name: "Talimger",
        url: "",
      },
      {
        name: "Connection",
        url: "",
      },
      {
        name: "Flashcards",
        url: "",
      },
      {
        name: "Quotes",
        url: "",
      },
    ]);
  }, []);
  return (
    <section className="bg-slate-700">
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
