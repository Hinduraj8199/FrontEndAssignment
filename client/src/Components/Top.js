import React from "react";
import Navbar from "./Navbar";
import styles from "./Top.module.css";

const Top = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.description}>
        <h1>Find Your Dream Job</h1>
        <p>Browse through thousands of full-time or part-time jobs near you</p>
      </div>
    </div>
  );
};

export default Top;
