import React from "react";
import Card from "./Card";
import styles from "./Home.module.css";
import Top from "./Top";

const Home = () => {
  return (
    <div>
      <Top />
      <h2>Search bar</h2>
      <h2>Card</h2>

      <div className={styles.cards}>
        {new Array(8).fill(0).map((el) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default Home;
