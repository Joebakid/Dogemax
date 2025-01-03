import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoRef = useRef(null);
  const menuIconRef = useRef(null);
  const navLinksRef = useRef([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Animate logo on page load
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate menu icon on page load
    gsap.fromTo(
      menuIconRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)", delay: 0.5 }
    );

    // Animate nav links on page load
    gsap.fromTo(
      navLinksRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1,
      }
    );
  }, []);

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="nav-container">
          <a ref={logoRef} className="logo" href="link">
            Dogemax
          </a>
          <div
            ref={menuIconRef}
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul
            className={`list-nav-container ${isMenuOpen ? "active" : ""}`}
          >
            {["Home", "About Us", "Feature", "Community"].map((text, index) => (
              <li key={text}>
                <a
                  ref={(el) => (navLinksRef.current[index] = el)}
                  href="link"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <a className="ask-link" href="link">
            Ask Dogemax
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
