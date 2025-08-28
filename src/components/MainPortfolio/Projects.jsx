import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import ReactMarkdown from "react-markdown";

// Import local images
import blockchainImg from "../../assets/images/blockchain.jpg";
import collegeImg from "../../assets/images/college.jpg";
import disasterImg from "../../assets/images/disaster.jpg";
import driverImg from "../../assets/images/driver.jpg";


const projectData = [
  {
    id: 1,
    title: "Blockchain Healthcare DApp",
    date: "June 2025",
    image: blockchainImg,
    details: `
🏥 **Blockchain Healthcare DApp**  
A decentralized healthcare system ensuring secure and tamper-proof medical record management on Ethereum blockchain.  

 **Overview**  
Developed a record management system powered by **Solidity smart contracts**, ensuring privacy and controlled access to patient data. Integrated **Web3.js** with React for seamless interactions and deployed on the **Sepolia test network** via MetaMask.  

 **Key Features**  
- Blockchain-powered secure medical record storage  
- Role-based access control for doctors & patients  
- React.js + Web3.js frontend with MetaMask login  
- Fully decentralized and transparent  

 **Tech Stack**  
React.js · Solidity · Web3.js · MetaMask · Ethereum (Sepolia)  
    `,
  },
  {
    id: 2,
    title: "College Fee Payment System",
    date: "April 2025",
    image: collegeImg,
    details: `
🎓 **College Fee Payment System**  
A full-stack platform that simplifies how colleges manage student fee payments, making administration effortless and transparent.  

 **Overview**  
Built with **Java Servlets** and **JSP**, the system supports recording, updating, and tracking fee payments, backed by a **SQLite database**. It also generates dynamic reports such as overdue payments, total collections, and date-wise breakdowns. The UI is responsive, clean, and styled with **Tailwind CSS**.  

 **Key Features**  
- Add / Update / Delete student fee records  
- Overdue vs Paid tracking for better administration  
- Generate reports by date and status  
- Modern and responsive interface  

 **Tech Stack**  
Java Servlets · JSP · SQLite · Tailwind CSS  
    `,
  },
  {
    id: 3,
    title: "Disaster Relief Management System",
    date: "December 2024",
    image: disasterImg,
    details: `
🌍 **Disaster Relief Management System**  
A comprehensive platform for managing donations, volunteers, and resources during disasters.  

 **Overview**  
Streamlines relief operations with an **admin dashboard** showing real-time statistics. Integrated **Google Maps API** for live resource tracking across 20+ relief zones. Donations are processed securely via **Stripe**, with live updates powered by external APIs.  

 **Key Features**  
- Real-time admin dashboard  
- Volunteer & resource management  
- Secure donations and live updates  
- Map integration for relief tracking  

 **Tech Stack**  
React.js · Node.js · Express.js · MongoDB · Tailwind CSS · Google Maps API · Stripe  
    `,
  },
  {
    id: 4,
    title: "Driver Drowsiness Detection",
    date: "2024",
    image: driverImg,
    details: `
👁️ **Driver Drowsiness Detection**  
A Machine Learning–based system to detect driver drowsiness in real time using webcam input.  

 **Overview**  
Trained a **CNN model** to classify eyes as open, closed, or not detected. If eyes remain closed for more than **3 seconds**, an alarm is triggered to alert the driver, preventing accidents due to fatigue.  

 **Key Features**  
- Real-time eye state classification (Open / Closed / Not Detected)  
- Continuous alarm when drowsiness detected  
- Lightweight, deployable on personal systems  

 **Model**  
- CNN model trained with Keras/TensorFlow  
- Files: \`my_model_drowsiness.h5\`, \`mt_model.h5\`  
- Uses \`X.pickle\` and \`y.pickle\` for dataset storage  
    `,
  },
];

const tiltAngles = ["-2deg", "2deg", "-1deg", "1deg"];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="relative w-full min-h-screen bg-[#fdfaf5] text-black px-8 py-16 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">My latest work</h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          A showcase of my recent projects across Web, Blockchain, Java, and ML,
          blending innovation with real-world problem solving.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full max-w-6xl">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            className="relative group rounded-xl overflow-hidden shadow-lg border-2 border-black bg-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl w-70 h-[350px]"
            style={{
              rotate: tiltAngles[index % tiltAngles.length],
              borderStyle: "dashed",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover filter sepia-[30%] brightness-90"
            />
            <div className="absolute bottom-2 left-4 bg-[#fdfaf5] backdrop-blur-sm p-3 rounded-lg flex flex-col gap-1 w-[85%] shadow-md">
              <span className="font-bold text-gray-900">{project.title}</span>
              <span className="text-xs text-gray-600">{project.date}</span>
              <button
                onClick={() => setSelectedProject(project)}
                className="self-end w-8 h-8 flex items-center justify-center bg-black text-white rounded-full hover:scale-110 transition"
              >
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
          <div
            className="relative max-w-3xl w-full rounded-lg shadow-2xl p-8 overflow-y-auto max-h-[90vh] bg-cover bg-center filter sepia-[30%] brightness-90"
            style={{
              backgroundImage: `url(${selectedProject.image})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-sm rounded-lg"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {selectedProject.date}
              </p>
              <div className="prose text-gray-800 leading-relaxed">
                <ReactMarkdown>{selectedProject.details}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
