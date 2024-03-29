import React from "react";

import styles from "./styles.module.css";

import LINK_ICON from "../../assets/icons/Link-Light.svg"
import GITHUB_ICON from "../../assets/icons/Github-Light.svg"
import BOX_ICON from "../../assets/icons/Box.svg";

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
        <img className={styles.box} src={BOX_ICON}/>
        <span className={styles.links}>
          <a href=""><img src={GITHUB_ICON} alt="Github Link" srcset="" /></a>
          <a href=""><img src={LINK_ICON} alt="Project Link" srcset="" /></a>
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
