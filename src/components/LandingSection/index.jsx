import React from "react";
import Button from "../Button";

import styles from "./styles.module.css";
import { socials } from "../../shared/Data";
import WAVE_HAND from "../../assets/Waving Hand.png";

const LandingSection = () => {
  return (
    <div className={styles.wrapper} id="home">

      <div className={styles.scroll_indicator}></div>

      <div className={styles.content}>
        <h2>Hello, I Am <span>Guhan</span></h2>
        <h1>I Build Software Applictions</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque metus massa, sed congue nibh suscipit lacinia. Duis turpis lacus, pretium id ligula tincidunt, euismod sodales tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button label="Check Out My Works"/>
      </div>

      <div className={styles.social}>
        {
          socials.map(
            social => 
            <a rel="noreferrer" target="_blank" key={social.id} href={social.url}>
              <img src={social.icon} alt={social.name}/>
            </a>
          )
        }
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
