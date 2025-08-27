import React, { useState, useEffect } from "react";
import Curtains from "../Curtains/Curtains";
import CameraSpotlight from "../CameraSpotlight/CameraSpotlight";
import TheatreScreen from "../TheatreScreen/TheatreScreen";

const OpeningScene = () => {
  const [countdown, setCountdown] = useState(5);
  const [curtainsDone, setCurtainsDone] = useState(false);
  const [cameraSlide, setCameraSlide] = useState(false);
  const [screenSlide, setScreenSlide] = useState(false);

  // Countdown
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  // Trigger camera + theatre sequence
  useEffect(() => {
    if (curtainsDone) {
      setCameraSlide(true); // camera slides left
      const timer = setTimeout(() => setScreenSlide(true), 2000); // theatre screen slides in
      return () => clearTimeout(timer);
    }
  }, [curtainsDone]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {countdown > 0 && (
        <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold z-50">
          {countdown}
        </div>
      )}

      {/* Curtains */}
      {!curtainsDone && <Curtains onComplete={() => setCurtainsDone(true)} />}

      {/* Camera + spotlight */}
      <CameraSpotlight slideLeft={cameraSlide} />

      {/* Theatre screen slides in */}
      {screenSlide && <TheatreScreen slideIn={screenSlide} />}
    </div>
  );
};

export default OpeningScene;
