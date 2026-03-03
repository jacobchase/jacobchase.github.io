import { useState } from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Projects from "./components/projects";
import Timeline from "./components/experience";
import Footer from "./components/footer";
import ContactMe from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Projects />
      <Timeline />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
