import React from "react";

import styles from "./styles.module.css";

import LINK_ICON from "../../assets/icons/Link.svg"
import GITHUB_ICON from "../../assets/icons/Github-Dark.svg"

const ProjectPlaceholder = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1>Some Things I've Built</h1>
      <div className={styles.grid}>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>#1</h2>
        <span className={styles.links}>
          <a href=""><img src={GITHUB_ICON} alt="Github Link" srcset="" /></a>
          <a href=""><img src={LINK_ICON} alt="Github Link" srcset="" /></a>
        </span>
      </div>
      <div className={styles.body}>
        <h3>Project Name Here</h3>
        <p>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.</p>
        <div className={styles.tags}>
          <span>Fearture</span>
          <span>Fearture</span>
          <span>Fearture</span>
          <span>Fearture</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectPlaceholder;
