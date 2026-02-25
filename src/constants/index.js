import {
  robot,
  vision,
  tools,
  work,
  python,
  cpp,
  r,
  scala,
  csharp,
  golang,
  rust,
  psql,
  tfs,
  coursera,
  jsit,
  ibm,
  genre,
  gaji,
  kuesioner,
  herewego,
  git,
  java,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ Machine Learning Engginer",
    icon: robot,
  },
  {
    title: "Computer Vision & Deep Learning",
    icon: vision,
  },
  {
    title: "Python, Java, Postgresql",
    icon: tools,
  },
  {
    title: "Available for Internship/Freelance work",
    icon: work,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cpp,
  },

  {
    name: "R Language",
    icon: r,
  },
  {
    name: "Scala",
    icon: scala,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Go Language",
    icon: golang,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "PostgreSQL",
    icon: psql,
  },
  {
    name: "Tensorflow",
    icon: tfs,
  },
];

const experiences = [
  {
    title: "AI/ML Engginer",
    institution: "Personal Projects / Research",
    icon: robot,
    iconBg: "#383E56",
    date: "Mar 2025 - Present",
    points: [
      "Developing a music genre detection system using digital signal processing techniques and Machine Learning algorithms for accurate audio classification.",
      "Building an IoT-based attendance application called ‘HereWeGo’ that integrates hardware with intelligent data processing systems for efficient attendance management.",
      "Experienced in processing survey data using K-Means Clustering algorithms integrated into an interactive Streamlit-based dashboard.",
    ],
    link: "https://github.com/LordDarkness99",
  },
];

const achievements = [
   {
    title: "Machine Learning Certification",
    description: "Completed ML specialization.",
    issuer: "Coursera",
    image: coursera,
    link: "https://coursera.org/share/37c5ad37e01c02500ad613b4328e51f1",
  },
  {
    title: "Sinta 5 Journal Publication",
    description: "Developed an IoT-based attendance system using RFID",
    issuer: "JSIT Journal",
    image: jsit,
    link: "https://doi.org/10.47233/jsit.v6i1.4131",
  },
  {
    title: "Linux Commands and Shell Scripting",
    description: "Learned core Linux commands and automated tasks with shell scripting.",
    issuer: "IBM",
    image: ibm,
    link: "https://coursera.org/share/ffe436fedd81e79002ffb9d93a7f0b1d",
  },
];

const projects = [
  {
    name: "HereWeGo – IoT Attendance",
    description:
      "An end-to-end IoT solution designed to automate student attendance tracking. This project integrates RFID hardware with a .NET desktop application and Supabase for real-time cloud data synchronization. It features automated data logging, secure student identification, and a centralized dashboard to minimize manual input errors and improve administrative efficiency.",
    tags: [
      { name: ".NET", color: "blue-text-gradient" },
      { name: "Supabase", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "IOT", color: "orange-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
    ],
    image: herewego,
    source_code_link: "https://github.com/LordDarkness99/HereWeGo.git",
    live_demo_link: "https://github.com/LordDarkness99/HereWeGo.git",
  },
  {
    name: "Questionnaire Analysis",
    description:
      "A sophisticated data analytics platform designed to automate the processing and interpretation of student feedback. Leveraging Streamlit for the interactive interface and TensorFlow for advanced data patterns, the system transforms raw questionnaire responses into actionable insights through automated sentiment analysis and statistical visualization, significantly reducing the time required for manual academic evaluation.",
    tags: [
      { name: "Streamlit", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Tenserflow", color: "orange-text-gradient" },
    ],
    image: kuesioner,
    source_code_link: "https://github.com/LordDarkness99/analisis-kusioner-with-machine-learning.git",
    live_demo_link: "https://github.com/LordDarkness99/analisis-kusioner-with-machine-learning.git",
  },
  {
    name: "Salary Prediction AI",
    description:
      "A predictive analytics tool that leverages Machine Learning to estimate competitive employee salaries. By analyzing key features such as years of experience, educational background, and specific job skills, the model provides data-driven salary benchmarks. Built with TensorFlow for robust regression analysis and deployed via Streamlit to offer an intuitive interface for HR professionals and recruiters.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Tenserflow", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
    ],
    image: gaji,
    source_code_link: "https://github.com/LordDarkness99/Prediksi_Gaji_Berdasarkan_Pengalaman_dan_Pendidikan.git",
    live_demo_link: "https://github.com/LordDarkness99/Prediksi_Gaji_Berdasarkan_Pengalaman_dan_Pendidikan.git",
  },
  {
    name: "Music Genre Classification",
    description:
      "An advanced AI system capable of identifying music genres from raw audio files. The project utilizes digital signal processing (DSP) to extract Mel-frequency cepstral coefficients (MFCCs) and other acoustic features, which are then processed by a Neural Network. This application demonstrates the power of Deep Learning in audio analysis, providing high-accuracy classification across various musical styles.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
      { name: "Tenserflow", color: "pink-text-gradient" },
    ],
    image: genre,
    source_code_link: "https://github.com/LordDarkness99/music-detection.git", // You can update this
    live_demo_link: "https://github.com/LordDarkness99/music-detection.git",
  },
];
export { services, technologies, experiences, achievements, projects };
