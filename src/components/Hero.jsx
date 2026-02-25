import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]">

      {/* Glass Content Container */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-8`}
      >
        {/* Left Line Indicator */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.7)]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-cyan-400 to-purple-500 opacity-70" />
        </div>

        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.15)] max-w-3xl">

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Nizar Ramadhan
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-4 text-gray-200 leading-relaxed`}>
            I'm an AI/Machine Learning Engineer,
            <br className="sm:block hidden" />
            passionate about building intelligent systems through
            Machine Learning and AI-driven innovation.
          </p>

        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border border-white/30 backdrop-blur-md flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.8)]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
