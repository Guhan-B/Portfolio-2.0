import React from "react";

import styles from "./style.module.css";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const burgerClasses = [styles.burger];
  const menuClasses =[styles.links]

  if (isOpen) {
    burgerClasses.push(styles.active);
    menuClasses.push(styles.active);
  }

  React.useEffect(() => {
    const header = document.querySelector("#header");

    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 20) {
        header.style.background = "var(--color-black)";
        header.style.padding = "0.75rem 2rem";
      } else {
        header.style.background = "transparent";
        header.style.padding = "1rem 2rem";
      }
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div id="header" className={styles.header}>
      <div className={styles.header_left}>
        <img className={styles.logo} src={Logo} alt="Logo" />
      </div>
      <div className={styles.header_right}>
        <div className={menuClasses.join(" ")}>
          <a onClick={toggleMenu} href="#home">Home</a>
          <a onClick={toggleMenu} href="#about">About</a>
          <a onClick={toggleMenu} href="#showcase">Showcase</a>
          <a onClick={toggleMenu} href="#resume">Resume</a>
        </div>
        <div className={burgerClasses.join(" ")} onClick={toggleMenu}>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
