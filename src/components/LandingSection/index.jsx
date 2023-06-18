import React from "react";

import styles from "./styles.module.css";

import { socials } from "../../shared/Data";
import Button from "../Button";

const LandingSection = () => {
  return (
    <div className={styles.wrapper} id="home">
      <div className={styles.scroll_indicator}></div>
      <div className={styles.center_content}>
        <h2>Hello, I'm Guhan</h2>
        <h1>
          <span>Designer</span>
          <span>&</span>
          <span>Developer</span>
        </h1>
        <Button label="Check Out My Works"/>
      </div>
      <div className={styles.side_social}>
        {
          socials.map(
            social => 
            <a rel="noreferrer" target="_blank" key={social.id} href={social.url}>
              <img src={social.icon} alt={social.name}/>
            </a>
          )
        }
        <span className={styles.line}></span>
      </div>
      <div className={styles.side_email}>
        <a href="mailto:bkguhan2001@gmail.com">bkguhan2001@gmail.com</a>
        <span className={styles.line}></span>
      </div>
      <div className={styles.video_background_overlay}>
        <video playsInline autoPlay muted loop>
          <source
            src="https://themes.fourthwall.com/themes/assets/11d2f253-34b7-4fdc-b01b-17868cd74972/assets/video-bg-light.mp4?v=364d6351-2cdd-8622-b962-d429a0989974"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
};

export default LandingSection;
