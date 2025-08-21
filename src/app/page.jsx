import React from 'react';
import styles from './home.module.css';
import { FaGraduationCap, FaTools, FaBriefcase, FaHandsHelping, FaHeart, FaUsers, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Empowering Dreams, <span>Transforming Lives</span></h1>
            <p className={styles.p}>Providing educational opportunities and skills development for underprivileged communities in Nigeria</p>
            <div className={styles.heroButtons}>
              <a href="/donate" className={styles.primaryBtn}>
                <span>Donate Now</span>
              </a>
              <a href="/apply" className={styles.secondaryBtn}>
                <span>Apply for Scholarship</span>
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.floatingElement1}></div>
            <div className={styles.floatingElement2}></div>
            <div className={styles.floatingElement3}></div>
            <div className={styles.heroImage}>
              <img src="https://images.unsplash.com/photo-1710770563074-6d9cc0d3e338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHRlY2glMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Community Empowerment" />
            </div>
          </div>
        </div>
        <div className={styles.waveDivider}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <FaGraduationCap />
            </div>
            <h3>500+</h3>
            <p className={styles.p}>Scholarships Awarded</p>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <FaUsers />
            </div>
            <h3>1200+</h3>
            <p className={styles.p}>Beneficiaries Trained</p>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <FaMapMarkerAlt />
            </div>
            <h3>45+</h3>
            <p className={styles.p}>Communities Reached</p>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <FaCalendarAlt />
            </div>
            <h3>7</h3>
            <p className={styles.p}>Years of Service</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className={styles.programs}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Programs</h2>
            <p className={styles.sectionSubtitle}>We offer comprehensive support to empower individuals and communities</p>
          </div>
          <div className={styles.programGrid}>
            <div className={styles.programCard}>
              <div className={styles.programIcon}>
                <FaGraduationCap />
              </div>
              <h3>Education Scholarships</h3>
              <p className={styles.p}>Financial support for primary to tertiary education, including books and learning materials</p>
              <a href="/programs/scholarships" className={styles.programLink}>Learn More →</a>
            </div>
            <div className={styles.programCard}>
              <div className={styles.programIcon}>
                <FaTools />
              </div>
              <h3>Skills Acquisition</h3>
              <p className={styles.p}>Vocational training in various trades including tailoring, carpentry, and technology skills</p>
              <a href="/programs/skills" className={styles.programLink}>Learn More →</a>
            </div>
            <div className={styles.programCard}>
              <div className={styles.programIcon}>
                <FaBriefcase />
              </div>
              <h3>Business Support</h3>
              <p className={styles.p}>Seed funding, mentorship, and resources for small business startups and entrepreneurs</p>
              <a href="/programs/business" className={styles.programLink}>Learn More →</a>
            </div>
            <div className={styles.programCard}>
              <div className={styles.programIcon}>
                <FaHandsHelping />
              </div>
              <h3>Community Outreach</h3>
              <p className={styles.p}>Healthcare initiatives, welfare programs, and advocacy for community development</p>
              <a href="/programs/outreach" className={styles.programLink}>Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className={styles.impact}>
        <div className={styles.container}>
          <div className={styles.impactContent}>
            <div className={styles.impactText}>
              <h2>Our Impact</h2>
              <p className={styles.p}>Through our programs, we've transformed lives and communities across Nigeria. Our holistic approach ensures sustainable development and lasting change.</p>
              <div className={styles.impactStats}>
                <div className={styles.impactStat}>
                  <strong>92%</strong>
                  <span>Scholarship Completion Rate</span>
                </div>
                <div className={styles.impactStat}>
                  <strong>78%</strong>
                  <span>Employment After Training</span>
                </div>
                <div className={styles.impactStat}>
                  <strong>15k+</strong>
                  <span>Lives Impacted</span>
                </div>
              </div>
              <a href="/impact" className={styles.primaryBtn}>
                <span>See Our Impact</span>
              </a>
            </div>
            <div className={styles.impactVisual}>
              <div className={styles.impactImage}>
                <img src="https://images.unsplash.com/photo-1624154670578-42532d763bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2glMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Our Impact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Success Stories</h2>
            <p className={styles.sectionSubtitle}>Hear from those whose lives have been transformed through our programs</p>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.p}>"Thanks to EDMERCY's scholarship, I'm now studying medicine at UNN. You've changed my life forever and given me hope for a brighter future."</p>
                <div className={styles.author}>
                  <div className={styles.authorImage}>
                    <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Chidinma O." />
                  </div>
                  <div className={styles.authorInfo}>
                    <strong>Chidinma O.</strong>
                    <span>Medical Student</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.p}>"The tailoring skills I learned enabled me to start my own business and support my family. EDMERCY didn't just teach me a skill, they gave me dignity."</p>
                <div className={styles.author}>
                  <div className={styles.authorImage}>
                    <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Aisha M." />
                  </div>
                  <div className={styles.authorInfo}>
                    <strong>Aisha M.</strong>
                    <span>Fashion Entrepreneur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Join Us in Making a Difference</h2>
            <p className={styles.p}>Your support can transform lives and create lasting change in communities across Nigeria</p>
            <div className={styles.ctaButtons}>
              <a href="/donate" className={styles.primaryBtn}>
                <span>Donate Now</span>
              </a>
              <a href="/volunteer" className={styles.secondaryBtn}>
                <span>Become a Volunteer</span>
              </a>
              <a href="/partner" className={styles.tertiaryBtn}>
                <span>Partner With Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}