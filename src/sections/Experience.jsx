import React from "react";

function Experience() {
  return (
    <section>
      <div className="container p-10 flex flex-col gap-4 items-center justify-center">
        <h2 className="title">Experience</h2>
        <div className="flex items-center justify-between gap-24">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-bold">Web Dev Mentor</h2>
              <p>IT club | 2022 - 2023</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Infomatrix Asia</h2>
              <p>Almaty | June 2022</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Mentor in Talimger</h2>
              <p>Volunteer | 2022 - 2023</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Hackathons</h2>
              <p>Oskemen, Semey | 2022 - 2023</p>
            </div>
          </div>
          <div className="border-8 border-white p-32 rounded-md">Display</div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
