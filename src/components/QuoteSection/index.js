import React from "react";

import styles from "./styles.module.css";

const QuoteSection = (props) => {
  return (
    <div className={styles.wrapper}>
      <blockquote>
        {props.quote}
      </blockquote>
      <span>- {props.author}</span>
    </div>
  );
};

export default QuoteSection;
