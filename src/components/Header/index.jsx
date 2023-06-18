import React from "react";

import styles from "./style.module.css";
import LOGO_DARK from "../../assets/Logo-Dark.svg";
import LOGO_LIGHT from "../../assets/Logo-Light.svg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrollReached, setIsScrollReached] = React.useState(false);

  const burgerClasses = [styles.burger];
  const headerClasses = [styles.header];
  const menuClasses = [styles.menu];

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if(window.scrollY > window.innerHeight / 2) {
        setIsScrollReached(true);
      }
      else {
        setIsScrollReached(false);
      }
    });
  }, []);

  if (isOpen) {
    burgerClasses.push(styles.active);
    menuClasses.push(styles.active);
    headerClasses.push(styles.active)
  }

  if (isScrollReached) {
    headerClasses.push(styles.scrolled);
  }

  const toggleMenu = () => {
    setIsOpen((state) => !state);
  };

  return (
    <React.Fragment>
      <div className={headerClasses.join(" ")}>

        <div className={styles.header_left}>
          <img className={styles.logo} src={isScrollReached ? LOGO_DARK : LOGO_LIGHT} alt="Logo" />
        </div>

        <div className={styles.header_right}>
          <div className={burgerClasses.join(" ")} onClick={toggleMenu}>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>

      <div className={menuClasses.join(" ")}>
        <a onClick={toggleMenu} href="#home">
          Home
        </a>
        <a onClick={toggleMenu} href="#about">
          About
        </a>
        <a onClick={toggleMenu} href="#skills">
          Skills
        </a>
        <a onClick={toggleMenu} href="#contact">
          Contact
        </a>
        <a
          onClick={toggleMenu}
          target="_blank"
          href="https://drive.google.com/file/d/1lh67GHMIzbYG_cdSefiCfu9WFBnMbWYy/view?usp=sharing"
        >
          Resume
        </a>
      </div>
    </React.Fragment>
  );
};

{/*  */ }

export default Header;
