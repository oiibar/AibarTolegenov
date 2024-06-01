import pic from "../assests/pic.png";

function Home() {
  return (
    <main className="">
      <div className="flex items-center container justify-between px-20 py-40 pt-60 gap-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Hello, I'm Tolegenov Aibar</h1>
          <p className="text-xl">
            I'm a full stack web developer who is pationed to build modern &
            responsive web apps
          </p>
          <div>
            <button className="btn">
              <a
                href="https://github.com/oiibar/Curriculum_Vitae"
                target="_blank"
                rel="noreferrer"
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
