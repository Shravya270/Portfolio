import { useState } from "react";
import { motion } from "framer-motion";

const Curtains = ({ onComplete }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    // Delay to let curtains animate before moving to next scene
    setTimeout(() => onComplete(), 1500);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Left Curtain */}
      <motion.div
        className="absolute top-0 left-0 h-full w-1/2 bg-red-900 shadow-lg"
        animate={{ x: open ? "-100%" : "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Right Curtain */}
      <motion.div
        className="absolute top-0 right-0 h-full w-1/2 bg-red-900 shadow-lg"
        animate={{ x: open ? "100%" : "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Take Your Seat Button */}
      {!open && (
        <motion.button
          onClick={handleClick}
          className="z-10 px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg shadow-lg text-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Take Your Seat
        </motion.button>
      )}
    </div>
  );
};

export default Curtains;
