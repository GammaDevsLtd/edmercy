import React from "react";
import styles from "./home.module.css"
import Image from "next/image";
import { FaGraduationCap, FaTools, FaBriefcase, FaHandsHelping } from "react-icons/fa";


export default function Home(){
  return (
    <div className={styles.page}>
  <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>EDMERCY Foundation</h1>
        <p>
          Empowering lives through education, skill acquisition, and economic
          support for underprivileged communities.
        </p>
        <div className={styles.heroButtons}>
          <a href="/donate" className={styles.btnPrimary}>Donate Now</a>
          <a href="/programs" className={styles.btnSecondary}>Our Programs</a>
        </div>
      </div>

      <div className={styles.heroImage}>
        <Image
          src="https://media.istockphoto.com/id/2186780950/photo/software-engineers-collaborating-on-a-project-analyzing-code-on-computer-monitors-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=JvSdMT4MBBhWUzNiP2hJbB_Bm5KN-sNv0HQbAUnMPbU="
          alt="EDMERCY Foundation"
          width={500}
          height={400}
        />
      </div>
    </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statItem}>
            <h3>500+</h3>
            <p>Scholarships Awarded</p>
          </div>
          <div className={styles.statItem}>
            <h3>1200+</h3>
            <p>Beneficiaries Trained</p>
          </div>
          <div className={styles.statItem}>
            <h3>45+</h3>
            <p>Communities Reached</p>
          </div>
          <div className={styles.statItem}>
            <h3>7</h3>
            <p>Years of Service</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
        <section className={styles.programs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Programs</h2>
          <div className={styles.programGrid}>
            <div className={styles.programCard}>
              <div className={styles.icon}>
                <FaGraduationCap className={styles.iconSvg} />
              </div>
              <h3>Education Scholarships</h3>
              <p>Financial support for primary to tertiary education</p>
            </div>
            <div className={styles.programCard}>
              <div className={styles.icon}>
                <FaTools className={styles.iconSvg} />
              </div>
              <h3>Skills Acquisition</h3>
              <p>Vocational training in various trades</p>
            </div>
            <div className={styles.programCard}>
              <div className={styles.icon}>
                <FaBriefcase className={styles.iconSvg} />
              </div>
              <h3>Business Support</h3>
              <p>Seed funding and mentorship for startups</p>
            </div>
            <div className={styles.programCard}>
              <div className={styles.icon}>
                <FaHandsHelping className={styles.iconSvg} />
              </div>
              <h3>Community Outreach</h3>
              <p>Healthcare, welfare and advocacy programs</p>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Success Stories</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>"Thanks to EDMERCY's scholarship, I'm now studying medicine at UNN. You've changed my life forever."</p>
              <div className={styles.author}>
                <strong>Chidinma O.</strong>
                <span>Medical Student</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p>"The tailoring skills I learned enabled me to start my own business and support my family."</p>
              <div className={styles.author}>
                <strong>Aisha M.</strong>
                <span>Fashion Entrepreneur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Join Us in Making a Difference</h2>
          <p>Your support can transform lives and communities</p>
          <div className={styles.ctaButtons}>
            <a href="/donate" className={styles.primaryBtn}>Donate Now</a>
            <a href="/volunteer" className={styles.secondaryBtn}>Become a Volunteer</a>
          </div>
        </div>
      </section>

    </div>
  )
}