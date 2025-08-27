import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projectData = [
  {
    id: 1,
    title: "Chat + Video Calling App",
    category: "Web",
    image: "https://via.placeholder.com/400x300.png?text=Chat+App",
  },
  {
    id: 2,
    title: "Food Delivery Web App",
    category: "Web",
    image: "https://via.placeholder.com/400x300.png?text=Food+Delivery",
  },
  {
    id: 3,
    title: "Subscription Management System",
    category: "ML",
    image: "https://via.placeholder.com/400x300.png?text=Subscription",
  },
  {
    id: 4,
    title: "Sales Management System",
    category: "Java",
    image: "https://via.placeholder.com/400x300.png?text=Sales+Management",
  },
];

const categories = ["All", "Web", "ML", "Java"];

const tiltAngles = ["-3deg", "2deg", "-2deg", "3deg"]; // random poster tilts

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 text-black px-8 py-16 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-lg text-gray-500">My portfolio</h3>
        <h1 className="text-4xl font-bold">My latest work</h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in web, Java, and ML development.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border transition ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-transparent text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full max-w-6xl">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="relative group rounded-xl overflow-hidden shadow-2xl border-[8px] border-black bg-white transform transition-transform duration-300"
            style={{
              rotate: tiltAngles[index % tiltAngles.length], // random tilt
            }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover transition-all duration-500 group-hover:sepia group-hover:brightness-90 group-hover:scale-105"
            />

            {/* Overlay Card */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg flex items-center justify-between w-[85%] shadow-md">
              <span className="font-medium text-gray-900">
                {project.title}
              </span>
              <button className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full hover:scale-110 transition">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <div className="mt-12">
        <button className="px-6 py-3 rounded-full border border-gray-400 flex items-center gap-2 hover:bg-gray-100">
          Show more <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Extra Poster Styling */}
      <style jsx>{`
        /* Grain effect */
        .group:hover img {
          filter: sepia(40%) contrast(1.1) brightness(0.95);
        }
      `}</style>
    </section>
  );
};

export default Projects;
