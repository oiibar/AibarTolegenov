import React from "react";

function Skill({ name, url }) {
  return (
    <li>
      <div class="bg-white/50 p-4 rounded-3xl flex flex-col justify-center text-center items-center">
        <img src={url} alt="tech" className="w-20" />
        <p class="text-2xl font-bold">{name}</p>
      </div>
    </li>
  );
}

export default Skill;
