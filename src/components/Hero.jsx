import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { profile } from "../data/profile";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Orbes de fond */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="text-center relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="glass-light px-6 py-2 rounded-full text-sm text-blue-400 font-medium border border-blue-500/20">
            🚀 Open to AI Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]"
        >
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4"
        >
          <TypeAnimation
            sequence={[
              "AI Engineer & Computer Vision Specialist",
              2500,
              "Machine Learning Engineer",
              2000,
              "Full-Stack AI Developer",
              2000,
              "NLP & Generative AI Practitioner",
              2000,
              "Computer Vision Expert",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-3xl text-blue-400 font-medium"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto mt-6 text-gray-300 text-base md:text-lg leading-relaxed"
        >
          {profile.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            <FaFileDownload size={18} />
            Download CV
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-3 border border-blue-500/50 px-8 py-4 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            View Projects →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 mt-10"
        >
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub size={28} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin size={28} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-blue-400 rounded-full mt-1"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;