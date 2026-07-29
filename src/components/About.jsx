import { motion } from "framer-motion";
import { FaBrain, FaRobot, FaCode, FaProjectDiagram, FaBriefcase, FaMicrochip } from "react-icons/fa";
import { profile } from "../data/profile";
import PremiumAIAvatar from "./PremiumAIAvatar";

const iconMap = { FaBrain, FaRobot, FaCode };

function About() {
  const statIcons = {
    projects: <FaProjectDiagram className="text-blue-400 text-lg" />,
    internships: <FaBriefcase className="text-purple-400 text-lg" />,
    technologies: <FaMicrochip className="text-pink-400 text-lg" />
  };

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-2">
            AI Engineer specializing in Computer Vision, NLP & Generative AI
          </p>
        </motion.div>

        {/* Grille principale */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
              <PremiumAIAvatar />
            </div>
            
            {/* ====== BADGE DÉPLACÉ ICI ====== */}
            <div className="flex flex-col items-center gap-1 mt-4">
              <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] text-blue-400/80 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                ● AI SYSTEM ONLINE
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              </span>
              <p className="text-[7px] tracking-[0.2em] text-gray-500/60 uppercase font-mono">
                Neural Engine Running • Machine Learning • Computer Vision
              </p>
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              AI Engineer
            </h3>
            <p className="text-blue-400 font-medium text-base md:text-lg mt-1">
              Computer Vision • NLP • Generative AI
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-3 max-w-xl">
              Building production-ready AI systems that combine Computer Vision, 
              Machine Learning, Large Language Models and Generative AI.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6">
              {Object.entries(profile.stats).map(([key, value]) => (
                <motion.div 
                  key={key} 
                  className="bg-slate-900/50 rounded-xl py-3 md:py-4 px-2 text-center border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex justify-center mb-1">
                    {statIcons[key] || null}
                  </div>
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-extrabold gradient-text">
                    {value}
                  </h4>
                  <p className="text-[10px] md:text-xs text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Séparateur */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-16 md:my-20" />

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {profile.expertise.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-900/50 p-6 md:p-8 rounded-xl md:rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="text-blue-400 mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300">
                  {Icon && <Icon size={32} className="md:w-9 md:h-9" />}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-blue-400 transition-colors text-white">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Espace en bas */}
        <div className="h-8 md:h-12" />
      </div>
    </section>
  );
}

export default About;