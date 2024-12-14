"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("Submitting...");

    // Mock form submission - replace with your API endpoint
    setTimeout(() => {
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative  md:bg-black bg-cover bg-center  md:h-40 flex items-center justify-center">
        <div className="absolute inset-0  md:bg-black md:bg-opacity-50"></div>
        <h1 className="mt-4 md:mt-0 text-black md:text-white text-4xl md:text-5xl font-bold z-10">
          Contact Us
        </h1>
      </section>

      {/* Contact Information */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              We’d love to hear from you. Reach out to us for your construction
              needs or queries.
            </p>
            <div className="space-y-4">
              <p className="text-gray-800">
                <strong>Address:</strong> 123 Construction Ave, Singapore 123456
              </p>
              <p className="text-gray-800">
  <strong>Phone:</strong>{" "}
  <a
    href="tel:+6587654321"
    className="text-primary hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    +65 8765 4321
  </a>
</p>
              <p className="text-gray-800">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@directbuilders.sg"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact@directbuilders.sg
                </a>
              </p>
              <p className="text-gray-800">
                <strong>Working Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={statusMessage === "Submitting..."}
                className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 ${
                  statusMessage === "Submitting..."
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-primary-dark"
                }`}
              >
                {statusMessage === "Submitting..."
                  ? "Submitting..."
                  : "Send Message"}
              </button>
              {statusMessage && (
                <p
                  className={`text-center mt-4 ${
                    statusMessage.includes("successfully")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">
            Visit Us
          </h2>
          <div className="w-full h-64 lg:h-96 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.389501084566!2d103.83540961534445!3d1.303927899045975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19b9cfb6e0f3%3A0xe0e2026cf308a8e!2sSingapore!5e0!3m2!1sen!2ssg!4v1639054820742!5m2!1sen!2ssg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
