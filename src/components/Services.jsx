import React from "react";
import { FaCode, FaBrain, FaPaintBrush, FaProjectDiagram } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-pink-500 text-4xl mb-4" />,
    title: "Full-Stack Development",
    description: "End-to-end development of scalable and reliable applications.",
    link: "#",
  },
  {
    icon: <FaBrain className="text-pink-500 text-4xl mb-4" />,
    title: "AI & ML Solutions",
    description: "Designing intelligent applications powered by AI and ML.",
    link: "#",
  },
  {
    icon: <FaPaintBrush className="text-pink-500 text-4xl mb-4" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user experiences.",
    link: "#",
  },
  {
    icon: <FaProjectDiagram className="text-pink-500 text-4xl mb-4" />,
    title: "Project Development",
    description: "Built and deployed multiple impactful projects.",
    link: "#",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-white text-black px-8 py-20 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h3 className="text-lg text-gray-500">What I offer</h3>
        <h1 className="text-4xl font-bold">My Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          I am a full-stack developer with professional experience as a
          freelancer, where I have successfully designed and developed multiple
          projects across different domains.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white/80 backdrop-blur-sm text-center"
          >
            {service.icon}
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <a
              href={service.link}
              className="text-gray-800 font-medium hover:text-pink-500 transition"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
