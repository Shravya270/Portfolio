import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fdfaf5] border-t border-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center font-mono text-gray-700">
        {/* Logo + Email */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <h1 className="text-2xl font-semibold tracking-wide text-gray-800">
            Shravya Shetty
          </h1>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Mail size={16} />
            <a
              href="mailto:shravyashetty246@gmail.com"
              className="hover:underline hover:text-gray-900 transition"
            >
              shravyashetty246@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-16 border-b-2 border-gray-400 mx-auto opacity-60 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-600 text-xs gap-4">
          <p className="tracking-wide">
            © {new Date().getFullYear()} Shravya Shetty · All rights reserved
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/Shravya270"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shravya-shetty27/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
