import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaFileDownload } from "react-icons/fa";
import { profile } from "../data/profile";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu au clic sur un lien
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const links = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-extrabold gradient-text tracking-tight"
          >
            {profile.name.split(" ")[0]}.
          </motion.a>

          {/* Navigation desktop */}
          <ul className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium text-gray-300">
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

          {/* Boutons desktop */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5">
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
            >
              <FaFileDownload size={14} />
              CV
            </motion.a>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden text-gray-300 p-2 hover:text-white transition z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Menu mobile - overlay plein écran */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden bg-slate-950/98 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
              {/* Liens */}
              {links.map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="text-2xl font-medium text-gray-200 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link}
                </motion.a>
              ))}

              {/* Séparateur */}
              <div className="w-16 h-px bg-slate-700 my-4" />

              {/* Réseaux sociaux */}
              <div className="flex gap-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaGithub size={28} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <FaLinkedin size={28} />
                </motion.a>
              </div>

              {/* Bouton CV mobile */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={profile.cv}
                download
                onClick={handleLinkClick}
                className="mt-4 inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-shadow"
              >
                <FaFileDownload size={20} />
                Download CV
              </motion.a>

              {/* Footer du menu */}
              <p className="absolute bottom-8 text-sm text-gray-500">
                © {new Date().getFullYear()} {profile.name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;