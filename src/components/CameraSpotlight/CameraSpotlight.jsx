import React from "react";
import { motion } from "framer-motion";

const CameraSpotlight = () => {
  const dustParticles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: Math.random() * 400, // spread along beam
    top: Math.random() * -300,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
  }));

  const cameraVariants = {
    shake: {
      rotate: [0, 0.5, -0.5, 0],
      transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
    },
  };

  const beamVariants = {
    sway: {
      rotate: [0.5, -0.5, 0],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    },
  };

  const dustVariants = {
    float: {
      y: [0, -10, 0],
      x: [0, 5, -5, 0],
      opacity: [0.1, 0.3, 0.1],
      transition: {
        repeat: Infinity,
        duration: 4 + Math.random() * 3,
        ease: "linear",
      },
    },
  };

  return (
    <div className="relative w-full h-screen bg-gray-950 overflow-hidden flex items-center">
      <div className="relative flex items-center">
        {/* Camera Silhouette */}
        <motion.div
          className="relative z-20 ml-10"
          variants={cameraVariants}
          animate="shake"
          style={{ width: "280px", height: "auto" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="black"
            stroke="white"
            strokeWidth="4"
          >
            {/* Tripod legs */}
            <path d="M220 310 L160 512 L200 512 L260 310 Z" />
            <path d="M260 310 L320 512 L360 512 L300 310 Z" />

            {/* Camera body */}
            <rect x="160" y="200" width="180" height="120" />

            {/* Lens */}
            <path d="M340 200 L512 170 L512 330 L340 320 Z" />

            {/* Big reel */}
            <circle cx="300" cy="100" r="80" />
            <circle cx="300" cy="100" r="20" fill="white" />
            <circle cx="340" cy="130" r="20" fill="white" />
            <circle cx="260" cy="130" r="20" fill="white" />
            <circle cx="260" cy="70" r="20" fill="white" />
            <circle cx="340" cy="70" r="20" fill="white" />

            {/* Small reel */}
            <circle cx="180" cy="120" r="60" />
            <circle cx="180" cy="120" r="15" fill="white" />
            <circle cx="210" cy="140" r="15" fill="white" />
            <circle cx="150" cy="140" r="15" fill="white" />
            <circle cx="150" cy="100" r="15" fill="white" />
            <circle cx="210" cy="100" r="15" fill="white" />
          </svg>
        </motion.div>

        {/* Spotlight Beam */}
        <motion.div
          className="absolute z-10"
          variants={beamVariants}
          animate="sway"
          style={{
            left: "320px", // start at camera lens
            top: "50%",
            transform: "translateY(-50%)",
            width: "2000px",
            height: "1000px",
            background:
              "radial-gradient(ellipse at left, rgba(255,255,220,0.6) 0%, rgba(255,255,200,0.15) 40%, transparent 80%)",
            filter: "blur(40px)",
            transformOrigin: "left center",
          }}
        />

        {/* Dust Particles inside beam */}
        {dustParticles.map((dust) => (
          <motion.div
            key={dust.id}
            className="absolute bg-white rounded-full opacity-20 z-20"
            style={{
              width: `${dust.size}px`,
              height: `${dust.size}px`,
              top: `50%`,
              left: `calc(320px + ${dust.left}px)`,
            }}
            variants={dustVariants}
            initial={{ opacity: 0.1 }}
            animate="float"
            transition={{ delay: dust.delay }}
          />
        ))}
      </div>
    </div>
  );
};

export default CameraSpotlight;
