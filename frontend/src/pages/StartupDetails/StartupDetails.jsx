import React from "react";
import styles from "./StartupDetails.module.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

const StartupDetails = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      {/* Header */}
      <h1 className={styles.title}>Startup Name Here</h1>

      {/* Tags */}
      <div className={styles.tags}>
        <span className={`${styles.tag} ${styles.fund}`}>Fund Raising</span>
        <span className={`${styles.tag} ${styles.equity}`}>Equity Split</span>
        <span className={`${styles.tag} ${styles.collab}`}>Open to Collaborate</span>
      </div>

      {/* Description */}
      <h3 className={styles.sectionTitle}>Description</h3>
      <p className={styles.description}>
        This platform empowers marketers to grow their social media following and
        engagement through reliable tools and high-quality services. With features
        like a reseller and referral program, anonymous transactions, and
        user-friendly onboarding, it offers a seamless experience for those looking
        to expand their digital footprint while keeping their data protected.
      </p>

      <hr className={styles.divider} />

      {/* Recent Performance */}
      <h3 className={styles.sectionTitle}>Recent Performance</h3>
      <div className={styles.performance}>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>TTM REVENUE</span>

          <div className={styles.metricLabel2}>
            <img src="./Get Revenue.svg" alt="" />
          <p className={styles.metricValue}> $100k</p>
          </div>

        </div>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>TTM PROFIT</span>
          <div className={styles.metricLabel2}>
            <img src="./Get Revenue.svg" alt="" />
          <p className={styles.metricValue}> $100k</p>
          </div>
        </div>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>LAST MONTH REVENUE</span>
         <div className={styles.metricLabel2}>
            <img src="./Get Revenue.svg" alt="" />
          <p className={styles.metricValue}> $100k</p>
          </div>
        </div>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>LAST MONTH PROFIT</span>
        <div className={styles.metricLabel2}>
            <img src="./Get Revenue.svg" alt="" />
          <p className={styles.metricValue}> $100k</p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Positions */}
      <h3 className={styles.sectionTitle}>Apply For Positions</h3>
      <div className={styles.positions}>
        <button className={styles.btn}>Graphic Designer</button>
        <button className={`${styles.btn}`}>Senior Developer</button>
        <button className={styles.btn}>Android Developer</button>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default StartupDetails;
