import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaSpinner, 
  FaGithub, 
  FaLinkedin, 
  FaPaperPlane, 
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaFileDownload
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
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleFocus = (field) => setFocused(field);
  const handleBlur = () => setFocused(null);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 } 
    },
  };

  const cardHover = {
    rest: { scale: 1, x: 0 },
    hover: { scale: 1.02, x: 6 }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-purple-600/5" />
      <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 -right-48 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full animate-pulse delay-1000" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* ====== TITRE ====== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-18"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <div className="flex justify-center mt-4">
            <p className="text-gray-400 text-sm md:text-base max-w-2xl text-center px-4">
              Have a question or want to collaborate? Let's connect!
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 relative">
          
          {/* ====== LIGNE VERTICALE ====== */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/15 to-transparent" />

          {/* ====== COLONNE GAUCHE ====== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:pr-6"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-4">
                Let's Work Together
              </motion.h3>
              
              <motion.div variants={itemVariants} className="space-y-3 text-gray-400 text-sm leading-relaxed mb-6">
                <p>
                  I'm always interested in AI engineering opportunities,
                  research collaborations and innovative products.
                </p>
                <p>
                  Feel free to reach out. I usually reply within 24 hours.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8" />

              {/* ====== CARTES AVEC ESPACES ====== */}
              
              {/* Email */}
              <motion.div variants={itemVariants} className="mb-6">
                <motion.div 
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="group bg-slate-900/40 py-4 px-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative bg-blue-600/20 p-3 rounded-full group-hover:bg-blue-600/30 transition-all duration-300">
                      <FaEnvelope className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-400 uppercase tracking-wider font-medium">Email</p>
                      <a
                        href={`mailto:${profile.contact.email}`}
                        className="text-white hover:text-blue-400 transition-colors font-medium text-sm"
                      >
                        {profile.contact.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants} className="mb-6">
                <motion.div 
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="group bg-slate-900/40 py-4 px-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative bg-purple-600/20 p-3 rounded-full group-hover:bg-purple-600/30 transition-all duration-300">
                      <FaPhone className="text-purple-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] text-purple-400 uppercase tracking-wider font-medium">Phone</p>
                      <a
                        href={`tel:${profile.contact.phone}`}
                        className="text-white hover:text-purple-400 transition-colors font-medium text-sm"
                      >
                        {profile.contact.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Location */}
              <motion.div variants={itemVariants} className="mb-6">
                <motion.div 
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="group bg-slate-900/40 py-4 px-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative bg-blue-600/20 p-3 rounded-full group-hover:bg-blue-600/30 transition-all duration-300">
                      <FaMapMarkerAlt className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-400 uppercase tracking-wider font-medium">Location</p>
                      <p className="text-white font-medium text-sm">Marrakech, Morocco</p>
                      <p className="text-xs text-gray-500">Remote Worldwide</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Availability */}
              <motion.div variants={itemVariants} className="mb-6">
                <motion.div 
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-5 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>
                    <span className="text-sm font-semibold text-green-400">AVAILABLE</span>
                  </div>
                  <p className="text-sm text-gray-300">Currently looking for:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs bg-slate-800/50 px-3 py-1 rounded-full text-gray-300 border border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 cursor-default">AI Internship</span>
                    <span className="text-xs bg-slate-800/50 px-3 py-1 rounded-full text-gray-300 border border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 cursor-default">Research Collaboration</span>
                    <span className="text-xs bg-slate-800/50 px-3 py-1 rounded-full text-gray-300 border border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 cursor-default">Freelance Projects</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* ====== RÉSEAUX SOCIAUX ====== */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1">
                {[
                  { icon: FaGithub, label: "GitHub", href: profile.social.github },
                  { icon: FaLinkedin, label: "LinkedIn", href: profile.social.linkedin },
                  { icon: FaEnvelope, label: "Email", href: `mailto:${profile.contact.email}` },
                  { icon: FaFileDownload, label: "CV", href: profile.cv },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 bg-slate-900/50 px-3.5 py-2 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 text-gray-400 hover:text-white text-xs"
                    >
                      <Icon size={14} />
                      {social.label}
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ====== FORMULAIRE ====== */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/30 p-6 md:p-8 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-blue-500/20 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-gray-400 mb-6">I'll get back to you within 24 hours</p>
              
              {/* Nom */}
              <div className="mb-5">
                <label className="text-[10px] text-blue-400 font-medium tracking-wider block mb-1.5">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={handleBlur}
                  required
                  className={`w-full bg-slate-900/70 p-4 rounded-xl border transition-all duration-300 text-white placeholder:text-slate-500 outline-none text-sm ${
                    focused === "name" 
                      ? "border-blue-500 ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/20" 
                      : "border-slate-700 hover:border-slate-600"
                  }`}
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="text-[10px] text-blue-400 font-medium tracking-wider block mb-1.5">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={handleBlur}
                  required
                  className={`w-full bg-slate-900/70 p-4 rounded-xl border transition-all duration-300 text-white placeholder:text-slate-500 outline-none text-sm ${
                    focused === "email" 
                      ? "border-blue-500 ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/20" 
                      : "border-slate-700 hover:border-slate-600"
                  }`}
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="text-[10px] text-blue-400 font-medium tracking-wider block mb-1.5">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={handleBlur}
                  required
                  className={`w-full bg-slate-900/70 p-4 rounded-xl border transition-all duration-300 text-white placeholder:text-slate-500 resize-none outline-none text-sm ${
                    focused === "message" 
                      ? "border-blue-500 ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/20" 
                      : "border-slate-700 hover:border-slate-600"
                  }`}
                />
              </div>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New message from Portfolio" />

              {/* Status */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-xl text-sm flex items-center gap-2 mb-4 ${
                    status.type === "success"
                      ? "bg-green-600/20 text-green-400 border border-green-500/30"
                      : "bg-red-600/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {status.type === "success" && <FaCheckCircle size={14} />}
                  {status.message}
                </motion.div>
              )}

              {/* Bouton */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-4 rounded-xl font-semibold text-white overflow-hidden group shadow-lg shadow-blue-500/15 hover:shadow-purple-500/25 transition-all duration-300 text-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="relative flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin" size={14} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Send Message
                      <FaArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </span>
              </motion.button>

              {/* Response time */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <FaClock className="text-blue-400/70 text-[10px]" />
                <span className="text-[10px] text-gray-400">Usually responds within 24 hours</span>
              </div>

              <p className="text-[9px] text-slate-500 text-center mt-2">
                Your information is safe with me. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;