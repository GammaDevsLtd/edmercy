import React from 'react';
import { FaGraduationCap, FaUsers, FaMapMarkerAlt, FaCalendarAlt, FaChartLine, FaHeart, FaBriefcase, FaTools } from 'react-icons/fa';
import styles from "./impact.module.css";

export default function Impact() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Our Impact</h1>
            <p>Transforming lives and communities through sustainable programs and initiatives</p>
          </div>
        </div>
        <div className={styles.waveDivider}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
          </svg>
        </div>
      </section>

      {/* Key Statistics */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>By The Numbers</h2>
            <p className={styles.sectionSubtitle}>Measurable impact across our programs and initiatives</p>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <FaGraduationCap />
              </div>
              <h3>500+</h3>
              <p>Scholarships Awarded</p>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <FaUsers />
              </div>
              <h3>1,200+</h3>
              <p>Individuals Trained</p>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <FaMapMarkerAlt />
              </div>
              <h3>45+</h3>
              <p>Communities Reached</p>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <FaCalendarAlt />
              </div>
              <h3>7</h3>
              <p>Years of Service</p>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <FaChartLine />
              </div>
              <h3>200+</h3>
              <p>Businesses Supported</p>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <FaHeart />
              </div>
              <h3>15,000+</h3>
              <p>Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className={styles.timeline}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Journey</h2>
            <p className={styles.sectionSubtitle}>Key milestones and achievements since our inception</p>
          </div>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2016</h3>
                <h4>Foundation Established</h4>
                <p>EDMERCY Foundation was officially registered with the Corporate Affairs Commission, beginning our journey of community transformation.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2017</h3>
                <h4>First Scholarship Awards</h4>
                <p>Awarded scholarships to 25 students, marking the beginning of our educational support program.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2018</h3>
                <h4>Skills Acquisition Launch</h4>
                <p>Launched our vocational training program, providing skills in tailoring, carpentry, and computer literacy.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2019</h3>
                <h4>Business Support Initiative</h4>
                <p>Introduced small business grants and mentorship programs for aspiring entrepreneurs.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2020</h3>
                <h4>COVID-19 Response</h4>
                <p>Provided emergency relief to 500+ families and adapted programs for remote delivery during the pandemic.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2021</h3>
                <h4>Community Expansion</h4>
                <p>Expanded our reach to 15 new communities across Enugu State and beyond.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2022</h3>
                <h4>Digital Skills Program</h4>
                <p>Launched a digital literacy program to equip youth with technology skills for the modern workforce.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2023</h3>
                <h4>15,000 Lives Impacted</h4>
                <p>Reached the milestone of impacting over 15,000 lives through our various programs and initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className={styles.stories}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Success Stories</h2>
            <p className={styles.sectionSubtitle}>Real people, real transformations</p>
          </div>
          <div className={styles.storiesGrid}>
            <div className={styles.storyCard}>
              <div className={styles.storyImage}>
                <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Chidinma's Success Story" />
              </div>
              <div className={styles.storyContent}>
                <h3>From Student to Doctor</h3>
                <p>Chidinma received a scholarship from EDMERCY Foundation in 2017. Today, she's in her final year of medical school at UNN and dreams of opening a clinic in her community.</p>
                <div className={styles.storyMeta}>
                  <span className={styles.storyName}>Chidinma O.</span>
                  <span className={styles.storyProgram}>Scholarship Beneficiary</span>
                </div>
              </div>
            </div>
            <div className={styles.storyCard}>
              <div className={styles.storyImage}>
                <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Aisha's Success Story" />
              </div>
              <div className={styles.storyContent}>
                <h3>Fashion Entrepreneur</h3>
                <p>After completing our tailoring program, Aisha received a business grant to start her fashion house. She now employs 5 other women and supplies uniforms to local schools.</p>
                <div className={styles.storyMeta}>
                  <span className={styles.storyName}>Aisha M.</span>
                  <span className={styles.storyProgram}>Skills Training Graduate</span>
                </div>
              </div>
            </div>
            <div className={styles.storyCard}>
              <div className={styles.storyImage}>
                <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Emeka's Success Story" />
              </div>
              <div className={styles.storyContent}>
                <h3>Tech Startup Founder</h3>
                <p>Emeka participated in our digital skills program and business mentorship. He now runs a successful web development company that serves clients across Nigeria.</p>
                <div className={styles.storyMeta}>
                  <span className={styles.storyName}>Emeka N.</span>
                  <span className={styles.storyProgram}>Business Support Recipient</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Impact Breakdown */}
      <section className={styles.breakdown}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Program Impact</h2>
            <p className={styles.sectionSubtitle}>Detailed results across our key initiatives</p>
          </div>
          <div className={styles.breakdownGrid}>
            <div className={styles.breakdownCard}>
              <div className={styles.breakdownHeader}>
                <div className={styles.breakdownIcon}>
                  <FaGraduationCap />
                </div>
                <h3>Education Scholarships</h3>
              </div>
              <div className={styles.breakdownStats}>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>Students Supported</span>
                  <span className={styles.statValue}>500+</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>Completion Rate</span>
                  <span className={styles.statValue}>92%</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>University Admissions</span>
                  <span className={styles.statValue}>85%</span>
                </div>
              </div>
            </div>
            <div className={styles.breakdownCard}>
              <div className={styles.breakdownHeader}>
                <div className={styles.breakdownIcon}>
                  <FaTools />
                </div>
                <h3>Skills Acquisition</h3>
              </div>
              <div className={styles.breakdownStats}>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>Individuals Trained</span>
                  <span className={styles.statValue}>1,200+</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>Employment Rate</span>
                  <span className={styles.statValue}>78%</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>Businesses Started</span>
                  <span className={styles.statValue}>150+</span>
                </div>
              </div>
            </div>
            <div className={styles.breakdownCard}>
              <div className={styles.breakdownHeader}>
                <div className={styles.breakdownIcon}>
                  <FaBriefcase />
                </div>
                <h3>Business Support</h3>
              </div>
              <div className={styles.breakdownStats}>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>Businesses Supported</span>
                  <span className={styles.statValue}>200+</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>Success Rate</span>
                  <span className={styles.statValue}>85%</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>Jobs Created</span>
                  <span className={styles.statValue}>300+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Voices of Impact</h2>
            <p className={styles.sectionSubtitle}>What our beneficiaries say about their experience</p>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}>"</div>
                <p>EDMERCY Foundation didn't just pay my school fees; they believed in me when no one else did. Today, I'm the first person in my family to attend university.</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Michael T." />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>Michael T.</h4>
                    <p>University Student</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}>"</div>
                <p>The skills I learned in the tailoring program changed my life. I went from struggling to feed my children to owning a business that employs others.</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Grace O." />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>Grace O.</h4>
                    <p>Fashion Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}>"</div>
                <p>EDMERCY's business mentorship program gave me the confidence and knowledge to expand my grocery store. My profits have increased by 200% in just one year.</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    <img src="https://images.unsplash.com/photo-1631006527504-c850e0967aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxlbXB0eSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Samuel K." />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>Samuel K.</h4>
                    <p>Small Business Owner</p>
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
            <h2>Be Part of Our Impact Story</h2>
            <p>Join us in creating more success stories and transforming more lives across Nigeria</p>
            <div className={styles.ctaButtons}>
              <a href="/donate" className={styles.primaryBtn}>Support Our Work</a>
              <a href="/get-involved" className={styles.secondaryBtn}>Get Involved</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}