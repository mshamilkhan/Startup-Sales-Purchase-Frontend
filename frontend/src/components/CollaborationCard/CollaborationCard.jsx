import React from "react";
import styles from "./CollaborationCard.module.css";
import { Link } from 'react-router-dom';

const CollaborationCard = ({ name, description, earnthrough, phase, team, tag }) => {
  return (
    <Link to="/startupdetail" className={styles.linkWrapper}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.icon}>
            <img src="./diamond.svg" alt="" />
            <img src="./Decentralized Network.svg" alt="" />
            <h3>{name}</h3>
          </div>
          <span className={styles.tag}>{tag}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.stats}>
          <div className={styles.statsheading}>
            Earn Through
            <p>{earnthrough}</p>
          </div>
          <div className={styles.statsheading}>
            Phase
            <p>{phase}</p>
          </div>
          <div className={styles.statsheading}>
            Team Members
            <p>{team}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollaborationCard;
