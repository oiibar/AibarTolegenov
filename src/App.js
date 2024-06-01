import Home from "./sections/Home";
import Footer from "./components/Footer";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Navbar from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-orange-50 font-roboto text-slate-900">
      <Navbar></Navbar>
      <div className="flex flex-col gap-28">
        <Home></Home>
        <hr className="container" />
        <Skills></Skills>
        <hr className="container" />
        <Portfolio></Portfolio>
        <hr className="container" />
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
