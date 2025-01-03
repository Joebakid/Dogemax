import React from "react";

function Header({ Btn }) {
  return (
    <header>
      <div className="container">
        <section>
          <div className="memecoin-img">
            <img
              className="memecoin-dogemax"
              src=" /img/memecoin-img.png"
              alt="is dogemax a memecoin?"
            />
          </div>
          <div className="header-content">
            <h1 className="header-title">
              unleash the power of dogecoin With{" "}
              <b className="highlighted-text-header"> dogemax</b> , your AI
              companion
            </h1>
            <p className="header-text">
              Your fun and knowledgeable guide to exploring and thriving in the
              Dogecoin ecosystem
            </p>
          </div>{" "}
          <div className="unique">
            <img
              // className="unique"
              src=" /img/unique.png"
              alt="what makes it unique?"
            />
          </div>
          <div className="btn-content">
            <Btn text="Ask Dogemax" />
          </div>
          <div className="memecoin-img">
            <img
              className="memecoin-dogemax"
              src=" /img/memecoin-img.png"
              alt="is dogemax a memecoin?"
            />
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
