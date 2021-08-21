import React from "react";

const Searchbar = () => {
  return (
    <div
      style={{
        postion: "absolute",
        width: "1154px",
        height: "100px",
        left: "143px",
        top: "314px",
        // width: "80%",
        marginTop: "-45px",
        display: "flex",
        // padding: "10px 20px",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "30px",
        margin: "auto",
        border: "1px solid black",
        background: "#fff",
        borderRadius: "10px",
      }}
    >
      <input
        style={{ border: "none", fontSize: "1.1rem" }}
        type="text"
        placeholder="Job title or Keyword"
      />
      <div>
        <span>Select Location </span>
        <select style={{ border: "none", paddingLeft: "40px" }}></select>
      </div>
      <button
        style={{
          display: "block",
          width: "200px",
          borderRadius: "5px",
          color: "white",
          fontWeight: "600",
          background: "#F07987",
          padding: 10,
        }}
      >
        {" "}
        Search
      </button>
    </div>
  );
};

export default Searchbar;
