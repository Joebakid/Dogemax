import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ChatWithDogeMax({ Btn }) {
  useEffect(() => {
    // Animate the Dogemax image
    gsap.fromTo(
      ".memecoin-dogemax",
      { opacity: 0, scale: 0.8, y: -50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".memecoin-dogemax",
          start: "top 85%", // Adjusted start point
          end: "top 65%", // Adjusted end point
          scrub: true,
        },
      }
    );

    // Animate the title and text
    gsap.fromTo(
      [".ChatWithDogeMax-title", ".ChatWithDogeMax-text"],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".ChatWithDogeMax-content",
          start: "top 95%", // Adjusted start point
          end: "top 75%", // Adjusted end point
          scrub: true,
        },
      }
    );

    // Animate the button
    gsap.fromTo(
      ".ChatWithDogeMax-content button",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 3,
        scrollTrigger: {
          trigger: ".ChatWithDogeMax-content",
          start: "top 95%",
          end: "top 75%",
          scrub: true,
        },
      }
    );

    // Animate the unique image
    gsap.fromTo(
      ".unique-img",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".unique",
          start: "top 85%", // Adjusted start point
          end: "top 65%", // Adjusted end point
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="container">
        <div className="memecoin-img">
          <img
            className="memecoin-dogemax"
            src=" /img/memecoin-img.png"
            alt="is dogemax a memecoin?"
          />
        </div>
        <div className="ChatWithDogeMax-content">
          <div className="ChatWithDogeMax-ttile-text">
            <h2 className="ChatWithDogeMax-title">Chat with DOGEMAX</h2>
            <h3 className="ChatWithDogeMax-text">
              Your Personal Dogecoin Guru{" "}
            </h3>
          </div>
          <Btn href="https://x.com/dogemax_ai/status/1875713416268054825?t=8AWBGN0IA8ZRmN3NBzX1bA&s=19" text="Ask Dogemax" />
        </div>
        <div className="unique">
          <img
            // className="unique"
            className="unique-img"
            src=" /img/unique.png"
            alt="what makes it unique?"
          />
        </div>
      </div>
    </section>
  );
}

export default ChatWithDogeMax;
