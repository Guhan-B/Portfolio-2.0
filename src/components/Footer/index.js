import React from "react";

import styles from "./styles.module.css";

import { socials } from "../../shared/Data";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        { socials.map(social => <a key={social.id} href={social.url}><img src={social.icon}/></a>) }
      </div>
      <p className={styles.comment}>Thanks for scrolling all the way down 😄, If you liked the portfolio i am happy to hear your comments and if you have any suggestion for changes feel free to share it with me ✌️</p>
      <div className={styles.link_version}>
        <a href="https://github.com/Guhan-B/Portfolio-2.0">Designed & Developed with 💖 by Guhan</a>
        <p>v2.0</p>
      </div>
    </div>
  );
};

export default Footer;
