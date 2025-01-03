import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function JoinCommunity({ Btn }) {
  useEffect(() => {
    gsap.fromTo(
      ".JoinCommunity-content h2, .JoinCommunity-content p",
      { opacity: 0, y: 30 }, // Initial state (hidden and slightly lower)
      {
        opacity: 1,
        y: 0,
        duration: 5,
        stagger: 0.2, // Add a small delay between animations for each element
        scrollTrigger: {
          trigger: ".JoinCommunity-content", // Element to trigger the animation
          start: "top 90%", // Start when the top of the element is at 90% of the viewport
          end: "top 70%", // End when the top of the element reaches 70%
          scrub: true, // Smooth scrubbing for animation
        },
      }
    );

    gsap.fromTo(
      ".JoinCommunity-content button",
      { opacity: 0, scale: 0.9 }, // Initial state (hidden and smaller)
      {
        opacity: 1,
        scale: 1,
        duration: 5, // Duration of animation for the button
        scrollTrigger: {
          trigger: ".JoinCommunity-content", // Element to trigger the animation
          start: "top 85%", // Start the animation when the element reaches 85% of the viewport
          end: "top 60%", // End when the element reaches 60%
          scrub: true, // Smooth scrubbing for animation
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="container">
        <div className="JoinCommunity-content">
          <h2>Join the dogemax community</h2>
          <p>
            Join a movement like no other. With
            <b className="highlighted-text-header"> DOGEMAX</b>, you’re not just
            investing you’re part of a vibrant community that’s all about
            sharing, laughing, and supporting one another.
          </p>
          <p>
            All information provided by DOGEMAX is for educational purposes
            only. Always conduct your own research before making financial
            decisions.
          </p>

          <Btn text="Join Community" href="link" />
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;
