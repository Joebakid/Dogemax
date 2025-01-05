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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      menuIconRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        delay: 0.5,
      }
    );

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
          <a ref={logoRef} className="logo" href="#home">
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
          <ul className={`list-nav-container ${isMenuOpen ? "active" : ""}`}>
            {[
              { text: "Home", id: "home" },
              { text: "About Us", id: "about-us" },
              { text: "Features", id: "features" },
              { text: "Community", id: "community" },
            ].map((link, index) => (
              <li key={link.text}>
                <a
                  ref={(el) => (navLinksRef.current[index] = el)}
                  href={`#${link.id}`}
                >
                  {link.text}
                </a>
              </li>
            ))}
            {/* Add the "Ask Dogemax" link to the hamburger menu */}
            <li>
              <a
                className="ask-link-hamburger"
                target="_blank"
                href="https://x.com/dogemax_ai"
                rel="noreferrer"
              >
                Ask Dogemax
              </a>
            </li>
          </ul>
          <a
            className="ask-link desktop"
            target="_blank"
            href="https://x.com/dogemax_ai"
            rel="noreferrer"
          >
            Ask Dogemax
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
