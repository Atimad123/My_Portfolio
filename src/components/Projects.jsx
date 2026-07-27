import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaPlay, 
  FaTimes,
  FaImages,
  FaYoutube,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { profile } from "../data/profile";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const openVideoModal = (youtubeId) => {
    setVideoId(youtubeId);
    setIsVideoModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setVideoId("");
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section id="projects" className="section-padding bg-slate-900/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="section-title">
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              Building intelligent systems that solve real-world problems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {profile.projects.map((project, index) => {
              const thumbnail = project.type === "video" 
                ? `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`
                : (project.thumbnail || project.gallery[0]);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden aspect-video bg-slate-800">
                    <img
                      src={thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/600x400/0f172a/3b82f6?text=No+Image";
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        {project.type === "video" ? (
                          <div className="bg-blue-600/90 p-3 md:p-4 rounded-full hover:bg-blue-500 transition transform hover:scale-110 shadow-2xl shadow-blue-500/30">
                            <FaPlay size={isMobile ? 18 : 24} />
                          </div>
                        ) : (
                          <div className="bg-purple-600/90 p-3 md:p-4 rounded-full hover:bg-purple-500 transition transform hover:scale-110">
                            <FaImages size={isMobile ? 18 : 24} />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-2 right-2 flex gap-1.5 md:gap-2">
                      {project.type === "video" && (
                        <span className="bg-red-600/90 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-semibold backdrop-blur-sm flex items-center gap-1">
                          <FaYoutube size={isMobile ? 8 : 10} /> Video
                        </span>
                      )}
                      <span className="bg-blue-600/90 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-semibold backdrop-blur-sm">
                        {project.gallery.length}
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 bg-slate-950/70 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-xs text-gray-300 backdrop-blur-sm">
                      Tap to view
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 group-hover:text-blue-400 transition line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
                      {project.technologies.slice(0, isMobile ? 3 : 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 md:px-2.5 md:py-1 bg-slate-800/70 rounded-full text-[8px] md:text-xs text-gray-400 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > (isMobile ? 3 : 4) && (
                        <span className="px-2 py-0.5 md:px-2.5 md:py-1 bg-slate-800/70 rounded-full text-[8px] md:text-xs text-gray-400 border border-slate-700">
                          +{project.technologies.length - (isMobile ? 3 : 4)}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16"
          >
            <a
              href="https://github.com/Atimad123"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 md:gap-3 bg-slate-800/50 px-6 md:px-8 py-3 md:py-4 rounded-full border border-slate-700 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 text-sm md:text-base"
            >
              <FaGithub size={isMobile ? 18 : 22} />
              <span className="font-medium">View All Projects on GitHub</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* MODAL PROJET - Version optimisée mobile */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-slate-950/95 backdrop-blur-xl"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[95vh] md:max-h-[90vh] bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton fermer - mieux positionné sur mobile */}
              <button
                onClick={closeProjectModal}
                className="absolute top-2 right-2 md:top-4 md:right-4 z-20 bg-slate-800/90 p-2 md:p-3 rounded-full hover:bg-slate-700 transition text-white/80 hover:text-white"
              >
                <FaTimes size={isMobile ? 16 : 20} />
              </button>

              <div className="flex flex-col md:grid md:grid-cols-2 h-full">
                {/* Galerie d'images */}
                <div className="relative bg-slate-800 h-[250px] sm:h-[300px] md:h-[500px]">
                  {selectedProject.type === "video" ? (
                    <div 
                      className="relative w-full h-full cursor-pointer group"
                      onClick={() => openVideoModal(selectedProject.youtubeId)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${selectedProject.youtubeId}/maxresdefault.jpg`}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://placehold.co/600x400/0f172a/3b82f6?text=Video";
                        }}
                      />
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition flex items-center justify-center">
                        <div className="w-14 h-14 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition shadow-2xl shadow-blue-500/30">
                          <FaPlay className="text-white ml-1" size={isMobile ? 20 : 32} />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-slate-950/80 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm backdrop-blur-sm">
                        Tap to watch video
                      </div>
                    </div>
                  ) : (
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay, EffectFade]}
                      navigation
                      pagination={{ clickable: true, dynamicBullets: true }}
                      autoplay={{ delay: 4000, disableOnInteraction: false }}
                      effect="fade"
                      loop={true}
                      className="w-full h-full"
                    >
                      {selectedProject.gallery.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="w-full h-full flex items-center justify-center bg-slate-900 p-2 md:p-4">
                            <img
                              src={img}
                              alt={`${selectedProject.title} - ${idx + 1}`}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.target.src = "https://placehold.co/600x400/0f172a/3b82f6?text=Image+Not+Found";
                              }}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>

                {/* Informations du projet */}
                <div className="p-4 md:p-8 lg:p-10 overflow-y-auto max-h-[40vh] md:max-h-[80vh]">
                  <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 gradient-text">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-4 md:mb-6">
                    <h4 className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 md:mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 md:px-3 md:py-1.5 bg-slate-800 rounded-full text-xs md:text-sm text-gray-300 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 md:gap-2 bg-slate-800 px-4 md:px-6 py-2.5 md:py-3 rounded-xl hover:bg-slate-700 transition text-sm md:text-base"
                    >
                      <FaGithub size={isMobile ? 14 : 18} />
                      GitHub
                    </a>
                    {selectedProject.demo && selectedProject.demo !== "#" && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 md:gap-2 bg-blue-600 px-4 md:px-6 py-2.5 md:py-3 rounded-xl hover:bg-blue-500 transition text-sm md:text-base"
                      >
                        <FaExternalLinkAlt size={isMobile ? 12 : 16} />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.type === "video" && (
                      <button
                        onClick={() => openVideoModal(selectedProject.youtubeId)}
                        className="flex items-center gap-1.5 md:gap-2 bg-red-600 px-4 md:px-6 py-2.5 md:py-3 rounded-xl hover:bg-red-500 transition text-sm md:text-base"
                      >
                        <FaPlay size={isMobile ? 12 : 16} />
                        Watch Video
                      </button>
                    )}
                  </div>

                  {/* Indicateur images */}
                  <div className="mt-4 md:mt-6 flex items-center gap-2 text-xs md:text-sm text-gray-400">
                    <FaImages size={isMobile ? 12 : 16} />
                    <span>{selectedProject.gallery.length} images in gallery</span>
                    {selectedProject.type === "video" && (
                      <span className="ml-2 md:ml-4 flex items-center gap-1 text-red-400">
                        <FaYoutube size={isMobile ? 12 : 16} />
                        YouTube Video
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL VIDÉO YOUTUBE */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-4 bg-slate-950/95 backdrop-blur-xl"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
                className="absolute top-2 right-2 md:top-4 md:right-4 z-20 bg-slate-800/90 p-2 md:p-3 rounded-full hover:bg-slate-700 transition text-white/80 hover:text-white"
              >
                <FaTimes size={isMobile ? 16 : 20} />
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Projects;