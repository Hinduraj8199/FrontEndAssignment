import React from "react";
import Card from "./Card";
import styles from "./Home.module.css";
import Searchbar from "./Searchbar";
import Top from "./Top";

const Home = () => {
  return (
    <div>
      <Top />
      <Searchbar />
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
