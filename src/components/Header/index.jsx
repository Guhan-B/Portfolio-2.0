import React from "react";

import styles from "./style.module.css";
import LOGO_DARK from "../../assets/Logo-Dark.svg";
import LOGO_LIGHT from "../../assets/Logo-Light.svg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [colorClass, setColorClass] = React.useState("dark");

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if(window.scrollY > window.innerHeight / 2) {
        setColorClass("light");
      }
      else {
        setColorClass("dark");
      }
    });
  }, []);

  const burgerClasses = [styles.burger, styles[colorClass]];
  const headerClasses = [styles.header, styles[colorClass]];
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
      <div className={headerClasses.join(" ")}>
        <div className={styles.header_left}>
          <img className={styles.logo} src={colorClass === "dark" ? LOGO_LIGHT : LOGO_DARK} alt="Logo" />
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
