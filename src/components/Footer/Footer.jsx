import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaMapMarkerAlt, FaEnvelope  } from 'react-icons/fa';

const Footer = () => {
  return (
          <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <div className={styles.footerLogo}>
                <img src="/l2.png" alt="EDMERCY Foundation" />
                <span>EDMERCY Foundation</span>
              </div>
              <p>Empowering individuals through education, skills development, and community support.</p>
              <div className={styles.socialLinks}>
                <Link href="#"><FaFacebook/></Link>
                <Link href="#"><FaTwitter /></Link>
                <Link href="#"><FaInstagram /></Link>
                <Link href="#"><FaLinkedin /></Link>
              </div>
            </div>
            <div className={styles.footerSection}>
              <h3>Quick Links</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/programs">Programs</Link></li>
                <li><Link href="/impact">Impact</Link></li>
                <li><Link href="/get-involved">Get Involved</Link></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3>Contact Us</h3>
              <div className={styles.contactInfo}>
                <p><FaMapMarkerAlt /> 123 Charity Lane, Enugu, Nigeria</p>
                <p><FaPhone /> +234 812 345 6789</p>
                <p><FaEnvelope /> info@edmercyfoundation.org</p>
              </div>
            </div>
            <div className={styles.footerSection}>
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter to stay updated on our programs and impact.</p>
              <form className={styles.newsletterForm}>
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} EDMERCY Foundation. All rights reserved. | Registered NGO: IT123456789</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;