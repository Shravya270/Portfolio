import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TheatreScreen = ({ slideIn }) => {
  const [screenColor, setScreenColor] = useState("#EAE2C8");
  const [projectorOn, setProjectorOn] = useState(false);
  const [showExplore, setShowExplore] = useState(false);

  const controls = useAnimation();
  const screenControls = useAnimation();
  const seatControls = useAnimation();

  const navigate = useNavigate(); // ✅ Added router navigation

  const colors = ["#EAE2C8", "#F5F5DC", "#FDF5E6", "#FFFACD"];

  // cycle screen background color
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      setScreenColor(colors[randomIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // projector beam + show Explore button
  useEffect(() => {
    if (slideIn) {
      controls.start("extended").then(() => {
        controls.start("fadeOut");
        setTimeout(() => setProjectorOn(true), 1000);
        setTimeout(() => setShowExplore(true), 3800);
      });
    }
  }, [slideIn, controls]);

  // ✅ Explore handler with cinematic zoom then navigate to /about
  const handleExplore = async () => {
    // fade out seats
    await seatControls.start({
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    });

    // zoom into screen
    await screenControls.start({
      scale: 3.5,
      y: -150,
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    });

    // navigate to About page
    navigate("/about");
  };

  const rows = 5;
  const seatsPerRow = 20;

  const beamVariants = {
    hidden: { opacity: 0, width: 0 },
    sway: {
      opacity: 1,
      rotate: [1, -1, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
    extended: {
      opacity: 1,
      width: "2400px",
      rotate: [1, -1, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.9,
      },
    },
    fadeOut: {
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-950 overflow-hidden font-inter"
      initial={{ x: "100%" }}
      animate={{ x: slideIn ? 0 : "100%" }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
    >
      {/* Spotlight beam */}
      <motion.div
        variants={beamVariants}
        initial="hidden"
        animate={slideIn ? controls : "sway"}
        className="absolute z-0 left-0 top-0 h-full 
                   bg-gradient-to-r from-yellow-200/70 via-yellow-100/20 to-transparent 
                   blur-2xl [clip-path:polygon(0%_43%,80%_0%,80%_80%,0%_56%)] origin-left"
        style={{ width: "500px" }}
      />

      {/* Cinema screen */}
      <motion.div
        animate={screenControls}
        className="relative z-10 w-10/12 max-w-5xl h-72 sm:h-80 md:h-[26rem] lg:h-[30rem] 
                   flex flex-col items-center justify-start px-6 text-center
                   border-[3px] border-gray-900 rounded-lg shadow-2xl pt-8"
        style={{
          backgroundColor: screenColor,
          transition: "background-color 1s ease-in-out",
          boxShadow: projectorOn
            ? "0 0 180px 80px rgba(255,255,200,0.35), inset 0 0 40px rgba(0,0,0,0.7)"
            : "0 0 60px 20px rgba(255,255,200,0.15), inset 0 0 20px rgba(0,0,0,0.6)",
          background: `radial-gradient(circle at center, ${screenColor} 85%, rgba(0,0,0,0.6) 100%)`,
        }}
        initial={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        {/* Photo */}
        <motion.img
          src="/PHOTO.jpg"
          alt="My Photo"
          className="w-20 h-20 md:w-32 md:h-32 rounded-full mb-4 border border-crimson-700 shadow-lg -mt-4"
          initial={{ opacity: 0, y: 40 }}
          animate={projectorOn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />

        {/* Name */}
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2"
          style={{ color: "crimson", fontFamily: "'Cinzel Decorative', serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={projectorOn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          SHRAVYA P SHETTY
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-md md:text-xl lg:text-2xl italic mb-4"
          style={{ color: "crimson", fontFamily: "'Cinzel', serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={projectorOn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
        >
          Full Stack Developer based in Mangalore
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed"
          style={{ color: "crimson", fontFamily: "'Cinzel', serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={projectorOn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 2.6 }}
        >
          I am a versatile software engineer, blockchain innovator, and full-stack
          developer with hands-on experience in SAP, web technologies, and emerging
          tech.
        </motion.p>

        {/* Explore More Button */}
        {showExplore && (
          <motion.button
            onClick={handleExplore}
            className="mt-6 px-4 py-2 text-sm bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-500 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            🎥 Explore More
          </motion.button>
        )}
      </motion.div>

      {/* Rows of seats */}
      <motion.div
        animate={seatControls}
        className="relative w-full flex flex-col items-center mt-6 space-y-1 z-10"
      >
        {Array.from({ length: rows }).map((_, rowIndex) => {
          const seatCount = seatsPerRow - rowIndex;
          return (
            <div
              key={rowIndex}
              className="flex justify-center space-x-1"
              style={{
                transform: `scale(${0.9 - rowIndex * 0.05}) translateY(${rowIndex * -6}px)`,
                zIndex: rows - rowIndex,
              }}
            >
              {Array.from({ length: seatCount }).map((_, seatIndex) => (
                <div
                  key={seatIndex}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-red-700 rounded-t-lg shadow-md"
                />
              ))}
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default TheatreScreen;
