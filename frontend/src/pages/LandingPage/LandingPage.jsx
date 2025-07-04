import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"; // Assuming you're using CSS Modules

function LandingPage() {
  return (
    <>
      <Navbar />

      <div className={styles.home_container}>
        <div className={styles.hero_section}>
          {/* Overlay */}
          <div className={styles.overlay}></div>

          {/* Content */}
          <div className={styles.hero_section_content}>
            <p className={styles.p1}>The largest marketplace to
buy and sell businesses</p>
            <p className={styles.p2}>Join 500k+ entrepreneurs closing life-changing deals. Buy and sell SaaS,
 ecommerce, agencies, content, newsletters, mobile apps and crypto businesses.</p>
            <div className={styles.button_container}>
              <Link to="/contact">
                <button>Marketplace</button>
              </Link>
              <Link to="/contact">
                <button>Upload Startup</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { LandingPage };
