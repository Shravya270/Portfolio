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

  return (
    <div className="absolute top-0 left-0 w-screen h-screen pointer-events-none">
      {/* Left Curtain */}
      <motion.div
        className="absolute top-0 left-0 h-full w-1/2 bg-red-900 shadow-lg z-30"
        animate={{ x: open ? "-100%" : "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Right Curtain */}
      <motion.div
        className="absolute top-0 right-0 h-full w-1/2 bg-red-900 shadow-lg z-30"
        animate={{ x: open ? "100%" : "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Curtains;
