import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <p>
          <i class="fas fa-briefcase"></i> JobHunt
        </p>
        <p>Find Jobs</p>
        <p>Upskill Yourself</p>
      </div>
      <div className={styles.right}>
        <p>Post a Job</p>
        <p>Sign in</p>
      </div>
    </div>
  );
};

export default Navbar;
