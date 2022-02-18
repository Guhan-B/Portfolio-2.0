import React from "react";

import styles from "./styles.module.css";

import Placeholder from "../../assets/me.png";
import Wave from "../../assets/Wave.gif";

const AboutSection = () => {
  return (
    <div className={styles.wrapper} id="about">
      <div className={styles.left_section}>
        <h1>
          <span>Hola People</span>
          <img src={Wave} alt="wave"/>
        </h1>
        <p>
          Hello! I am Guhan, a student from MIT, Chennai, a computer science and engineering undergraduate. I create things for the web. My main interests are web/application development, UI designing, machine learning, and deep learning. I started working in web development back in 2019 and have been doing stuff in ML for quite a while. UI designing is more of a hobby than a profession to me, but I love doing it.
        </p>
        <p>
          My main focus these days is to learn more in ML/DL and also in building useful and interesting projects once in a while. I'm also interested in general competitive programming which I often do in LeetCode.
        </p>
      </div>
      <div className={styles.right_section}>
        <img src={Placeholder} alt="me"/>
      </div>
    </div>
  );
};

export default AboutSection;