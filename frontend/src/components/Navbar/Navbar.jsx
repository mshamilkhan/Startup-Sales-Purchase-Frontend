import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/sellers", label: "Sellers" },
    { path: "/buyers", label: "buyers" },
    { path: "/collaboration", label: "Collaboration" },
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Signup" },
    
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <Link to="/" className={styles.logoContainer}>
        <img src="./logo.svg" alt="Logo" className={styles.logo} />
      </Link>

      <div className={styles.navLinks}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`${styles.navLink} ${
              location.pathname === link.path ? styles.active : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <button
        className={`${styles.mobileMenuButton} ${
          isMenuOpen ? styles.active : ""
        }`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
      >
        <div className={styles.mobileMenuHeader}>
          <Link to="/" onClick={closeMenu}>
            <img src="./logo.svg" alt="Logo" className={styles.logo} />
          </Link>
          <button className={styles.closeButton} onClick={closeMenu}>
            <span></span>
            <span></span>
          </button>
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`${styles.navLink} ${
              location.pathname === link.path ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export { Navbar };
