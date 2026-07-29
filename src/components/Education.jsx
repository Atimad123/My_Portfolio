import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import { profile } from "../data/profile";

function Education() {
  return (
    <section id="education" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic background in Artificial Intelligence and Computer Science
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {profile.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="education-card"
            >
              <div className="flex flex-wrap gap-4 items-start">
                <div className="bg-purple-600/20 p-3 rounded-xl flex-shrink-0">
                  <FaGraduationCap className="text-purple-400 text-2xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3>{edu.degree}</h3>
                  <p className="school">
                    <FaUniversity className="inline mr-2 text-sm" />
                    {edu.school}
                  </p>
                  <p className="period">
                    <FaCalendarAlt className="inline mr-2 text-sm" />
                    {edu.period}
                  </p>
                  <p className="description">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;