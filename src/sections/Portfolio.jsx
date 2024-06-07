import React, { useEffect, useState } from "react";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setProjects([
      {
        name: "CS Timer",
        desc: "This is a user-friendly and simple version of a popular speecubing timer web app with user authentication",
        url: "https://cs-timer-cli.onrender.com/",
        gh: "https://github.com/oiibar/CS_Timer",
      },
      {
        name: "Gym",
        desc: "This is an user-friendly simple application to keep track of your workout/exercises. I decided to build this project to have my personal app to keep track of my workout.",
        url: "https://gym-cli.onrender.com/",
        gh: "https://github.com/oiibar/Gym",
      },
      {
        name: "Prayer",
        desc: "This project is aimed to offer an user-friendly app to keep track of praying time",
        url: "https://prayer-cli.onrender.com/",
        gh: "https://github.com/oiibar/Prayer",
      },
      {
        name: "Hackathon",
        desc: "This project was build during 2-day hackathon and it is a task list web app with user sign in/sign out",
        url: "https://hackathon2-cli.onrender.com/",
        gh: "https://github.com/oiibar/Hackathon2",
      },
      {
        name: "Cat Wiki",
        desc: "This app that I was workign on during a coding bootcamp provides user with a concise information about selected cat breed",
        url: "https://cat-wiki-cli.onrender.com/",
        gh: "https://github.com/oiibar/Cat_Wiki",
      },
      {
        name: "IMDB",
        desc: "This is a movie app with search functionality and description modal window of each movie and user friendly UI/UX",
        url: "https://imdb-clone-5wl7.onrender.com/",
        gh: "https://github.com/oiibar/IMDB_Clone",
      },
      {
        name: "Weather",
        desc: "This is a movie app with search functionality and description modal window of each movie and user friendly UI/UX",
        url: "https://weather-app-ten-ecru-51.vercel.app/",
        gh: "https://github.com/oiibar/Weather_App",
      },
      {
        name: "Talimger",
        desc: "I built this webpage for a volunteering organization which I was an active member of in high school as a contribution. All new members of a club use this website to familiarize themselves with our organization and receive support anytime",
        url: "https://talimger.vercel.app/",
        gh: "https://github.com/oiibar/Talimger",
      },
      {
        name: "Connection",
        desc: "A web application that enables users to communicate in the chat in real-time. This app creates private rooms for chatting",
        url: "https://connection-cli.onrender.com/",
        gh: "https://github.com/oiibar/Connection",
      },
      {
        name: "Flashcards",
        desc: "This is a budget manager app with full user authentication and user friendly UI/UX",
        url: "https://flashcards-054o.onrender.com/",
        gh: "https://github.com/oiibar/Flashcards",
      },
      {
        name: "URL Shortener",
        desc: "This is a budget manager app with full user authentication and user friendly UI/UX",
        url: "https://url-shortener-g03r.onrender.com/",
        gh: "https://github.com/oiibar/Url_Shortener",
      },
      {
        name: "Quotes",
        desc: "This web app simply generates new popular quote on refresh",
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
                    <p>{project.desc}</p>
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
                    <p>{project.desc}</p>
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
