import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Curtains = ({ onComplete }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      // After animation duration, signal parent
      setTimeout(() => onComplete(), 1500);
    }, 500); // optional delay before opening
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Gradient pattern for curtain folds
  const curtainPattern = {
    background: `
      repeating-linear-gradient(
        90deg,
        #7f0000 0px,       /* deep red */
        #7f0000 6px,
        #b71c1c 6px,      /* brighter red */
        #b71c1c 12px,
        #7f0000 12px,
        #7f0000 18px
      )
    `,
    backgroundSize: "20px 100%",
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen pointer-events-none overflow-hidden">
      {/* Left Curtain */}
      <motion.div
        className="absolute top-0 left-0 h-full w-1/2 z-30 shadow-2xl"
        style={curtainPattern}
        animate={{ x: open ? "-100%" : "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Right Curtain */}
      <motion.div
        className="absolute top-0 right-0 h-full w-1/2 z-30 shadow-2xl"
        style={curtainPattern}
        animate={{ x: open ? "100%" : "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Curtains;
