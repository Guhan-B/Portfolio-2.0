import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedText = (props) => {
  const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);

  const variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      rotateX: 90,
      transition: {
        duration: 1,
      },
    },
  };

  React.useEffect(() => {
    const i = setInterval(() => {
      setCurrentTitleIndex((state) => (state + 1) % props.texts.length);
    }, 3000);

    return () => {
      clearInterval(i);
    };
  });

  return (
    <AnimatePresence exitBeforeEnter={true}>
      <motion.h1
        key={props.texts[currentTitleIndex].id}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {props.texts[currentTitleIndex].text}
      </motion.h1>
    </AnimatePresence>
  );
};

export default AnimatedText;
