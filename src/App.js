import React from "react";

// Component
import Navbar from "./components/Navbar";

// Page
import About from "./pages/About";
import Archiving from "./pages/Archiving";
import Career from "./pages/Career";
import Intro from "./pages/Intro";
import Project from "./pages/Projects";
import Skill from "./pages/Skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Archiving />
      <Skill />
      <Project />
      <Career />
    </div>
  );
}

export default App;
