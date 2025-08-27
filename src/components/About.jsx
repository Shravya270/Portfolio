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
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-white text-black px-8 py-16 flex flex-col items-center overflow-hidden"
    >
      {/* Background cinematic icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Repeated icons with transparent opacity */}
        <FaTicketAlt className="absolute top-10 left-10 text-yellow-500/40 text-7xl animate-float" />
        <GiPopcorn className="absolute bottom-20 left-1/4 text-red-500/40 text-8xl animate-float-delayed" />
        <FaVideo className="absolute top-1/3 right-16 text-gray-800/40 text-7xl animate-float" />
        <FaStar className="absolute bottom-10 right-10 text-yellow-400/40 text-6xl animate-float-delayed" />
        <MdLocalMovies className="absolute top-1/4 left-1/2 text-purple-600/40 text-7xl animate-float" />
        <FaFilm className="absolute bottom-1/3 right-1/3 text-blue-500/40 text-6xl animate-float-delayed" />
        <MdMovieFilter className="absolute top-1/2 left-1/4 text-pink-500/40 text-7xl animate-float" />
        <MdLocalPlay className="absolute bottom-1/4 left-1/3 text-green-500/40 text-6xl animate-float-delayed" />
        <FaRegStar className="absolute top-5 right-1/4 text-yellow-300/40 text-6xl animate-float" />

        {/* Extra repeated icons for cinematic vibe */}
        <FaFilm className="absolute top-1/6 left-1/6 text-blue-500/30 text-5xl animate-float-delayed" />
        <GiPopcorn className="absolute top-2/3 right-1/6 text-red-500/30 text-7xl animate-float" />
        <MdLocalMovies className="absolute bottom-1/6 left-1/5 text-purple-600/30 text-6xl animate-float" />
        <FaTicketAlt className="absolute bottom-1/2 right-1/5 text-yellow-500/30 text-7xl animate-float-delayed" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 items-start relative z-10">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-start mt-28">
          <img
            src="/PHOTO.jpg"
            alt="Profile"
            className="w-80 h-[400px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* About Text */}
        <div className="flex flex-col justify-center">
          {/* Heading */}
          <div className="mb-6">
            <h3 className="text-lg text-gray-500">Introduction</h3>
            <h1 className="text-4xl font-bold">About Me</h1>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            I am <span className="font-semibold">Your Name</span>, a passionate{" "}
            <span className="font-semibold">Full Stack Developer</span>. I love
            crafting modern, responsive, and scalable web applications that solve
            real-world problems. With hands-on project experience, I focus on writing
            clean, efficient code and building impactful digital solutions while
            constantly learning and evolving as a developer.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white/80 backdrop-blur-sm">
              <FaCode className="text-3xl text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Languages</h2>
              <p className="text-gray-600">
                Java, C++, JavaScript, React.js, Next.js, Node.js, Express.js,
                MongoDB, MySQL
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white/80 backdrop-blur-sm">
              <FaGraduationCap className="text-3xl text-purple-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Education</h2>
              <p className="text-gray-600">
                B.E in Computer Science at Alva's Institute of Engineering and
                Technology, Mangalore
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white/80 backdrop-blur-sm">
              <FaTasks className="text-3xl text-green-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Projects</h2>
              <p className="text-gray-600">
                I have built and delivered 8+ projects showcasing my skills and
                expertise.
              </p>
            </div>
          </div>

          {/* Tools I use */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Tools I Use</h3>
            <div className="flex gap-6 text-4xl text-gray-700">
              <SiJavascript />
              <SiReact />
              <SiTailwindcss />
              <SiNodedotjs />
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default About;
