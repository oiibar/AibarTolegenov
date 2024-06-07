import React, { useEffect, useState } from "react";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setProjects([
      {
        name: "CS Timer",
        url: "https://cs-timer-cli.onrender.com/",
        gh: "https://github.com/oiibar/CS_Timer",
      },
      {
        name: "Gym",
        url: "https://gym-cli.onrender.com/",
        gh: "https://github.com/oiibar/Gym",
      },
      {
        name: "Prayer",
        url: "https://prayer-cli.onrender.com/",
        gh: "https://github.com/oiibar/Prayer",
      },
      {
        name: "Hackathon",
        url: "https://hackathon2-cli.onrender.com/",
        gh: "https://github.com/oiibar/Hackathon2",
      },
      {
        name: "Cat Wiki",
        url: "https://cat-wiki-cli.onrender.com/",
        gh: "https://github.com/oiibar/Cat_Wiki",
      },
      {
        name: "IMDB",
        url: "https://imdb-clone-5wl7.onrender.com/",
        gh: "https://github.com/oiibar/IMDB_Clone",
      },
      {
        name: "Weather",
        url: "https://weather-app-ten-ecru-51.vercel.app/",
        gh: "https://github.com/oiibar/Weather_App",
      },
      {
        name: "Talimger",
        url: "https://talimger.vercel.app/",
        gh: "https://github.com/oiibar/Talimger",
      },
      {
        name: "Connection",
        url: "https://connection-cli.onrender.com/",
        gh: "https://github.com/oiibar/Connection",
      },
      {
        name: "Flashcards",
        url: "https://flashcards-054o.onrender.com/",
        gh: "https://github.com/oiibar/Flashcards",
      },
      {
        name: "Quotes",
        url: "https://quotes-ashy.vercel.app/",
        gh: "https://github.com/oiibar/Quotes",
      },
    ]);
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section>
      <div className="container p-10 flex flex-col gap-2 items-center justify-center">
        <h2 className="title">Projects</h2>
        <div className="flex flex-wrap items-center justify-center">
          {displayedProjects.map((project, index) => (
            <div
              className="flex items-center w-full justify-between"
              key={project.name}
            >
              {index % 2 === 0 ? (
                <>
                  <a
                    className="project"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.name}
                  </a>
                  <div className="w-80 flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolores nobis ab delectus distinctio optio. Vel incidunt
                      accusamus dolorem nemo. Autem.
                    </p>
                    <a
                      href={project.gh}
                      target="_blank"
                      rel="noreferrer"
                      className="btn w-fit"
                    >
                      Details
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-80 flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolores nobis ab delectus distinctio optio. Vel incidunt
                      accusamus dolorem nemo. Autem.
                    </p>
                    <a
                      href={project.gh}
                      target="_blank"
                      rel="noreferrer"
                      className="btn w-fit"
                    >
                      Details
                    </a>
                  </div>
                  <a
                    className="project"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.name}
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={toggleShowAll}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
