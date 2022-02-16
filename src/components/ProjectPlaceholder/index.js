import React from "react";

import styles from "./styles.module.css";

import Arrow from "../../assets/Arrow.svg";

const ProjectPlaceholder = (props) => {
  return (
    <div className={styles.wrapper}>
      <blockquote>
        Checkout my github for awesome projects and contributions including this portfolio
      </blockquote>
      <a href="https://github.com/Guhan-B" target="_blank" className={styles.github_link}>
          <span>Visit Github</span>
          <img src={Arrow}/>
      </a>
    </div>
  );
};

export default ProjectPlaceholder;
