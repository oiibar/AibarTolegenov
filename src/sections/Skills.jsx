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
import react from "../assests/skills/react.png";
import vue from "../assests/skills/vue.png";

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
      {
        name: "React",
        url: react,
      },
      {
        name: "Vue",
        url: vue,
      },
    ]);
  }, []);
  return (
    <section className="">
      <div className="container p-10 flex flex-col gap-4 items-center justify-center">
        <h2 className="title">Skills I acquired</h2>
        <ul className="flex flex-wrap gap-4 items-center justify-center">
          {skills.map((skill) => (
            <Skill key={skill.name} name={skill.name} url={skill.url} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
