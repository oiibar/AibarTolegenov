import React, { useEffect, useState } from "react";

function Experience() {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    setExp([
      {
        title: "Web Dev Mentor",
        details: "IT club | 2022 - 2023",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, blanditiis.",
      },
      {
        title: "Infomatrix Asia",
        details: "Almaty | June 2022",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, blanditiis.",
      },
      {
        title: "Mentor in Talimger",
        details: "Volunteer | 2022 - 2023",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, blanditiis.",
      },
      {
        title: "Hackathons",
        details: "Oskemen, Semey | 2022 - 2023",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, blanditiis.",
      },
    ]);
  }, []);
  return (
    <section>
      <div className="container p-10 flex flex-col gap-4 items-center justify-center">
        <h2 className="title">Experience</h2>
        <div className="flex items-center justify-between gap-24">
          <div className="flex flex-col gap-2">
            {exp.map((item) => (
              <div className="cursor-pointer hover:bg-white/50 p-2 transition-colors duration-100 ease-in-out">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p>{item.details}</p>
              </div>
            ))}
          </div>

          <div className="border-4 border-slate-900 p-2 rounded-md w-64 h-64">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              blanditiis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
