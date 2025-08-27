import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        {/* Logo + Email */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <h1 className="text-3xl font-bold">
            Shravya Shetty
          </h1>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={18} />
            <a
              href="mailto:vinithshetty9372@gmail.com"
              className="hover:underline"
            >
              shravyashetty246@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm gap-4">
          <p>© {new Date().getFullYear()} Shravya Shetty. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="https://github.com/Shravya270"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/shravya-shetty27/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
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
