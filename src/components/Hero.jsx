import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { profile } from "../data/profile";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-20 overflow-hidden"
    >
      {/* ====== FOND AVEC LUMIÈRES FLOTTANTES ====== */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-[450px] h-[450px] bg-purple-600/20 blur-[150px] rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/10 blur-[120px] rounded-full animate-pulse delay-500" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 md:px-8 text-center">
        
        {/* ====== BADGE ====== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="inline-flex items-center gap-2 glass-light px-5 py-2 rounded-full text-sm text-blue-400 font-medium border border-blue-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            Available for AI & ML Opportunities
          </span>
        </motion.div>

        {/* ====== NOM AVEC OMBRE ====== */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] drop-shadow-[0_0_35px_rgba(99,102,241,.25)]"
        >
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        {/* ====== TITRE ANIMÉ ====== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3"
        >
          <TypeAnimation
            sequence={[
              "AI Engineer",
              2000,
              "Computer Vision Engineer",
              2000,
              "Machine Learning Engineer",
              2000,
              "NLP Engineer",
              2000,
              "Generative AI Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-medium"
          />
        </motion.div>

        {/* ====== DESCRIPTION - PARFAITEMENT CENTRÉE ====== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-4 md:mt-6"
        >
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl text-center px-4">
            AI Engineer specializing in Computer Vision, Machine Learning, NLP and Generative AI. 
            Building scalable AI applications that transform research into production-ready solutions.
          </p>
        </motion.div>

        {/* ====== BOUTONS ====== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 md:mt-10"
        >
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 md:px-9 py-3.5 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <FaFileDownload size={18} />
            Download CV
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-blue-500/50 px-8 md:px-9 py-3.5 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            View Projects →
          </a>
        </motion.div>

        {/* ====== RÉSEAUX SOCIAUX ====== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-6 md:gap-8 mt-10 md:mt-12"
        >
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaGithub size={32} className="md:w-9 md:h-9" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaLinkedin size={32} className="md:w-9 md:h-9" />
          </a>
        </motion.div>
      </div>

      {/* ====== SCROLL INDICATOR ====== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 pointer-events-none"
      >
        <span className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-40">Scroll</span>
        <div className="w-3 h-4 md:w-4 md:h-5 border border-gray-500/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-1.5 md:h-2 bg-blue-400/60 rounded-full mt-1"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;