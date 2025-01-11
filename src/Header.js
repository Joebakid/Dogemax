import React, { useEffect } from "react";
import gsap from "gsap";

function Header({ Btn }) {
  useEffect(() => {
    console.log("GSAP animations initialized");

    // Remove hidden class after a short delay
    const container = document.querySelector(".container");
    container.classList.remove("hidden");

    const tl = gsap.timeline({ delay: 1 });

    tl.fromTo(
      ".header-title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        ".header-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ".btn-content",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3"
      )
      .fromTo(
        ".memecoin-dogemax-one",
       { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .fromTo(
        ".unique",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      );

    return () => {
      // Cleanup to prevent potential memory leaks
      tl.kill();
    };
  }, []);

  return (
    <header>
      <div className="container">
        <section>
          <div className="memecoin-img">
            <img
              className=".memecoin-dogemax memecoin-dogemax-one"
              src="/img/memecoin-img.png"
              alt="is dogemax a memecoin?"
            />
          </div>
          <div className="header-content">
            <h1 className="header-title">
              unleash the power of dogecoin With{" "}
              <b className="highlighted-text-header">dogemax</b>, your AI
              companion
            </h1>
            <p className="header-text">
              Your fun, knowledgeable guide to exploring and thriving in Doge
              Ecosystem
            </p>
          </div>
          <div className="unique">
            <img src="/img/unique.png" alt="what makes it unique?" />
          </div>
          <div className="btn-content">
            <Btn text="Ask Dogemax" href="https://x.com/dogemax_ai" />
          </div>
          <div className="memecoin-img">
            <img
              className="memecoin-dogemax memecoin-dogemax-two"
              src="/img/memecoin-img.png"
              alt="is dogemax a memecoin?"
            />
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
