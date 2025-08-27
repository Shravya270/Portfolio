import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Curtains from "./components/Curtains/Curtains";
import CameraSpotlight from "./components/CameraSpotlight/CameraSpotlight";
import TheatreScreen from "./components/TheatreScreen/TheatreScreen";
import About from "./components/About";
import Navbar from "./components/Navbar"; // import your Navbar
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route → your animated theatre intro */}
        <Route path="/" element={<Home />} />

        {/* About route → Navbar + About page */}
        <Route
          path="/about"
          element={
            <>
              <Navbar /> 
              <About />
              <Skills/>
              <Services/>
              <Projects/>
              <Contact/>
              <Footer/>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

// ─────────────── Home Component Handles All Scenes ───────────────
const Home = () => {
  const [scene, setScene] = useState(1);
  const [curtainsDone, setCurtainsDone] = useState(false);
  const [cameraMoved, setCameraMoved] = useState(false);
  const [screenVisible, setScreenVisible] = useState(false);

  /** ─────────────── Scene Handlers ─────────────── */
  const handleNextScene = () => setScene(2);

  const handleCurtainsComplete = () => {
    setCurtainsDone(true);
    setTimeout(() => setCameraMoved(true), 500);
  };

  useEffect(() => {
    if (cameraMoved) {
      const timer = setTimeout(() => setScreenVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [cameraMoved]);

  /** ─────────────── Render ─────────────── */
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-950 relative">
      {/* Scene 1: Countdown */}
      {scene === 1 && <LoadingScreen onFinish={handleNextScene} />}

      {/* Scene 2: Theatre Intro */}
      {scene === 2 && (
        <>
          <CameraSpotlight slideLeft={cameraMoved} />
          <Curtains onComplete={handleCurtainsComplete} />
          {screenVisible && <TheatreScreen slideIn />}
        </>
      )}
    </div>
  );
};

export default App;
