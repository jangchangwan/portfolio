import React from "react";

// Component
import Navbar from "./components/Navbar";

// Page
import About from "./pages/About";
import Archiving from "./pages/Archiving";
// import Career from "./pages/Career";
import Intro from "./pages/Intro";
import Project from "./pages/Projects";
import Skill from "./pages/Skill";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skill />
      <Archiving />
      <Project />
      {/* <Career /> */}
      <Footer />
    </div>
  );
}

export default App;
