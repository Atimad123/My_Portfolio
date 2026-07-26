import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { FaCheckCircle } from "react-icons/fa";

const skillColors = {
  "🤖 Artificial Intelligence": "from-blue-600 to-cyan-500",
  "🐍 Programming & Frameworks": "from-purple-600 to-pink-500",
  "🌐 Web & Full Stack": "from-green-600 to-teal-500",
  "🔧 Tools & Platforms": "from-orange-600 to-yellow-500",
};

function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(profile.skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 card-hover"
            >
              <h3 className="text-lg font-bold mb-4">
                <span className={`bg-gradient-to-r ${skillColors[category] || "from-blue-600 to-purple-600"} bg-clip-text text-transparent`}>
                  {category}
                </span>
              </h3>
              <div className="space-y-2">
                {items.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-sm text-gray-300">
                    <FaCheckCircle className="text-blue-400 text-xs flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;