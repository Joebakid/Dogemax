import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import "./App.css";
import WhatIsDogemax from "./WhatIsDogemax";
import More from "./More";
import WhyDogecoin from "./WhyDogecoin";
import ChatWithDogeMax from "./ChatWithDogeMax";
import JoinCommunity from "./JoinCommunity";
import Footer from "./Footer";

function App() {
  function Card({ icon, text }) {
    return (
      <div className="card">
        <div>{icon}</div>
        <div className="text-color-card">{text}</div>
      </div>
    );
  }
  function Btn({ text, href }) {
    return (
      <a className="btn" href={href}>
        {text}
      </a>
    );
  }
  return (
    <div className="App">
      <Navbar />
      <Header Btn={Btn} />
      <WhatIsDogemax />
      <More Card={Card} />
      <WhyDogecoin Card={Card} />
      <ChatWithDogeMax Btn={Btn} />
      <JoinCommunity Btn={Btn} />
      <Footer />
    </div>
  );
}

export default App;
