import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import WhatIsDogemax from "./WhatIsDogemax";
import More from "./More";
import WhyDogecoin from "./WhyDogecoin";
import ChatWithDogeMax from "./ChatWithDogeMax";
import JoinCommunity from "./JoinCommunity";
import Footer from "./Footer";
import "./App.css";

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
      <a target="_bank" className="btn" href={href}>
        {text}
      </a>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Header Btn={Btn} />
      </section>
      <section id="about-us">
        <WhatIsDogemax />
      </section>
      <section id="features">
        <More Card={Card} />
      </section>
      <section id="why-dogecoin">
        <WhyDogecoin Card={Card} />
      </section>
      <section id="chat-with-dogemax">
        <ChatWithDogeMax Btn={Btn} />
      </section>
      <section id="community">
        <JoinCommunity Btn={Btn} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
