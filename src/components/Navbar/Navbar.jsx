// components/Navbar.js
"use client"
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import MobileNav from './MobileNav'; // We'll create this

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src="/l2.png" alt="EDMERCY Foundation" />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/programs" className={styles.navLink}>Programs</Link>
          <Link href="/impact" className={styles.navLink}>Impact</Link>
          <Link href="/get-involved" className={styles.navLink}>Get Involved</Link>
          <Link href="/news" className={styles.navLink}>News</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/donate" className={styles.donateBtn}>Donate Now</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenu} onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;