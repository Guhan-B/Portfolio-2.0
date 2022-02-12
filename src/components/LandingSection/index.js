import React from "react";

import AnimatedText from "../AnimatedText";

import styles from "./styles.module.css";

import {socials, titles} from "../../shared/Data";

const LandingSection = () => {

  React.useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const center = document.querySelector(".moving");
      const speed = 2;
      const x = (window.innerWidth - e.pageX * speed) / 120;
      const y = (window.innerHeight - e.pageY * speed) / 120;

      center.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.scroll_indicator}></div>
      <div className={styles.video_background_overlay}>
        <video playsInline autoPlay muted loop>
          <source
            src="https://themes.fourthwall.com/themes/assets/11d2f253-34b7-4fdc-b01b-17868cd74972/assets/video-bg-light.mp4?v=364d6351-2cdd-8622-b962-d429a0989974"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className={styles.center_content + " moving"}>
        <h2>Bonjour, I'm Guhan</h2>
        <AnimatedText texts={titles} />
      </div>
      <div className={styles.side_social}>
        {
          socials.map(social => <a target="_blank" key={social.id} href={social.url}><img src={social.icon}/></a>)
        }
        <span className={styles.line}></span>
      </div>
      <div className={styles.side_email}>
        <a href="mailto:bkguhan2001@gmail.com">bkguhan2001@gmail.com</a>
        <span className={styles.line}></span>
      </div>
    </div>
  );
};

export default LandingSection;
