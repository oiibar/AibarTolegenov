import React from "react";

function Skill({ name, url }) {
  return (
    <li>
      <div class="bg-white p-4 rounded-3xl flex flex-col justify-center text-center items-center">
        <img src={url} alt="tech" className="w-20" />
        <p class="text-2xl font-bold text-[#011724]">{name}</p>
      </div>
    </li>
  );
}

export default Skill;
