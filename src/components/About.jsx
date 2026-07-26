import { motion } from "framer-motion";
import { FaBrain, FaRobot, FaCode } from "react-icons/fa";
import { profile } from "../data/profile";
import AIRobotAvatar from "./AIRobotAvatar";

const iconMap = { FaBrain, FaRobot, FaCode };

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate about building intelligent systems that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-[450px] mx-auto">
              {/* Effet de lueur derrière l'avatar */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-2xl animate-pulse delay-1000" />
              <div className="relative w-full h-full">
                <AIRobotAvatar advanced={false} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              {profile.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {profile.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {Object.entries(profile.stats).map(([key, value]) => (
                <div key={key} className="bg-slate-900/50 rounded-2xl p-6 text-center border border-slate-800 card-hover">
                  <h4 className="text-3xl font-extrabold gradient-text">
                    {value}
                  </h4>
                  <p className="mt-1 text-sm text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {profile.expertise.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group bg-slate-900/50 p-8 rounded-3xl border border-slate-800 card-hover"
              >
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {Icon && <Icon size={40} />}
                </div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;