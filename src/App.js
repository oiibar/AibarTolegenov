import Home from "./sections/Home";
import Footer from "./components/Footer";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Navbar from "./components/Header";
import "./index.css";
import Experience from "./sections/Experience";

function App() {
  return (
    <div className="min-h-screen bg-[#011724] font-roboto text-white">
      <Navbar></Navbar>
      <div className="flex flex-col gap-16">
        <Home></Home>
        <hr className="container" />
        <Skills></Skills>
        <hr className="container" />
        <Portfolio></Portfolio>
        <hr className="container" />
        <Experience></Experience>
        <hr className="container" />
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
