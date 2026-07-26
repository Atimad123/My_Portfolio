import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaSpinner, 
  FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle 
} from "react-icons/fa";
import { profile } from "../data/profile";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://formsubmit.co/ajax/blcaidatimad@gmail.com", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "✅ Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        type: "error",
        message: "❌ Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a question or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 card-hover">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl">
                  <FaEnvelope className="text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="hover:text-blue-400 transition font-medium"
                  >
                    {profile.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 card-hover">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl">
                  <FaPhone className="text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a
                    href={`tel:${profile.contact.phone}`}
                    className="hover:text-blue-400 transition font-medium"
                  >
                    {profile.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 card-hover">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl">
                  <FaMapMarkerAlt className="text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Morocco</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 transition text-gray-400 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 transition text-gray-400 hover:text-blue-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 bg-slate-900/30 p-8 rounded-2xl border border-slate-800"
          >
            <div>
              <label className="text-sm text-gray-400 font-medium mb-2 block">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-900/70 p-4 rounded-xl border border-slate-700 focus:border-blue-500 outline-none transition text-white placeholder-gray-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 font-medium mb-2 block">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-900/70 p-4 rounded-xl border border-slate-700 focus:border-blue-500 outline-none transition text-white placeholder-gray-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 font-medium mb-2 block">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-900/70 p-4 rounded-xl border border-slate-700 focus:border-blue-500 outline-none transition text-white placeholder-gray-500 resize-none"
              />
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New message from Portfolio" />

            {status.message && (
              <div
                className={`p-4 rounded-xl text-sm flex items-center gap-2 ${
                  status.type === "success"
                    ? "bg-green-600/20 text-green-400 border border-green-500/30"
                    : "bg-red-600/20 text-red-400 border border-red-500/30"
                }`}
              >
                {status.type === "success" ? <FaCheckCircle /> : null}
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;