import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Curtains from "./components/Curtains/Curtains";
import CameraSpotlight from "./components/CameraSpotlight/CameraSpotlight";

function App() {
  const [scene, setScene] = useState(1);

  return (
    <div className="App">
      {scene === 1 && <LoadingScreen onFinish={() => setScene(2)} />}
      {scene === 2 && <Curtains onComplete={() => setScene(3)} />}
      {scene === 3 && <CameraSpotlight />}
    </div>
  );
}

export default App;
