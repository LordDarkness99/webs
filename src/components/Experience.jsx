import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        boxShadow: "0 0 25px rgba(0,255,255,0.15)",
        color: "#ffffff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(15, 23, 42, 0.6)",
      }}
      date={experience.date}
      iconStyle={{
        background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
        boxShadow: "0 0 20px rgba(0,255,255,0.5)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.institution}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[22px] font-semibold tracking-wide">
          {experience.title}
        </h3>
        <p
          className="text-cyan-400 text-[15px] font-medium"
          style={{ margin: 0 }}
        >
          {experience.institution}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-200 text-[14px] pl-1 tracking-wide"
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.link && (
        <div className="mt-6">
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 text-sm font-semibold
            bg-gradient-to-r from-cyan-500 to-purple-500
            rounded-lg text-white
            hover:scale-105 transition duration-300
            shadow-[0_0_15px_rgba(0,255,255,0.4)]"
          >
            See More
          </a>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#06b6d4">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
