import React from 'react';
import styles from './About.module.css';
import { FaUsers, FaHeart, FaAward, FaHandsHelping, FaQuoteLeft } from 'react-icons/fa';

export default function About() {
  return (
    <>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>About EDMERCY Foundation</h1>
            <p>Empowering individuals and communities through education, skills development, and sustainable support systems</p>
          </div>
        </div>
        <div className={styles.waveDivider}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <FaHeart />
              </div>
              <h2>Our Mission</h2>
              <p>To provide educational opportunities, skills acquisition, and economic support to underprivileged individuals and communities, enabling them to achieve self-reliance and contribute meaningfully to society.</p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <FaAward />
              </div>
              <h2>Our Vision</h2>
              <p>To create a society where every individual has access to quality education, economic opportunities, and the support needed to realize their full potential, regardless of their background.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className={styles.history}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.sectionSubtitle}>From humble beginnings to impactful community transformation</p>
          </div>
          <div className={styles.historyContent}>
            <div className={styles.historyText}>
              <p>EDMERCY Foundation was established in 2016 with a simple yet powerful vision: to create opportunities for those who need them most. Inspired by the challenges faced by underprivileged communities in Nigeria, our founder envisioned an organization that would address educational disparities, economic inequalities, and social exclusion through comprehensive support programs.</p>
              
              <p>What began as a small initiative to support a few students with scholarships has grown into a multifaceted organization impacting thousands of lives across multiple communities. Our name, EDMERCY, combines "Education" and "Mercy" - reflecting our core belief that education is the most powerful tool for showing mercy and creating lasting change.</p>
              
              <p>Over the past 7 years, we've expanded our programs to include skills acquisition training, small business support, community outreach, and advocacy initiatives. Each program is designed with sustainability in mind, ensuring that our interventions create lasting impact beyond immediate assistance.</p>
              
              <div className={styles.founderNote}>
                <FaQuoteLeft className={styles.quoteIcon} />
                <p>We believe that every individual deserves the opportunity to thrive, not just survive. Our work is guided by the conviction that with the right support, communities can transform their own futures.</p>
              </div>
            </div>
            <div className={styles.historyImage}>
              <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="EDMERCY Foundation History" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.sectionSubtitle}>The principles that guide everything we do</p>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Compassion</h3>
              <p>We approach our work with empathy and understanding, recognizing the unique challenges faced by each individual and community we serve.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Integrity</h3>
              <p>We maintain the highest standards of honesty, transparency, and accountability in all our operations and relationships.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Excellence</h3>
              <p>We strive for quality in all our programs, continuously seeking to improve and maximize our impact.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Innovation</h3>
              <p>We embrace creative solutions and adapt our approaches to address evolving challenges and opportunities.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Collaboration</h3>
              <p>We believe in the power of partnerships and work closely with communities, government agencies, and other organizations.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Sustainability</h3>
              <p>We design programs that create lasting change, empowering beneficiaries to become self-reliant and contribute to community development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Trustees</h2>
            <p className={styles.sectionSubtitle}>The dedicated individuals guiding our mission</p>
          </div>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Ogbujah Columbus N." />
              </div>
              <h3>Ogbujah Columbus N.</h3>
              <p className={styles.memberRole}>Chairman</p>
              <p className={styles.memberBio}>With over 15 years of experience in community development, Columbus provides strategic direction and leadership to the foundation.</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Nkama Nympha Uchenna" />
              </div>
              <h3>Nkama Nympha Uchenna</h3>
              <p className={styles.memberRole}>Secretary</p>
              <p className={styles.memberBio}>Nympha brings expertise in administration and project management, ensuring the smooth operation of all foundation activities.</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Ogbujah Stanley Ifeanyi" />
              </div>
              <h3>Ogbujah Stanley Ifeanyi</h3>
              <p className={styles.memberRole}>Trustee</p>
              <p className={styles.memberBio}>Stanley specializes in educational programs and has been instrumental in developing our scholarship framework.</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Okwarah Henry Uchechukwu" />
              </div>
              <h3>Okwarah Henry Uchechukwu</h3>
              <p className={styles.memberRole}>Trustee</p>
              <p className={styles.memberBio}>Henry focuses on skills acquisition programs and partnerships with vocational training institutions.</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Okohue Jude Ehiabhi" />
              </div>
              <h3>Okohue Jude Ehiabhi</h3>
              <p className={styles.memberRole}>Trustee</p>
              <p className={styles.memberBio}>Jude oversees our community outreach initiatives and ensures alignment with local needs and priorities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className={styles.registration}>
        <div className={styles.container}>
          <div className={styles.registrationContent}>
            <div className={styles.registrationText}>
              <h2>Official Registration</h2>
              <p>EDMERCY Foundation is a duly registered non-governmental organization with the Corporate Affairs Commission of Nigeria.</p>
              <div className={styles.registrationDetails}>
                <div className={styles.detailItem}>
                  <strong>Registration Number:</strong>
                  <span>IT-123456789</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Date of Registration:</strong>
                  <span>15th March, 2016</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Address:</strong>
                  <span>123 Charity Lane, Enugu, Nigeria</span>
                </div>
              </div>
            </div>
            <div className={styles.registrationBadge}>
              <div className={styles.badgeIcon}>
                <FaHandsHelping />
              </div>
              <p>Registered NGO</p>
              <span>Since 2016</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Join Our Mission</h2>
            <p>Whether through volunteering, partnerships, or donations, your support can help us create more impact</p>
            <div className={styles.ctaButtons}>
              <a href="/get-involved" className={styles.primaryBtn}>Get Involved</a>
              <a href="/contact" className={styles.secondaryBtn}>Contact Us</a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}