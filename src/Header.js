import React, { useEffect } from "react";
import gsap from "gsap";

function Header({ Btn }) {
  useEffect(() => {
    console.log("GSAP animations initialized");

    // Create a GSAP timeline
    const tl = gsap.timeline({
      delay: 1, // Add delay for the nav animation to complete
    });

    // Header animations using fromTo
    tl.fromTo(
      ".header-title",
      { opacity: 0, y: -50 }, // Starting state
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // Ending state
    )
      .fromTo(
        ".header-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.5" // Overlap the animation by 0.5 seconds
      )
      .fromTo(
        ".btn-content",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3" // Slight overlap
      )
      .fromTo(
        ".memecoin-dogemax",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.3, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ".unique",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      );
  }, []);

  return (
    <header>
      <div className="container">
        <section>
          <div className="memecoin-img">
            <img
              className="memecoin-dogemax"
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
             Your fun, knowledgeable guide to exploring and thriving in Doge Ecosystem
            </p>
          </div>
          <div className="unique">
            <img src="/img/unique.png" alt="what makes it unique?" />
          </div>
          <div className="btn-content">
            <Btn text="Ask Dogemax" />
          </div>
          <div className="memecoin-img">
            <img
              className="memecoin-dogemax"
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
