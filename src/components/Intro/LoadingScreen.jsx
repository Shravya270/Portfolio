import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const [count, setCount] = useState(3);
  const [showAction, setShowAction] = useState(false);

  // Countdown logic
  useEffect(() => {
    if (count === 0) {
      setShowAction(true);

      const timer = setTimeout(() => {
        onFinish(); // move to Curtains
      }, 1500); // delay for clapboard + action animation

      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 800);

    return () => clearInterval(interval);
  }, [count, onFinish]);

  // Generate random dust positions
  const dustParticles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <div className="relative w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Dust / Film Grain Particles */}
      {dustParticles.map((dust) => (
        <motion.div
          key={dust.id}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: `${dust.size}px`,
            height: `${dust.size}px`,
            left: dust.left,
            top: dust.top,
          }}
          animate={{
            y: [0, -5, 0],
            x: [0, 3, -3, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 2,
            delay: dust.delay,
          }}
        />
      ))}

      {/* Countdown Numbers */}
      {!showAction && count > 0 && (
        <motion.div
          key={count}
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{
            opacity: [0, 1, 0.8, 1],
            scale: [0.8, 1.1, 0.95, 1],
            rotate: [-2, 2, -1, 0],
          }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          {/* Outer Circle */}
          <motion.div
            className="absolute rounded-full border-4 border-white"
            style={{ width: "14rem", height: "14rem" }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
          {/* Inner Circle */}
          <motion.div
            className="absolute rounded-full border-2 border-white"
            style={{ width: "10rem", height: "10rem" }}
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
          <div className="text-white text-[10rem] font-mono font-bold drop-shadow-lg select-none">
            {count}
          </div>
        </motion.div>
      )}

   {/* Clapboard + ACTION! */}
{showAction && (
  <motion.div
    className="flex flex-col items-center justify-center"
    initial={{ opacity: 0, scale: 0.5, y: -50 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    {/* Clapboard SVG */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" className="w-80 h-auto">
      {/* ===== MAIN BODY WITH BORDER ===== */}
      <rect
        x="0"
        y="90"
        width="500"
        height="230"
        fill="black"
        stroke="white"
        strokeWidth="6"
        rx="5"
      />
      
      {/* Horizontal lines */}
      <line x1="20" y1="140" x2="480" y2="140" stroke="white" strokeWidth="3" />
      <line x1="20" y1="190" x2="480" y2="190" stroke="white" strokeWidth="3" />
      <line x1="20" y1="240" x2="480" y2="240" stroke="white" strokeWidth="3" />
      
      {/* Vertical dividers */}
      <line x1="160" y1="260" x2="160" y2="310" stroke="white" strokeWidth="3" />
      <line x1="340" y1="260" x2="340" y2="310" stroke="white" strokeWidth="3" />

      {/* ===== TOP CLAPPER WITH BORDER ===== */}
      <motion.g
        initial={{ rotate: 0, originX: 0, originY: 0 }}
        animate={{ rotate: -25 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Pin joint */}
        <circle cx="25" cy="75" r="10" fill="white" />
        
        {/* Black base */}
        <rect x="0" y="40" width="500" height="50" fill="black" />
        
        {/* Stripes */}
        <pattern
          id="stripes"
          width="60"
          height="200"
          patternUnits="userSpaceOnUse"
          patternTransform="skewX(-20)"
        >
          <rect width="30" height="200" fill="white" />
        </pattern>
        <rect x="0" y="40" width="500" height="50" fill="url(#stripes)" />
        
        {/* White Border for Clapper */}
        <rect
          x="0"
          y="40"
          width="500"
          height="50"
          fill="none"
          stroke="white"
          strokeWidth="5"
          rx="4"
        />
      </motion.g>
    </svg>
    
    <motion.p
      className="text-white font-bold text-4xl mt-2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      ACTION!
    </motion.p>
  </motion.div>
)}


    </div>
  );
};

export default LoadingScreen;
