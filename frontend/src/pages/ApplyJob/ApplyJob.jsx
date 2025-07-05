import React from "react";
import styles from "./ApplyJob.module.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

const ApplyJob = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      {/* Header */}
      <h1 className={styles.title}>Apply for Collaboration</h1>

      {/* Tags */}
      <div className={styles.tags}>
        <span className={`${styles.tag} ${styles.fund}`}>Fund Raising</span>
        <span className={`${styles.tag} ${styles.equity}`}>Equity Split</span>
        <span className={`${styles.tag} ${styles.collab}`}>Open to Collaborate</span>
      </div>

      {/* Description */}
      <h3 className={styles.sectionTitle}>Job Description</h3>
      <p className={styles.description}>
        This platform empowers marketers to grow their social media following and
        engagement through reliable tools and high-quality services. With features
        like a reseller and referral program, anonymous transactions, and
        user-friendly onboarding, it offers a seamless experience for those looking
        to expand their digital footprint while keeping their data protected.
      </p>

<button className={styles.btn1}>Attach Resume</button>

      <hr className={styles.divider} />

   <div className={styles.formGroup}>
          <label>Why do you want to join this team?</label>
          <textarea placeholder="Write a brief here" rows="4"></textarea>
        </div>

      <hr className={styles.divider} />

   <div className={styles.formGroup}>
          <label>Why do you want to join this team Some other question here?</label>
          <textarea placeholder="Write a brief here" rows="4"></textarea>
        </div>

      <hr className={styles.divider} />
         <div className={styles.actionButtons}>
                  <button type="button" className={styles.cancelBtn}>Cancel</button>
                  <button type="submit" className={styles.submitBtn}>Create Project</button>
                </div>

</div>


    <Footer/>
    </>
  );
};

export default ApplyJob;
