import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="container">
        <div className="nav-container">
          <a className="logo" href="link">
            Dogemax
          </a>
          <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`list-nav-container ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="link">Home</a>
            </li>
            <li>
              <a href="link">About Us</a>
            </li>
            <li>
              <a href="link">Feature</a>
            </li>
            <li>
              <a href="link">Community</a>
            </li>
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
