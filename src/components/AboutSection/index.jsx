import React from "react";
import Button from "../Button";

import styles from "./styles.module.css";

const AboutSection = () => {
  return (
    <div className={styles.wrapper} id="about">
      <div className={styles.left_section}>
        <h1>ABOUT</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque metus massa, sed congue nibh suscipit lacinia. Duis turpis lacus, pretium id ligula tincidunt, euismod sodales tellus. Phasellus id efficitur turpis, eu malesuada ipsum. Nullam ut venenatis nisi, eu efficitur turpis. Suspendisse consectetur vestibulum velit, in ultricies velit</p>
        <p>Nulla semper faucibus libero, vitae fermentum tortor luctus aliquet. In sollicitudin viverra ex ac faucibus. Integer vel tristique odio. Praesent facilisis metus mauris, ut tincidunt leo porttitor quis. Sed eleifend est libero, id sollicitudin quam semper id. Vestibulum posuere nunc turpis, iaculis tristique est luctus nec. Nunc maximus feugiat ex.</p>
        <Button label="Know More" theme="dark"/>
      </div>
      <div className={styles.right_section}></div>
    </div>
  );
};

export default AboutSection;