import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const [count, setCount] = useState(5);

  // Countdown logic
  useEffect(() => {
    if (count === 0) {
      const timer = setTimeout(onFinish, 500);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 800);

    return () => clearInterval(interval);
  }, [count, onFinish]);

  // Generate random dust positions & animation delays
  const dustParticles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100 + "%",   // random horizontal position
    top: Math.random() * 100 + "%",    // random vertical position
    size: Math.random() * 2 + 1,       // size between 1-3px
    delay: Math.random() * 2,          // staggered animation delay
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
            y: [0, -5, 0], // float slightly up and down
            x: [0, 3, -3, 0], // subtle side movement
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 2,
            delay: dust.delay,
          }}
        />
      ))}

      {/* Countdown Number with Circles */}
      {count > 0 && (
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
          {/* Countdown Number */}
          <div className="text-white text-[10rem] font-mono font-bold drop-shadow-lg select-none">
            {count}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LoadingScreen;
