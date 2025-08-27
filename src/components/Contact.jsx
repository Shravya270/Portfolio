import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_241koac",   // Replace with your EmailJS Service ID
        "template_f0e6abb",  // Replace with your EmailJS Template ID
        formData,
        "P2KqNoQbS5tkyifur"    // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong. Please try again.");
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 text-black px-6 py-16 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-lg text-gray-500">Connect with me</h3>
        <h1 className="text-4xl font-bold">Get in touch</h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Drop your message on this retro ticket and let’s start the show.
        </p>
      </div>

      {/* Ticket-style Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-[#fdf6e3] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] backdrop-blur-sm rounded-lg relative p-8 shadow-xl border-4 border-black"
      >
        <div className="absolute top-0 left-0 w-6 h-full border-r-4 border-dashed border-black"></div>
        <div className="absolute top-0 right-0 w-6 h-full border-l-4 border-dashed border-black"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 font-mono">
          <div className="flex flex-col">
            <label className="text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Type your name..."
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-black focus:outline-none focus:border-dashed placeholder-gray-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Type your email..."
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-black focus:outline-none focus:border-dashed placeholder-gray-500"
              required
            />
          </div>
        </div>

        <div className="flex flex-col mb-6 font-mono">
          <label className="text-sm mb-1">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-black focus:outline-none focus:border-dashed placeholder-gray-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-8 py-3 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition font-bold tracking-wide"
        >
          🎟️ Book Ticket <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
};

export default Contact;
