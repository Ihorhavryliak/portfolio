import { motion, useAnimation } from "framer-motion";
import React, { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AnimationType = {
  children: ReactNode;
  variant?: any
};

const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1} },
  hidden: { opacity: 0, x: -250 },
};

export const SectionAnimation = ({ children, variant = boxVariant}: AnimationType) => {
  const control = useAnimation();
  const [skillsView, isSkillsView] = useInView();

  useEffect(() => {
    isSkillsView ? control.start("visible") : control.start("hidden");
  }, [control, isSkillsView]);

  return (
    <motion.div
      className="project_section__names"
      ref={skillsView}
      initial="hidden"
      variants={variant}
      animate={control}
    >
      {children}
    </motion.div>
  );
};
