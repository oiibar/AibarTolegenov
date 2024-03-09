import React from "react";

function Skill({ name, url }) {
  return (
    <li className="mr-6 mb-6">
      <div class="max-w-sm p-6 bg-block rounded-3xl flex flex-col justify-center text-center items-center">
        <img src={url} alt="tech" className="w-20" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </div>
    </li>
  );
}

export default Skill;
