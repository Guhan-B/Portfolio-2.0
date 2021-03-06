import React from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.css";

import { skills, tools } from "../../shared/Data";

const SkillSection = () => {
  return (
    <div className={styles.wrapper}>
        <h1>Skills and Capabilities</h1>
        <div className={styles.list_grid}>
            <div className={styles.skill_list}>
                { skills.map(skill => <SkillListItem key={skill.id} skill={skill} />) }
            </div>

            <div className={styles.tool_list}>
                { tools.map(tool => <ToolListItem key={tool.id} tool={tool}/>) }
            </div>
        </div>
    </div>
  );
};

const SkillListItem = ({ skill }) => {
  return (
    <div key={skill.id} className={styles.skill_list_item} id="skills">
      <p>{skill.name}</p>
      <span className={styles.line}>
        <motion.span 
          initial={{width: 0}} 
          whileInView={{width: `${skill.percent}%`, transition: {duration: 0.5, delay: 0.5}}}
          viewport={{once: true}}
        />
      </span>
    </div>
  );
};

const ToolListItem = ({ tool }) => {
    return (
        <div key={tool.id} className={styles.tool_list_item}>
            <p>{ tool.name }</p>
            <span>
                { tool.icons.map((icon, i) => <img key={i} src={icon} alt={tool.name}/>) }
            </span>
        </div>
    );
}

export default SkillSection;
