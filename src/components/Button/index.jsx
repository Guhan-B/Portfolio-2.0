import React from "react";

import styles from "./styles.module.css";
import Arrow from "../../assets/Arrow.svg";

const Button = (props) => {
    const themes = {
        "light" : styles.light,
        "dark" : styles.dark,
    }

    return (
        <button className={[styles.wrapper, themes[props.theme]].join(" ")}>
            <span>{props.label}</span>
            <img src={Arrow} alt="arrow" />
        </button>
    );
}

export default Button;