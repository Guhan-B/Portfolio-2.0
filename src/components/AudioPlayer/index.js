import React, { useRef, useState } from 'react';

import styles from "./style.module.css";

import Music from "../../assets/music.mp3";
import Play from "../../assets/Play.svg";
import Pause from "../../assets/Pause.svg";

const AudioPlayer = () => {
    const audio = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    React.useEffect(() => {
        audio.current = new Audio(Music);
        audio.current.loop = true;
        audio.current.volume = 0.5;
    }, []);

    const play = () => {
        audio.current.play();
        setIsPlaying(true);
    }

    const pause =() => {
        audio.current.pause();
        setIsPlaying(false);
    }

    return (
        <button className={styles.audio_button} onClick={isPlaying ? pause : play}>
            <img src={isPlaying ? Pause : Play}/>
        </button>
    )
}

export default AudioPlayer;