import React from "react";
import styles from "./Navbar.module.css";
// import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <p>JobHunt</p>
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
