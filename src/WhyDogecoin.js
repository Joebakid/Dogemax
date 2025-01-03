import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconOne } from "./SvgTwo";
import { IconTwo } from "./SvgTwo";
import { IconThree } from "./SvgTwo";

gsap.registerPlugin(ScrollTrigger);

function WhyDogecoin({ Card }) {
  useEffect(() => {
    const mm = gsap.matchMedia();

    // Define animations for larger screens
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        ".WhyDogecoin-img",
        { opacity: 0, scale: 0.8, y: -50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".WhyDogecoin-img",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".WhyDogecoin-title, .WhyDogecoin-text",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".WhyDogecoin-write-up",
            start: "top 80%",
            end: "top 60%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".more-content > div",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".more-content",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });

    // Define animations for smaller screens
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".WhyDogecoin-img",
        { opacity: 0, scale: 0.9, y: -30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".WhyDogecoin-img",
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".WhyDogecoin-title, .WhyDogecoin-text",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".WhyDogecoin-write-up",
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".more-content > div",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".more-content",
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
        }
      );
    });

    // Cleanup on unmount
    return () => mm.revert();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="WhyDogecoin-cotent">
          <div>
            <img
              className="WhyDogecoin-img"
              src="/img/dogecoin-logo.png"
              alt="dogecoin logo"
            />
          </div>
          <div className="WhyDogecoin-write-up">
            <h2 className="WhyDogecoin-title">Why Dogecoin ?</h2>
            <p className="WhyDogecoin-text">
              Dogecoin is more than just a cryptocurrency; it’s a movement
              fueled by a passionate and growing community. Here’s what makes it
              unique
            </p>
          </div>
        </div>

        <div>
          <h2 className="more-title">Why Dogecoin?</h2>
          <div className="more-content">
            <Card
              text="Powered by millions of dedicated “Shibes”"
              icon={<IconOne />}
            />
            <Card text="Fast transactions with low fees" icon={<IconTwo />} />
            <Card
              text="Fun Factor, Who said crypto can’t be playful and enjoyable?"
              icon={<IconThree />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyDogecoin;
