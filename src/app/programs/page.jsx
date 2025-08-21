import React from 'react';
import { FaGraduationCap, FaTools, FaBriefcase, FaHandsHelping, FaChartLine, FaUsers } from 'react-icons/fa';
import styles from "./programs.module.css";

export default function Programs() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Our Programs</h1>
            <p>Comprehensive initiatives designed to empower individuals and transform communities through education, skills development, and economic support</p>
          </div>
        </div>
        <div className={styles.waveDivider}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
          </svg>
        </div>
      </section>

      {/* Programs Grid */}
      <section className={styles.programs}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Initiatives</h2>
            <p className={styles.sectionSubtitle}>Each program is designed to address specific needs and create sustainable impact</p>
          </div>
          <div className={styles.programGrid}>
            <div className={styles.programCard}>
              <div className={styles.programIcon}>
                <FaGraduationCap />
              </div>
              <h3>Education Scholarships</h3>
              <p>Comprehensive financial support for students from primary to tertiary education, including tuition, books, and learning materials.</p>
              <ul className={styles.programFeatures}>
                <li>Full and partial scholarship options</li>
                <li>Mentorship and academic support</li>
                <li>Career guidance programs</li>
                <li>Annual scholarship awards ceremony</li>
              </ul>
              <div className={styles.programActions}>
                <a href="/programs/scholarships/apply" className={styles.primaryBtn}>Apply Now</a>
                <a href="/programs/scholarships" className={styles.secondaryLink}>Learn More</a>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programIcon}>
                <FaTools />
              </div>
              <h3>Skills Acquisition</h3>
              <p>Vocational training programs in various trades to equip individuals with practical skills for employment and entrepreneurship.</p>
              <ul className={styles.programFeatures}>
                <li>Tailoring and fashion design</li>
                <li>ICT and digital skills</li>
                <li>Carpentry and woodworking</li>
                <li>Hair dressing and cosmetology</li>
                <li>Agricultural skills training</li>
              </ul>
              <div className={styles.programActions}>
                <a href="/programs/skills/apply" className={styles.primaryBtn}>Apply Now</a>
                <a href="/programs/skills" className={styles.secondaryLink}>Learn More</a>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programIcon}>
                <FaBriefcase />
              </div>
              <h3>Business Support</h3>
              <p>Seed funding, mentorship, and resources for entrepreneurs and small business owners to establish and grow their enterprises.</p>
              <ul className={styles.programFeatures}>
                <li>Startup capital and grants</li>
                <li>Business plan development</li>
                <li>Mentorship from industry experts</li>
                <li>Market access support</li>
                <li>Financial literacy training</li>
              </ul>
              <div className={styles.programActions}>
                <a href="/programs/business/apply" className={styles.primaryBtn}>Apply Now</a>
                <a href="/programs/business" className={styles.secondaryLink}>Learn More</a>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programIcon}>
                <FaHandsHelping />
              </div>
              <h3>Community Outreach</h3>
              <p>Initiatives focused on healthcare, welfare, and advocacy to address immediate community needs and promote social development.</p>
              <ul className={styles.programFeatures}>
                <li>Medical outreach programs</li>
                <li>Food and clothing distribution</li>
                <li>Advocacy for social justice</li>
                <li>Community clean-up initiatives</li>
                <li>Public health education</li>
              </ul>
              <div className={styles.programActions}>
                <a href="/programs/outreach/volunteer" className={styles.primaryBtn}>Volunteer</a>
                <a href="/programs/outreach" className={styles.secondaryLink}>Learn More</a>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programIcon}>
                <FaChartLine />
              </div>
              <h3>Mentorship & Counseling</h3>
              <p>Guidance and support programs to help individuals navigate personal and professional challenges and achieve their potential.</p>
              <ul className={styles.programFeatures}>
                <li>Career counseling</li>
                <li>Personal development workshops</li>
                <li>Youth mentorship programs</li>
                <li>Psychological support services</li>
                <li>Life skills training</li>
              </ul>
              <div className={styles.programActions}>
                <a href="/programs/mentorship/join" className={styles.primaryBtn}>Join Program</a>
                <a href="/programs/mentorship" className={styles.secondaryLink}>Learn More</a>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programIcon}>
                <FaUsers />
              </div>
              <h3>Social Advocacy</h3>
              <p>Initiatives focused on raising awareness, influencing policy, and promoting social change on issues affecting our communities.</p>
              <ul className={styles.programFeatures}>
                <li>Education rights advocacy</li>
                <li>Gender equality programs</li>
                <li>Environmental conservation</li>
                <li>Community leadership training</li>
                <li>Policy engagement workshops</li>
              </ul>
              <div className={styles.programActions}>
                <a href="/programs/advocacy/join" className={styles.primaryBtn}>Get Involved</a>
                <a href="/programs/advocacy" className={styles.secondaryLink}>Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Program Impact</h2>
            <p className={styles.sectionSubtitle}>Measurable results from our initiatives across communities</p>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>500+</h3>
              <p>Scholarships Awarded</p>
            </div>
            <div className={styles.statItem}>
              <h3>1,200+</h3>
              <p>Individuals Trained</p>
            </div>
            <div className={styles.statItem}>
              <h3>200+</h3>
              <p>Businesses Supported</p>
            </div>
            <div className={styles.statItem}>
              <h3>45+</h3>
              <p>Communities Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How Our Programs Work</h2>
            <p className={styles.sectionSubtitle}>A structured approach to creating sustainable impact</p>
          </div>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Application</h3>
              <p>Interested individuals apply through our online portal or physical application centers.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Screening</h3>
              <p>Our team reviews applications and selects candidates based on need and potential.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Participation</h3>
              <p>Selected beneficiaries participate in the program with ongoing support and monitoring.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Graduation</h3>
              <p>Successful completion leads to graduation with continued support for next steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Make a Difference?</h2>
            <p>Whether you want to apply for a program or support our initiatives, we're here to help you take the next step</p>
            <div className={styles.ctaButtons}>
              <a href="/apply" className={styles.primaryBtn}>Apply for a Program</a>
              <a href="/contact" className={styles.secondaryBtn}>Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}