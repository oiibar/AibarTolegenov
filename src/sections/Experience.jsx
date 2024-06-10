import React, { useEffect, useState } from "react";

function Experience() {
  const [exp, setExp] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setExp([
      {
        title: "Web Dev Mentor",
        details: "IT club | 2022 - 2023",
        text: [
          "Teached HTML, CSS, JS for a group of 15 students in high school",
          "Responsibilities: Mentoring, assisting, making materials",
        ],
      },
      {
        title: "Infomatrix Asia",
        details: "Almaty | June 2022",
        text: [
          "Participated in the International robotics competition",
          "Built robots with a teammate and run it through tests",
        ],
      },
      {
        title: '"Talimger" mentor',
        details: "Volunteer | 2022 - 2023",
        text: [
          "Built a fully functioning website for participants & mentors of the team",
        ],
      },
      {
        title: "Hackathons",
        details: "Oskemen, Semey | 2022 - 2023",
        text: [
          "Oskemen #1 Hackathon Bronze 2022",
          "Oskemen #2 Hackathon Silver 2023",
          "Semey Hackathon Certificate 2023 (React Native)",
        ],
      },
    ]);
  }, []);

  return (
    <section id="experience">
      <div className="container p-10 flex flex-col gap-4 items-center justify-center">
        <h2 className="title">Experience</h2>
        <div className="flex items-center justify-between gap-24">
          <div className="flex flex-col gap-2">
            {exp.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer p-2 transition-border duration-100 ease-in-out ${
                  activeIndex === index
                    ? "border-l-4 border-[#5092d4]"
                    : "hover:border-t-0 hover:border-l-4 hover:border-r-0 hover:border-b-0 hover:border-[#5092d4]"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-white/60">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="border-4 border-white p-2 flex flex-col gap-2 rounded-md w-64 h-64 ">
            {exp[activeIndex]?.text.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
