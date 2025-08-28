import React from "react";
import { motion } from "framer-motion";

const CameraSpotlight = ({ slideLeft }) => {
  const dustParticles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: Math.random() * 600,
    top: Math.random() * 400,
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
      rotate: [1, -1, 0],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    },
    extended: {
      rotate: [1, -1, 0],
      width: "2500px", // extend beam toward theatre screen
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const dustVariants = {
    float: {
      y: [0, -10, 0],
      x: [0, 5, -5, 0],
      opacity: [0.1, 0.4, 0.1],
      transition: {
        repeat: Infinity,
        duration: 4 + Math.random() * 3,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: slideLeft ? -300 : 0 }} // camera slides left
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative w-full h-screen bg-gray-950 overflow-hidden flex items-center"
    >
      <div className="relative flex items-center">
        {/* Camera Silhouette */}
        <motion.div
          className="relative z-20 ml-10 w-[280px] h-auto"
          variants={cameraVariants}
          animate="shake"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-full h-auto fill-black stroke-white stroke-[4]"
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
            <circle cx="300" cy="100" r="20" className="fill-white" />
            <circle cx="340" cy="130" r="20" className="fill-white" />
            <circle cx="260" cy="130" r="20" className="fill-white" />
            <circle cx="260" cy="70" r="20" className="fill-white" />
            <circle cx="340" cy="70" r="20" className="fill-white" />

            {/* Small reel */}
            <circle cx="180" cy="120" r="60" />
            <circle cx="180" cy="120" r="15" className="fill-white" />
            <circle cx="210" cy="140" r="15" className="fill-white" />
            <circle cx="150" cy="140" r="15" className="fill-white" />
            <circle cx="150" cy="100" r="15" className="fill-white" />
            <circle cx="210" cy="100" r="15" className="fill-white" />
          </svg>
        </motion.div>

        {/* Spotlight Beam */}
        <motion.div
          variants={beamVariants}
          animate={slideLeft ? "extended" : "sway"}
          className="
            absolute z-10 left-[320px] top-0
            h-full
            bg-gradient-to-r from-yellow-300/90 via-yellow-100/15 to-transparent
            blur-2xl
            [clip-path:polygon(0%_34%,120%_0%,120%_100%,0%_63%)]
            origin-left
          "
          //style={{ width: slideLeft ? "2500px" : "1500px" }} // smooth extension
        />

        {/* Dust Particles */}
        {dustParticles.map((dust) => (
          <motion.div
            key={dust.id}
            variants={dustVariants}
            initial={{ opacity: 0.1 }}
            animate="float"
            transition={{ delay: dust.delay }}
            className="absolute bg-white rounded-full opacity-20 z-20"
            style={{
              width: `${dust.size}px`,
              height: `${dust.size}px`,
              top: `${50 + dust.top}px`,
              left: `calc(320px + ${dust.left}px)`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CameraSpotlight;
