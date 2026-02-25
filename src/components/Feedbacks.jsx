// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { testimonials } from "../constants";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
//   >
//     <p className="text-white font-black text-[48px]">"</p>

//     <div className="mt-1 ">
//       <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
//       <div className="mt-7 flex justify-between items-center gap-1">
//         <div className="flex-1 flex flex-col">
//           <p className="text-white font-medium text-[16px]">
//             <span className="blue-text-gradient">@</span> {name}
//           </p>
//           <p className="mt-1 text-secondary text[12px]">
//             {designation} of {company}
//           </p>
//         </div>
//         <img
//           src={image}
//           alt={`feedback-by-${name}`}
//           className="w-10 h-10 rounded-full object-cover"
//         />
//       </div>
//     </div>
//   </motion.div>
// );

// const Feedbacks = () => {
//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px]`}>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//       >
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//           <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "");

import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({
  index,
  title,
  description,
  issuer,
  image,
  link,
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn("", "spring", index * 0.3, 0.75)}
    className="backdrop-blur-xl bg-white/10 border border-white/20 
    p-8 rounded-2xl xs:w-[320px] w-full block 
    shadow-[0_0_30px_rgba(0,255,255,0.15)] 
    hover:shadow-[0_0_50px_rgba(0,255,255,0.3)] 
    hover:-translate-y-2 transition duration-500 cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <img
        src={image}
        alt={title}
        className="w-12 h-12 object-contain"
      />

      <div>
        <h3 className="text-white text-[18px] font-semibold tracking-wide">
          {title}
        </h3>

        <p className="text-cyan-300 text-[14px]">
          {issuer}
        </p>
      </div>
    </div>

    <p className="mt-4 text-gray-300 text-[14px] leading-relaxed">
      {description}
    </p>

    <p className="mt-4 text-cyan-400 text-[14px] font-medium">
      View →
    </p>
  </motion.a>
);

const Achievements = () => {
  return (
    <div className="mt-12 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[20px]">

      <div className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl ${styles.padding}`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Other.
          </p>

          <h2 className={styles.sectionHeadText}>
            Achievements & Certifications
          </h2>
        </motion.div>
      </div>

      <div className={`-mt-10 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {achievements.map((item, index) => (
          <AchievementCard
            key={index}
            index={index}
            {...item}
          />
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(Achievements, "");
