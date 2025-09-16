import React, { useState } from "react";
import styles from "./AccountSettings.module.css";



export default function AccountSettings() {
  const [profilePublic, setProfilePublic] = useState(true);
  const [regions, setRegions] = useState({
    Africa: false,
    Asia: true,
    Australia: false,
    Europe: true,
    "North America": false,
    "South America": true,
  });

  const toggleRegion = (region) => {
    setRegions((prev) => ({ ...prev, [region]: !prev[region] }));
  };

  return (
    <div className={styles.container}>
      {/* Main Content Only (no sidebar) */}
      <main className={styles.main}>
        <div className={styles.section}>
          <h4>Make profile public</h4>
          <div className={styles.toggleRow}>
            <span>Off</span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={profilePublic}
                onChange={() => setProfilePublic(!profilePublic)}
              />
              <span className={styles.slider}></span>
            </label>
            <span>On</span>
          </div>
          <p>
            Below, you can select the regions in which your profile is visible
            and where you can receive project invitations
          </p>
          <div className={styles.regions}>
            {Object.keys(regions).map((region) => (
              <label key={region} className={styles.regionItem}>
                <input
                  type="checkbox"
                  checked={regions[region]}
                  onChange={() => toggleRegion(region)}
                />
                {region}
              </label>
            ))}
          </div>
        </div>

        {/* Profile Card */}
        <div className={styles.profileCard}>
          <div className={styles.avatar}></div>
          <h2>Safi Ullah</h2>
          <p className={styles.location}>Asia, Pakistan</p>
          <p className={styles.tldr}>
            tldr: Safi from Pakistan is a skilled programmer with over 2 years
            of experience building backend solutions in Python.
          </p>

          <div className={styles.skillSection}>
            <h4>Top Skill</h4>
            <p className={styles.skill}>Programming (Python)</p>
            <p className={styles.skillDesc}>
              I've been building backend solutions with Python for over 2 years.
            </p>
            <a href="#">+ Add Reference</a>
          </div>

          <div className={styles.extraSection}>
            <h4>Skills & Hobbies</h4>
            <button className={styles.addBtn}>+ Add skill</button>
          </div>

          <div className={styles.extraSection}>
            <h4>About me</h4>
            <button className={styles.addBtn}>+ Add Business Experience</button>
          </div>

          <div className={styles.footerRow}>
            <button className={styles.saveBtn}>Save & Exit</button>
          </div>
        </div>
      </main>
    </div>
  );
}
