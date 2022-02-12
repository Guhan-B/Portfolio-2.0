import React from "react";

import styles from "./styles.module.css";

import Placeholder from "../../assets/Placeholder.jpg";
import Wave from "../../assets/Wave.gif";

const AboutSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_section}>
        <h1>
          <span>Hola People</span>
          <img src={Wave} alt="wave"/>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          odio enim. Aliquam at pharetra purus. Donec dignissim lectus at turpis
          pharetra, sit amet maximus enim vulputate. Etiam a nulla risus. Donec
          et dolor et nibh vestibulum vulputate et nec lacus. Duis ullamcorper
          est nec risus fermentum, vulputate semper dui blandit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          odio enim. Aliquam at pharetra purus. Donec dignissim lectus at turpis
          pharetra, sit amet maximus enim vulputate. Etiam a nulla risus. Donec
          et dolor et nibh vestibulum vulputate et nec lacus. Duis ullamcorper
          est nec risus fermentum, vulputate semper dui blandit.
        </p>
      </div>
      <div className={styles.right_section}>
        <img src={Placeholder} alt="me"/>
      </div>
    </div>
  );
};

export default AboutSection;