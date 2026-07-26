import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { profile } from "../data/profile";

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Professional journey in AI and software engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {profile.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-900/50 p-8 rounded-2xl border border-slate-800 card-hover"
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-xl group-hover:bg-blue-600/30 transition">
                    <FaBriefcase className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 mt-1">
                      <FaBuilding size={14} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 bg-slate-800 px-4 py-2 rounded-full">
                  <FaCalendarAlt size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-300 mt-4 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;