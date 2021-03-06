import React from "react";

import styles from "./style.module.css";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const burgerClasses = [styles.burger];
  const menuClasses = [styles.links];

  if (isOpen) {
    burgerClasses.push(styles.active);
    menuClasses.push(styles.active);
  }

  const toggleMenu = () => {
    setIsOpen((state) => !state);
  };

  return (
    <React.Fragment>
      <div className={burgerClasses.join(" ")} onClick={toggleMenu}>
        <span></span>
        <span></span>
      </div>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <img className={styles.logo} src={Logo} alt="Logo" />
        </div>
        <div className={styles.header_right}>
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
