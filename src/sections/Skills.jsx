import React, { useEffect, useState } from "react";
import Skill from "../components/Skill";
import html from "../assests/skills/html.svg";
import css from "../assests/skills/css.svg";
import js from "../assests/skills/js.svg";
import ts from "../assests/skills/ts.svg";
import nextjs from "../assests/skills/nextjs.svg";
import nestjs from "../assests/skills/nestjs.svg";
import tailwind from "../assests/skills/tailwind.svg";
import postgresql from "../assests/skills/postgresql.svg";
import express from "../assests/skills/express.svg";
import git from "../assests/skills/git.svg";

function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills([
      {
        name: "HTML",
        url: html,
      },
      {
        name: "CSS",
        url: css,
      },
      {
        name: "Tailwind",
        url: tailwind,
      },
      {
        name: "JS",
        url: js,
      },
      {
        name: "TS",
        url: ts,
      },
      {
        name: "NextJS",
        url: nextjs,
      },
      {
        name: "NestJS",
        url: nestjs,
      },
      {
        name: "GIT",
        url: git,
      },
      {
        name: "ExpressJS",
        url: express,
      },
      {
        name: "PostgreSQL",
        url: postgresql,
      },
    ]);
  }, []);
  return (
    <section className="bg-background">
      <div className="flex flex-col text-center items-center justify-center mx-auto max-w-screen-xl align-center p-10">
        <h2 className="mb-16 text-xl font-bold">Skill I acquired</h2>
        <ul className="flex flex-wrap text-center items-center justify-center">
          {skills.map((skill) => (
            <Skill key={skill.name} name={skill.name} url={skill.url} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
