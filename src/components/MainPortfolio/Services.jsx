import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import {
  FaCode,
  FaBrain,
  FaPaintBrush,
  FaProjectDiagram,
  FaUserTie
} from "react-icons/fa";

// Service Data with resume details
// Service Data with resume details
const servicesData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    icon: <FaCode className="text-yellow-600 text-6xl" />, // 💻 Coding icon (perfect for development)
    short: "Designing and building scalable applications with modern web technologies.",
    details: [
      "Built College Fee Payment System using Java Servlets, JSP, SQLite, and Tailwind CSS.",
      "Experience in CRUD operations, reporting systems, and responsive UI/UX design.",
      "Skilled in React.js, Node.js, Express.js, MySQL, and MongoDB for end-to-end solutions.",
    ],
  },
  {
    id: 2,
    title: "Blockchain & Emerging Technologies",
    icon: <FaProjectDiagram className="text-red-600 text-6xl" />, // 🔗 Network/Blockchain diagram
    short: "Leveraging blockchain, AI, and SAP ABAP for innovative solutions.",
    details: [
      "Developed Blockchain Healthcare DApp on Ethereum handling 100+ secure patient records.",
      "Skilled in Solidity, Smart Contracts, Ethereum, Web3.js, and decentralized app deployment.",
      "Internship at Accenture with stream specific training in SAP ABAP.",
    ],
  },
  {
    id: 3,
    title: "Software Engineering & Problem Solving",
    icon: <FaBrain className="text-indigo-700 text-6xl" />, // 🧠 Problem solving & logic
    short: "Applying computer science fundamentals to create efficient solutions.",
    details: [
      "Strong knowledge of Data Structures, Algorithms, OOP, DBMS, OS, and Computer Networks.",
      "Explored and debugged 10+ SAP ABAP modules during internship, optimizing workflows.",
      "Proficient in Java, C, Python, JavaScript for algorithmic and software problem-solving.",
    ],
  },
  {
    id: 4,
    title: "Professional & Technical Skills",
    icon: <FaUserTie className="text-teal-700 text-6xl" />, // 👔 Professional/soft skills
    short: "Blending strong professional and core technical skills for impactful delivery.",
    details: [
      "Problem-solving, adaptability, and effective communication in agile, client-facing environments.",
      "Core CS knowledge: Data Structures & Algorithms, OOP, DBMS, OS, and Computer Networks.",
      "Skilled in collaboration and leadership through academic projects and industry internship experience.",
    ],
  },
];


const tiltAngles = ["-2deg", "2deg", "-1deg", "1deg"]; // subtle movie reel vibe

const Services = () => {
  const [openCard, setOpenCard] = useState(null);

  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-[#fdfaf5] text-black px-8 py-16 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-lg text-gray-500">What I offer</h3>
        <h1 className="text-4xl font-bold">My Services</h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Here’s how I combine <b>development, blockchain, and problem-solving</b> to bring impactful ideas to life.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full max-w-6xl">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className="relative group rounded-xl overflow-hidden shadow-lg border-2 border-black bg-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl  w-70 h-[350px]"
            style={{
              rotate: tiltAngles[index % tiltAngles.length],
              borderStyle: "dashed", // gives reel perforated feel
            }}
          >
            {/* Title Strip */}
            <div className="bg-#fdfafF text-black py-2 px-4 text-center font-bold text-lg tracking-wide">
              {service.title}
            </div>

            {/* Icon */}
            <div className="mt-6 mb-4 flex justify-center">{service.icon}</div>

            {/* Short Desc */}
            <p className="text-gray-600 mb-4 px-4">{service.short}</p>

            {/* Overlay Button */}
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => setOpenCard(service.id)}
                className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:scale-110 transition"
              >
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reel Detail Card */}
      {openCard && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-2xl w-full rounded-2xl p-8 shadow-2xl relative border-[3px] border-dashed border-gray-700">
            {/* Close Btn */}
            <button
              onClick={() => setOpenCard(null)}
              className="absolute top-4 right-4 p-2 bg-black text-white rounded-full hover:bg-gray-800"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-3">
              {servicesData.find((s) => s.id === openCard).icon}
              {servicesData.find((s) => s.id === openCard).title}
            </h2>

            {/* Details */}
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
              {servicesData
                .find((s) => s.id === openCard)
                .details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
            </ul>
          </div>
        </div>
      )}

      {/* Reel hover filter */}
      <style jsx>{`
        .group:hover {
          filter: contrast(1.05) saturate(1.1);
        }
      `}</style>
    </section>
  );
};

export default Services;
