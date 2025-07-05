import React from "react";
import styles from "./MarketPlaceCard.module.css";

const MarketPlaceCard = ({ name, description, revenue, profit, askingPrice, tag }) => {
  return (
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
          Revenue
          <p>{revenue}</p>
        </div>
        <div className={styles.statsheading}>
          Profit
          <p>{profit}</p>
        </div>
        <div className={styles.statsheading}>
          Asking Price
          <p>{askingPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceCard;
