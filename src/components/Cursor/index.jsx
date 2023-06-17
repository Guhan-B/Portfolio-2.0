import React from "react";

import styles from "./styles.module.css";

const Cursor = () => {
  const cursorRef = React.useRef(null);
  const cursorFollowRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;

        const mouseX = clientX - cursorRef.current.clientWidth / 2;
        const mouseY = clientY - cursorRef.current.clientHeight / 2;

        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorFollowRef.current.style.transform = `translate3d(${mouseX + 8}px, ${mouseY + 8}px, 0)`;
    });
  }, []);

  return (
    <React.Fragment>
        <div className={styles.cursor} ref={cursorRef}></div>
        <div className={styles.cursor_follow} ref={cursorFollowRef}></div>
    </React.Fragment>
  );
};

export default Cursor;
