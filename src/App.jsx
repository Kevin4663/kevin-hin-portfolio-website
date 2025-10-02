import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="bg-base-100 text-base-content">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Resume />
      </main>
    </div>
  );
}

export default App;
