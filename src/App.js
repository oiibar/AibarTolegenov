import Home from "./sections/Home";
import Footer from "./components/Footer";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Navbar from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 font-roboto text-white">
      <Navbar></Navbar>
      <div className="flex flex-col gap-32">
        <Home></Home>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
