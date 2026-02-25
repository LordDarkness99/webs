import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    scale={1.05}
    transitionSpeed={400}
    className="xs:w-[258px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="w-full p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500"
    >
      <div
        className="rounded-2xl py-8 px-8 min-h-[260px]
        flex flex-col justify-center items-center
        bg-slate-900/80 backdrop-blur-lg
        hover:scale-105 transition duration-300"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain mb-6"
        />

        <h3 className="text-white text-[18px] font-semibold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hey there! I am a dedicated AI/Machine Learning Engineer focused on 
        building  intelligent systems based on Machine Learning. With a strong
        background in technical and creative problem-solving, I am dedicated
        to creating innovative intelligent solutions. I am open to discussing
        technological advancements, sharing insights, and collaborating on 
        transformative projects that can make a tangible impact in the tech world.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
