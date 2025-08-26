import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Curtains from "./components/Curtains/Curtains";
import CameraSpotlight from "./components/CameraSpotlight/CameraSpotlight";

function App() {
  const [scene, setScene] = useState(1);
  const [curtainsDone, setCurtainsDone] = useState(false);

  const handleNextScene = () => setScene((prev) => prev + 1);

  const handleCurtainsComplete = () => {
    setCurtainsDone(true); // Curtains finished
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black relative">
      {/* Scene 1: Countdown + Action! */}
      {scene === 1 && <LoadingScreen onFinish={handleNextScene} />}

      {/* Scene 2: Curtains + Camera */}
      {scene === 2 && (
        <>
          {/* CameraSpotlight always mounted */}
          <CameraSpotlight />

          {/* Curtains animate on top */}
          <Curtains onComplete={handleCurtainsComplete} />
        </>
      )}

      {/* Optional: Any other UI after curtains */}
      {curtainsDone && scene > 2 && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* CameraSpotlight remains visible */}
        </div>
      )}
    </div>
  );
}

export default App;
