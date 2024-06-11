import pic from "../assests/pic.png";
import right_white from "../assests/right_white.svg";

function Home() {
  return (
    <main id="home">
      <div className="flex items-center container justify-between px-20 py-40 pt-60 gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">Hi, I'm Aibar</h1>
          <p className="text-4xl font-bold text-[#5092d4]">
            Full stack developer
          </p>
          <p className="text-xl">
            I'm a full stack web developer who is pationed to build modern &
            responsive web apps
          </p>
          <div className="flex gap-2">
            <button className="btn">
              <a
                href="https://contact-me-neon.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                Get in touch <img src={right_white} className="w-6" alt="->" />
              </a>
            </button>
            <button className="btn">
              <a
                href="https://github.com/oiibar/Curriculum_Vitae"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                Resume
              </a>
            </button>
          </div>
        </div>

        <div>
          <img alt="me" src={pic} className="w-80" />
        </div>
      </div>
    </main>
  );
}

export default Home;
