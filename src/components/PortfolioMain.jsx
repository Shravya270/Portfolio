import React, { useState } from "react";
import TheatreScreen from "./TheatreScreen";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

const PortfolioMain = () => {
  const [slideIn, setSlideIn] = useState(true);

  return (
    <div className="w-full h-full bg-gray-50">
      <TheatreScreen slideIn={slideIn} setSlideIn={setSlideIn} />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default PortfolioMain;
