import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaFileDownload } from "react-icons/fa";
import { profile } from "../data/profile";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold gradient-text tracking-tight"
        >
          {profile.name.split(" ")[0]}.
        </motion.a>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {links.map((link) => (
            <motion.li key={link} whileHover={{ y: -2 }}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
          >
            <FaFileDownload size={14} />
            CV
          </motion.a>
        </div>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-slate-800/50"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-8 py-4 border-b border-slate-800/50 font-medium hover:bg-slate-800/30 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex gap-6 px-8 py-4">
            <a href={profile.social.github} target="_blank" rel="noreferrer">
              <FaGithub size={24} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a
              href={profile.cv}
              download
              className="ml-auto bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 rounded-full text-sm font-semibold"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;