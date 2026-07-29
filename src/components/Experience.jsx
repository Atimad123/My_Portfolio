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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Professional journey in AI and software engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {profile.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="experience-card"
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-xl flex-shrink-0">
                    <FaBriefcase className="text-blue-400 text-xl" />
                  </div>
                  <div className="min-w-0">
                    <div className="role">{exp.role}</div>
                    <div className="company">
                      <FaBuilding className="inline mr-2 text-sm" />
                      {exp.company}
                    </div>
                  </div>
                </div>
                <div className="period flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full flex-shrink-0">
                  <FaCalendarAlt size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="description">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;