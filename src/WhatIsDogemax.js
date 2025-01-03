import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhatIsDogemax() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      content,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 3, ease: "power2.out" }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="container">
        <div className="WhatIsDogemax-content" ref={contentRef}>
          <div className="WhatIsDogemax-write-up">
            <h2 className="WhatIsDogemax-title">What is dogemax</h2>
            <p className="WhatIsDogemax-text">
              DOGEMAX is your ultimate AI companion for all things Dogecoin.
              Designed to be friendly, humorous, and informative, DOGEMAX
              simplifies the Dogecoin journey for everyone. Whether you’re a
              seasoned trader or just curious about crypto, DOGEMAX has got your
              back.
            </p>
          </div>
          <div>
            <img
              className="WhatIsDogemax-img"
              src="img/dogemax-img.jpeg"
              alt="dogemax-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIsDogemax;
