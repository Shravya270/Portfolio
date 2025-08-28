import React from "react";
import {
  FaCode,
  FaGraduationCap,
  FaTasks,
  FaFilm,
  FaStar,
  FaTicketAlt,
  FaVideo,
  FaRegStar,
} from "react-icons/fa";
import { MdLocalMovies, MdMovieFilter, MdLocalPlay } from "react-icons/md";
import { GiPopcorn } from "react-icons/gi";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen text-black px-8 pt-28 pb-16 flex flex-col items-center overflow-hidden"
    >
      {/* ─────────────── Paper Texture Background ─────────────── */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-0"></div>

      {/* ─────────────── Background cinematic icons ─────────────── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <FaTicketAlt className="absolute top-10 left-10 text-yellow-500/40 text-7xl animate-float" />
        <GiPopcorn className="absolute bottom-5 left-1/4 text-red-500/40 text-8xl animate-float-delayed" />
        <FaVideo className="absolute top-1/3 right-16 text-gray-800/40 text-7xl animate-float" />
        <FaStar className="absolute bottom-10 right-10 text-yellow-400/40 text-6xl animate-float-delayed" />
        <MdLocalMovies className="absolute top-1/5 left-1/2 text-purple-600/40 text-7xl animate-float" />
        <FaFilm className="absolute bottom-1/3 right-1/3 text-blue-500/40 text-6xl animate-float-delayed" />
        <MdMovieFilter className="absolute top-1/2 left-1/4 text-pink-500/40 text-7xl animate-float" />
        <MdLocalPlay className="absolute bottom-1/4 left text-green-500/40 text-6xl animate-float-delayed" />
        <FaRegStar className="absolute top-5 right-1/4 text-yellow-300/40 text-6xl animate-float" />

        
      </div>

      {/* ─────────────── Main Content ─────────────── */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 items-start relative z-20">
        {/* Profile Image with Polaroid-style retro card */}
        <div className="flex-shrink-0 flex justify-center md:justify-start mt-16">
          <div className="bg-white p-4 shadow-xl border-4 border-gray-300 rounded-md transform rotate-[-2deg]">
            <img
              src="/PHOTO.jpg"
              alt="Profile"
              className="w-80 h-[400px] object-cover sepia rounded-md"
            />
            <p className="text-center mt-2 text-sm italic font-handwriting">
              “Shravya Shetty – The Coder”
            </p>
          </div>
        </div>

        {/* About Text */}
        <div className="flex flex-col justify-center">
          {/* Heading */}
          <div className="mb-6">
            <h3 className="text-lg text-gray-500">Introduction</h3>
            <h1 className="text-4xl font-bold">About Me</h1>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            I’m{" "}
            <span className="font-semibold font-mono">
              Shravya P Shetty
            </span>
            , a{" "}
            <span className="font-semibold font-mono">
              Computer Science engineer
            </span>{" "}
            from Mangalore with a strong foundation in{" "}
            <span className="font-semibold font-mono">
              full-stack development, blockchain, and enterprise systems
            </span>
            . I’ve worked on impactful projects and gained hands-on experience
            as an intern at{" "}
            <span className="font-semibold font-mono">Accenture</span>,
            exploring SAP ABAP. Passionate about solving problems with clean,
            scalable code, I love building applications that create real-world
            impact.
          </p>

          {/* Film Strip Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Languages */}
            <div className="film-card p-6 relative">
              <FaCode className="text-3xl text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Languages</h2>
              <p className="text-gray-600">
                Java, C, JavaScript, React.js, Node.js, Express.js, MongoDB,
                MySQL, HTML, CSS, SAP ABAP
              </p>
            </div>

            {/* Education */}
            <div className="film-card p-6 relative">
              <FaGraduationCap className="text-3xl text-purple-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Education</h2>
              <p className="text-gray-600">
                B.E in Computer Science and Engineering at Alva's Institute of
                Engineering and Technology, Mangalore
              </p>
            </div>

            {/* Projects */}
            <div className="film-card p-6 relative">
              <FaTasks className="text-3xl text-green-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Projects</h2>
              <p className="text-gray-600">
                Built impactful projects including a{" "}
                <span className="font-semibold">Blockchain-based healthcare DApp</span>, 
                a <span className="font-semibold">Fee Payment Management System</span>, 
                and a <span className="font-semibold">Disaster Relief & Rescue Web App</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────── Floating animation + Film Strip styles ─────────────── */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }

        /* Film card with strip edges */
        .film-card {
          background: #fdfaf5;
          border: 4px solid black;
          border-radius: 0;
          position: relative;
          box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
        }

        /* Perforated film strip effect */
        .film-card::before,
        .film-card::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 12px;
          background-image: radial-gradient(black 35%, transparent 37%);
          background-size: 12px 24px;
          background-repeat: repeat-y;
        }
        .film-card::before {
          left: -16px;
        }
        .film-card::after {
          right: -16px;
        }
      `}</style>
    </section>
  );
};

export default About;
