import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import styles from "./styles.module.css";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const input = [0, 1];
  const output = [0, window.innerWidth];
  const width = useTransform(scrollYProgress, input, output);

  return (
    <div className={styles.wrapper}>
      <motion.div className={styles.progress} style={{ width }}></motion.div>
    </div>
  );
};

export default ScrollProgress;
