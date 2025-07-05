import React, { useState } from "react";
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import CollaborationCard from "../../components/CollaborationCard/CollaborationCard";
import styles from "./Collaboration.module.css";

const startups = Array(12).fill({
  name: "Startup Name",
  description:
    "Cloud-based logging tool for amateur radio operators to manage and access log data easily.",
  earnthrough: "Equity",
  phase: "beginning",
  team: "34",
  tag: "Fund Raising",
});

const Collaboration = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <>
    <div className={styles.main}>

    
      <Navbar />
      <div className={styles.marketplace}>
        <div className={styles.header}>
          <h2>Collaborations</h2>

          {/* Mobile Filter Toggle Button */}
          <button className={styles.filterToggle} onClick={toggleFilters}>
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>

          {/* Filters Section */}
          <div
            className={`${styles.filters} ${
              showFilters ? styles.showFilters : ""
            }`}
          >
            <select>
              <option>Sort by Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
            <select>
              <option>Type</option>
              <option>SaaS</option>
              <option>Ecommerce</option>
              <option>Agency</option>
            </select>
            <select>
              <option>Revenue</option>
              <option>Highest First</option>
              <option>Lowest First</option>
            </select>
            <select>
              <option>Date</option>
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {startups.map((startup, index) => (
            <CollaborationCard key={index} {...startup} />
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export { Collaboration };
