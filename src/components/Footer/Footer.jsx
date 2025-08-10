// components/Footer.js
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Foundation Info */}
        <div className={styles.infoSection}>
          <img src="/logo.png" alt="EDMERCY Foundation" className={styles.logo} />
          <p className={styles.mission}>
            Empowering individuals through education, skills development, and community support.
          </p>
          <div className={styles.contact}>
            <p>📍 123 Charity Lane, Enugu, Nigeria</p>
            <p>📞 +234 812 345 6789</p>
            <p>✉️ info@edmercyfoundation.org</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/impact">Impact</Link></li>
            <li><Link href="/get-involved">Get Involved</Link></li>
            <li><Link href="/news">News & Updates</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className={styles.socialSection}>
          <h3>Connect With Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">IN</a>
          </div>
          
          <div className={styles.newsletter}>
            <h3>Stay Updated</h3>
            <form>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} EDMERCY Foundation. All rights reserved. | Registered NGO: IT123456789</p>
      </div>
    </footer>
  );
};

export default Footer;