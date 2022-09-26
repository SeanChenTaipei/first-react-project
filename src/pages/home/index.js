import React from "react";
import Topnav from "./components/topnav";
import Content from "./components/content";
import "./index.css";

const Home = () => {
  return (
    <div className="app">
      <Topnav />
      <Content />
    </div>
  );
};

export default Home;