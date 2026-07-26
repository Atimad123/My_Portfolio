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
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic background in Artificial Intelligence and Computer Science
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {profile.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-900/50 p-8 rounded-2xl border border-slate-800 card-hover"
            >
              <div className="flex flex-wrap gap-4">
                <div className="bg-purple-600/20 p-3 rounded-xl group-hover:bg-purple-600/30 transition h-fit">
                  <FaGraduationCap className="text-purple-400 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold group-hover:text-purple-400 transition">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-gray-400 mt-1">
                    <span className="flex items-center gap-1">
                      <FaUniversity size={14} />
                      {edu.school}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt size={14} />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mt-3 leading-relaxed">
                    {edu.description}
                  </p>
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