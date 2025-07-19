import React, { useState } from "react";
import axios from "axios";

//import { Mail, MapPin, Phone } from "lucide-react"; // Optional icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      setResponse(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setResponse("Error submitting the form");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Contact Info */}
        <div className="bg-primary-light text-black p-8 space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-black-100">
            We'd love to hear from you. Reach out using the contact form or
            through the info below.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              {/* <MapPin className="w-5 h-5 mt-1" /> */}
              <i className="ri-map-pin-line"></i>
              <p>123 street, Hyderabad, Telangana, India</p>
            </div>
            <div className="flex items-start gap-3">
              {/* <Mail className="w-5 h-5 mt-1" /> */}
              <i className="ri-mail-line"></i>
              <p>support@test.com</p>
            </div>
            <div className="flex items-start gap-3">
              {/* <Phone className="w-5 h-5 mt-1" /> */}
              <i className="ri-phone-line"></i>
              <p>+91 1234567890</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Contact Us
          </h3>

          {response && (
            <p className="mb-4 text-sm text-green-600">{response}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
