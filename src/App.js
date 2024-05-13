import Home from "./sections/Home";
import Footer from "./components/Footer";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import "./index.css";
import Contact from "./sections/Contact";
import Navbar from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 font-roboto text-white pb-20">
      <Navbar></Navbar>
      <div className="container flex flex-col gap-20">
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
