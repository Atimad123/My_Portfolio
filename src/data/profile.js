export const profile = {
  name: "Atimad BEL CAID",
  title: "AI Engineer & ML Specialist",
  bio: "Master's student in Artificial Intelligence passionate about building intelligent systems using NLP, Computer Vision and Generative AI.",
  description: "I'm an AI Engineer specializing in Computer Vision, Natural Language Processing,ML,DL, and Generative AI. I design and deploy intelligent systems that solve real-world problems — from real-time object tracking and sign language translation to semantic search and conversational AI. I combine research-driven approaches with production-ready engineering to build scalable, human-centered AI solutions.",
  photo: "/images/profile.jpeg",
  cv: "/cv.pdf",
  social: {
    github: "https://github.com/Atimad123",
    linkedin: "https://linkedin.com/in/atimad-bel-caid",
  },
  stats: {
    projects: "5+",
    internships: "2",
    technologies: "15+",
  },
  expertise: [
    {
      icon: "FaBrain",
      title: "Artificial Intelligence",
      description: "Designing and deploying ML/DL models for real-world applications with a focus on performance, scalability, and explainability.",
    },
    {
      icon: "FaRobot",
      title: "Computer Vision",
      description: "Building vision systems for object detection, tracking, image classification, and real-time edge AI using YOLO, MediaPipe, and OpenCV.",
    },
    {
      icon: "FaCode",
      title: "Full Stack AI",
      description: "Developing end-to-end AI applications with Flask, React, REST APIs, and cloud integration — from model to production.",
    },
  ],
  skills: {
    "🤖 Artificial Intelligence": [
      "Machine Learning", "Deep Learning", "Neural Networks",
      "Computer Vision", "NLP", "Generative AI",
      "LLM (Gemini, Claude)", "Prompt Engineering"
    ],
    "🐍 Programming & Frameworks": [
      "Python", "TensorFlow", "Keras", "PyTorch",
      "Scikit-learn", "OpenCV", "Streamlit"
    ],
    "🌐 Web & Full Stack": [
      "JavaScript", "React.js", "Flask", "REST API",
      "HTML/CSS", "PostgreSQL", "SQL"
    ],
    "🔧 Tools & Platforms": [
      "Git", "GitHub", "Docker", "VS Code",
      "Jupyter", "Linux", "AWS"
    ]
  },
  projects: [
    {
      id: 1,
      title: "University Conversational Assistant",
      description: "An AI-powered RAG (Retrieval-Augmented Generation) assistant that intelligently answers course-related questions, generates exams and summaries, and exports results to PDF — built with Flask, React, and Gemini AI.",
      technologies: ["Python", "Flask", "React.js", "Gemini AI", "RAG", "NLP"],
      type: "video",
      youtubeId: "2T4cfNPrQ-8",
      thumbnail: "https://img.youtube.com/vi/2T4cfNPrQ-8/maxresdefault.jpg",
      gallery: [
        "/images/projects/assistant-1.png",
        "/images/projects/assistant-2.png",
        "/images/projects/assistant-3.png",
        "/images/projects/assistant-4.png",
        "/images/projects/assistant-5.png",
        "/images/projects/assistant-6.png",
        "/images/projects/assistant-7.png",
        "/images/projects/assistant-8.png",
        "/images/projects/assistant-9.png",
      ],
      github: "https://github.com/Atimad123/-Moroccan-University-AI-Assistant",
      demo: "#",
    },
    {
      id: 2,
      title: "Sign Language Translation System",
      description: "A real-time sign language translator using Edge AI. Fine-tuned EfficientNet-B0 achieves 98.5% accuracy on 29 classes, with MediaPipe hand detection, ESP32-CAM deployment, and multimodal feedback (text, audio, speech).",
      technologies: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "Flask", "ESP32-CAM"],
      type: "gallery",
      thumbnail: "/images/projects/sign-language-3.png",
      gallery: [
        "/images/projects/sign-language-1.png",
        "/images/projects/sign-language-2.png",
        "/images/projects/sign-language-3.png",
      ],
      github: "https://github.com/Atimad123/-AI-Sign-Language-Translator",
      demo: "#",
    },
    {
      id: 3,
      title: "MizanSa7a-AR",
      description: "An intelligent Arabic nutritional analysis system with voice and text input. Uses hybrid NER (spaCy + LLM) for food extraction, JWT authentication, PostgreSQL, and a responsive RTL interface with speech recognition.",
      technologies: ["Python", "Flask", "PostgreSQL", "spaCy", "LLM", "JavaScript"],
      type: "gallery",
      thumbnail: "/images/projects/nutrivoice-5.jpeg",
      gallery: [
        "/images/projects/nutrivoice-1.jpeg",
        "/images/projects/nutrivoice-2.jpeg",
        "/images/projects/nutrivoice-3.jpeg",
        "/images/projects/nutrivoice-4.jpeg",
        "/images/projects/nutrivoice-5.jpeg",
      ],
      github: "https://github.com/Atimad123/MizanSa7a-AR",
      demo: "#",
    },
    {
      id: 4,
      title: "AI Object Detection & Tracking",
      description: "A production-grade object detection and multi-object tracking system powered by YOLOv8 and ByteTrack. Features image/video detection, real-time webcam tracking, interactive dashboards, FPS monitoring, and CSV export — all in a modern Streamlit interface.",
      technologies: ["Python", "YOLOv8", "ByteTrack", "OpenCV", "Streamlit", "Plotly", "Pandas"],
      type: "gallery",
      thumbnail: "/images/projects/home.png",
      gallery: [
        "/images/projects/home.png",
        "/images/projects/image_detection.png",
        "/images/projects/statistic_image.png",
        "/images/projects/video_detection.png",
        "/images/projects/statistic1_video.png",
        "/images/projects/statistic2_video.png",
        "/images/projects/FPS.png",
        "/images/projects/settings.png",
      ],
      github: "https://github.com/Atimad123/AI-Object-Detection-and-Tracking",
      demo: "#",
    },
    {
      id: 5,
      title: "SmartBank FAQ Chatbot",
      description: "A semantic banking FAQ chatbot combining Sentence Transformers for semantic search, cosine similarity for retrieval, and Gemini AI as a fallback. Delivers accurate, context-aware responses through a modern web interface.",
      technologies: ["Python", "Flask", "Sentence Transformers", "Scikit-Learn", "Gemini AI", "NumPy"],
      type: "gallery",
      thumbnail: "/images/projects/scr1.png",
      gallery: [
        "/images/projects/scr1.png",
        "/images/projects/scr2.png",
        "/images/projects/scr3.png",
        "/images/projects/scr4.png",
      ],
      github: "https://github.com/Atimad123/SmartBank_FAQ_Chatbot",
      demo: "#",
    },
  ],
  experience: [
    {
      company: "CodeAlpha",
      role: "Artificial Intelligence Engineer Intern",
      period: "June 2026 - July 2026",
      description: "Developed AI solutions for real-world problems. Collaborated on end-to-end ML pipelines, from data preprocessing to model deployment and performance optimization.",
    },
    {
      company: "Codveda Technologies",
      role: "Machine Learning Intern",
      period: "May 2026 - June 2026",
      description: "Implemented and fine-tuned machine learning models for classification and regression tasks. Optimized model performance and contributed to production-ready solutions.",
    },
  ],
  education: [
    {
      degree: "Master's in Artificial Intelligence",
      school: "Faculty of Sciences Semlalia, Cadi Ayyad University",
      period: "2025 - Present",
      description: "Advanced coursework in Machine Learning, Deep Learning, NLP, Computer Vision, Big Data, and Generative AI. Research focus on applied AI and multi-modal systems.",
    },
    {
      degree: "Bachelor's in Mathematical and Computer Sciences",
      school: "Faculty of Sciences Semlalia, Cadi Ayyad University",
      period: "2022 - 2025",
      description: "Comprehensive training in Algorithms, Data Structures, Software Engineering, Web Development, Networks, and Object-Oriented Programming.",
    },
  ],
  contact: {
    email: "blcaidatimad@gmail.com",
    phone: "+212 6 41 19 30 04",
  },
};