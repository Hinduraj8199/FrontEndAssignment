import React from "react";
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles.main}>
      <div className={styles.box}>Box</div>
      <div className={styles.info}>
        <h2>Executive Producer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <button
          style={{
            display: "block",
            padding: "2px",
            width: "150px",
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
