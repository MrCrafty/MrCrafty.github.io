import { Mail, Send } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_k5kxf4h",
        "template_vr4etxm",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        {
          publicKey: "29KaAW1qnAzeszPGn",
        }
      )
      .then(
        () => {
          alert("Message sent successfully, I will contact you soon!");
        },
        (error) => {
          alert(error);
        }
      )
      .then(() =>
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      );
  };
  const form = useRef(null);
  return (
    <section
      id="contact-me"
      className="snap-start h-screen bg-gray-900 flex items-center relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(100,50,255,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold mb-16 flex items-center text-white">
          <Mail className="mr-3 text-purple-400" size={40} />
          Let's Connect
        </h2>
        <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-xl border border-purple-500/20">
          <p className="text-gray-300 mb-8 text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6" ref={form}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="block w-full rounded-lg bg-gray-900/50 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="block w-full rounded-lg bg-gray-900/50 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="block w-full rounded-lg bg-gray-900/50 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all transform hover:scale-105"
            >
              Send Message
              <Send size={16} className="ml-2 inline" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
