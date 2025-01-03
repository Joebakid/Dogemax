import React, { useEffect, useRef } from "react";
import { IconOne } from "./svg";
import { IconTwo } from "./svg";
import { IconThree } from "./svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function More({ Card }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        ".more-title",
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );

      // Animate cards
      gsap.fromTo(
        ".more-content > div",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => context.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="container">
        <h2 className="more-title">More on Dogemax</h2>
        <div className="more-content">
          <Card text="Simplifies complex crypto concepts" icon={<IconOne />} />
          <Card
            text="Shares the latest updates and insights on Dogecoin"
            icon={<IconTwo />}
          />
          <Card
            text="Embodies the spirit of the Dogecoin community fun, inclusive, and approachable"
            icon={<IconThree />}
          />
        </div>
      </div>
    </section>
  );
}

export default More;
