import React from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaEthereum,
} from "react-icons/fa";
import {
  SiC,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiSolidity,
  SiWeb3Dotjs,
} from "react-icons/si";

const skillsData = [
  { name: "Java", icon: <FaJava className="text-red-600 text-2xl" /> },
  { name: "C", icon: <SiC className="text-blue-600 text-2xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500 text-2xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-2xl" /> },

  { name: "React.js", icon: <FaReact className="text-sky-500 text-2xl" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-2xl" /> },

  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl" /> },
  { name: "Express.js", icon: <FaNodeJs className="text-gray-700 text-2xl" /> },

  { name: "MySQL", icon: <SiMysql className="text-blue-700 text-2xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" /> },

  { name: "Solidity", icon: <SiSolidity className="text-gray-800 text-2xl" /> },
  { name: "Smart Contracts", icon: <SiSolidity className="text-gray-800 text-2xl" /> },
  { name: "Ethereum", icon: <FaEthereum className="text-purple-600 text-2xl" /> },
  { name: "Web3.js", icon: <SiWeb3Dotjs className="text-green-600 text-2xl" /> },

  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-2xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-black text-2xl" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full text-black px-8 py-16 flex flex-col items-center overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h3 className="text-lg text-gray-500">Tech Stack</h3>
        <h1 className="text-4xl font-bold">My Skills</h1>
        <p className="mt-4 max-w-3xl text-gray-600">
          Technologies that power my ability to craft scalable architectures,
          optimize performance, and deliver seamless digital experiences.
        </p>
      </div>

      {/* Film Strip Effect */}
      <div className="relative w-full max-w-7xl overflow-hidden">
        <div className="film-strip flex flex-wrap justify-center gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="ticket flex flex-col items-center justify-center px-6 py-4 min-w-[180px]"
            >
              {skill.icon}
              <span className="mt-2 font-mono font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Film strip frame */
        .film-strip {
          background: black;
          padding: 20px 0;
          border-top: 20px solid black;
          border-bottom: 20px solid black;
          position: relative;
        }

        /* Perforations (holes in film strip) */
        .film-strip::before,
        .film-strip::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 20px;
          background-image: radial-gradient(white 30%, transparent 32%);
          background-size: 20px 40px;
          background-repeat: repeat-y;
        }
        .film-strip::before {
          left: 0;
        }
        .film-strip::after {
          right: 0;
        }

        /* Ticket style */
        .ticket {
          background: #fdfaf5;
          border: 2px dashed #c49a6c;
          border-radius: 12px;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
        }
      `}</style>
    </section>
  );
};

export default Skills;
