import About from "./components/About";
// import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className=" max-w-[1440px] mx-[auto] my-0">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
