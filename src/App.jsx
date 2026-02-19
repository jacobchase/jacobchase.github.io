import { useState } from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
