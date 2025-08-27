import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-scroll";
import { FaFilm } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
                 w-[92%] max-w-6xl flex items-center justify-between 
                 px-6 py-3 rounded-full backdrop-blur-md 
                 bg-[#f5f0e6]/40 shadow-[0_4px_20px_rgba(0,0,0,0.2)] 
                 border border-[#d4b48c] border-opacity-40 
                 font-mono tracking-wide"
    >
      {/* Logo with Film Icon */}
      <Link
        to="about"
        smooth={true}
        duration={700}
        offset={-80}
        className="flex items-center gap-2 hover:text-[#c96b85] transition cursor-pointer"
      >
        <FaFilm className="text-xl text-[#b07c4f]" />
        <h1 className="text-2xl font-bold text-[#3b2c20] drop-shadow-sm">
          Shravya Shetty
        </h1>
      </Link>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-[#4a3d30] font-medium">
        {["about", "skills", "services", "work", "contact"].map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={700}
              offset={-80}
              className="hover:text-[#c96b85] hover:drop-shadow-[0_0_6px_#c96b85] transition cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Contact button */}
        <Link
          to="contact"
          smooth={true}
          duration={700}
          offset={-80}
          className="flex items-center gap-2 px-5 py-2 border border-[#b07c4f] 
                     rounded-full bg-[#fffaf3] hover:bg-[#f1e3d3] 
                     hover:shadow-[0_0_10px_#c96b85] transition cursor-pointer"
        >
          Contact <FiArrowUpRight />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
