"use client"
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <img src="/l2.png" alt="EDMERCY Foundation" />
            <span>EDMERCY Foundation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              <span>Home</span>
            </Link>
            <Link href="/about" className={styles.navLink}>
              <span>About Us</span>
            </Link>
            <Link href="/programs" className={styles.navLink}>
              <span>Programs</span>
            </Link>
            <Link href="/impact" className={styles.navLink}>
              <span>Impact</span>
            </Link>
            <Link href="/get-involved" className={styles.navLink}>
              <span>Get Involved</span>
            </Link>
            <Link href="/donate" className={styles.donateBtn}>
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className={styles.mobileMenu} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles.mobileNavContent}>
          <Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>
            <span>Home</span>
          </Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>
            <span>About Us</span>
          </Link>
          <Link href="/programs" className={styles.mobileNavLink} onClick={toggleMenu}>
            <span>Programs</span>
          </Link>
          <Link href="/impact" className={styles.mobileNavLink} onClick={toggleMenu}>
            <span>Impact</span>
          </Link>
          <Link href="/get-involved" className={styles.mobileNavLink} onClick={toggleMenu}>
            <span>Get Involved</span>
          </Link>
          <Link href="/donate" className={styles.mobileDonateBtn} onClick={toggleMenu}>
            <span>Donate Now</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;