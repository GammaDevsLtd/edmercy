import React from 'react';
import { FaDonate, FaHandsHelping, FaHandshake, FaBullhorn, FaHeart, FaGift } from 'react-icons/fa';
import styles from "./get-involved.module.css";

export default function GetInvolved() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Get Involved</h1>
            <p>Join us in our mission to transform lives and communities. Your support makes our work possible.</p>
          </div>
        </div>
        <div className={styles.waveDivider}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
          </svg>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className={styles.ways}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ways to Support</h2>
            <p className={styles.sectionSubtitle}>Choose how you'd like to make a difference</p>
          </div>
          <div className={styles.waysGrid}>
            <div className={styles.wayCard}>
              <div className={styles.wayIcon}>
                <FaDonate />
              </div>
              <h3>Make a Donation</h3>
              <p>Your financial support helps us sustain and expand our programs. Every contribution, no matter the size, makes a difference.</p>
              <div className={styles.wayActions}>
                <a href="/donate" className={styles.primaryBtn}>Donate Now</a>
                <a href="/donate#options" className={styles.secondaryLink}>View Options</a>
              </div>
            </div>

            <div className={styles.wayCard}>
              <div className={styles.wayIcon}>
                <FaHandsHelping />
              </div>
              <h3>Become a Volunteer</h3>
              <p>Share your time and skills with our community. We need volunteers for teaching, mentoring, events, and administrative support.</p>
              <div className={styles.wayActions}>
                <a href="/volunteer" className={styles.primaryBtn}>Volunteer Now</a>
                <a href="/volunteer#opportunities" className={styles.secondaryLink}>View Opportunities</a>
              </div>
            </div>

            <div className={styles.wayCard}>
              <div className={styles.wayIcon}>
                <FaHandshake />
              </div>
              <h3>Partner With Us</h3>
              <p>Are you representing a company or organization? Explore partnership opportunities for greater impact.</p>
              <div className={styles.wayActions}>
                <a href="/partnerships" className={styles.primaryBtn}>Explore Partnerships</a>
                <a href="/partnerships#benefits" className={styles.secondaryLink}>Partnership Benefits</a>
              </div>
            </div>

            <div className={styles.wayCard}>
              <div className={styles.wayIcon}>
                <FaBullhorn />
              </div>
              <h3>Spread the Word</h3>
              <p>Help us raise awareness by sharing our mission with your network. Follow and share our social media content.</p>
              <div className={styles.wayActions}>
                <a href="/share" className={styles.primaryBtn}>Share Our Mission</a>
                <a href="/social-media" className={styles.secondaryLink}>Follow Us</a>
              </div>
            </div>

            <div className={styles.wayCard}>
              <div className={styles.wayIcon}>
                <FaGift />
              </div>
              <h3>In-Kind Donations</h3>
              <p>Donate goods or services that can support our programs, including educational materials, equipment, or professional services.</p>
              <div className={styles.wayActions}>
                <a href="/in-kind" className={styles.primaryBtn}>Donate Goods</a>
                <a href="/in-kind#needs" className={styles.secondaryLink}>Current Needs</a>
              </div>
            </div>

            <div className={styles.wayCard}>
              <div className={styles.wayIcon}>
                <FaHeart />
              </div>
              <h3>Become a Ambassador</h3>
              <p>Join our network of ambassadors who represent EDMERCY in their communities and help us expand our reach.</p>
              <div className={styles.wayActions}>
                <a href="/ambassador" className={styles.primaryBtn}>Join Now</a>
                <a href="/ambassador#program" className={styles.secondaryLink}>Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className={styles.donation}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Donation Options</h2>
            <p className={styles.sectionSubtitle}>Choose the giving method that works best for you</p>
          </div>
          <div className={styles.donationGrid}>
            <div className={styles.donationOption}>
              <h3>One-Time Donation</h3>
              <p>Make a single donation to support our current programs and initiatives.</p>
              <div className={styles.amountOptions}>
                <button className={styles.amountBtn}>₦5,000</button>
                <button className={styles.amountBtn}>₦10,000</button>
                <button className={styles.amountBtn}>₦25,000</button>
                <button className={styles.amountBtn}>Other</button>
              </div>
              <a href="/donate/one-time" className={styles.primaryBtn}>Donate Once</a>
            </div>

            <div className={styles.donationOption}>
              <h3>Monthly Giving</h3>
              <p>Become a sustaining donor with automatic monthly contributions that provide reliable support.</p>
              <div className={styles.amountOptions}>
                <button className={styles.amountBtn}>₦3,000</button>
                <button className={styles.amountBtn}>₦5,000</button>
                <button className={styles.amountBtn}>₦10,000</button>
                <button className={styles.amountBtn}>Other</button>
              </div>
              <a href="/donate/monthly" className={styles.primaryBtn}>Donate Monthly</a>
            </div>

            <div className={styles.donationOption}>
              <h3>Sponsor a Program</h3>
              <p>Directly support a specific program or initiative that aligns with your passion.</p>
              <div className={styles.programOptions}>
                <label>
                  <input type="radio" name="program" value="scholarship" />
                  <span>Education Scholarships</span>
                </label>
                <label>
                  <input type="radio" name="program" value="skills" />
                  <span>Skills Acquisition</span>
                </label>
                <label>
                  <input type="radio" name="program" value="business" />
                  <span>Business Support</span>
                </label>
              </div>
              <a href="/donate/program" className={styles.primaryBtn}>Sponsor Program</a>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className={styles.volunteer}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Volunteer Opportunities</h2>
            <p className={styles.sectionSubtitle}>Share your time and talents to make a difference</p>
          </div>
          <div className={styles.volunteerGrid}>
            <div className={styles.opportunity}>
              <h3>Teaching & Tutoring</h3>
              <p>Help students with academic subjects, exam preparation, or digital skills.</p>
              <div className={styles.opportunityMeta}>
                <span>📍 On-site & Remote</span>
                <span>⏱️ Flexible Hours</span>
              </div>
            </div>

            <div className={styles.opportunity}>
              <h3>Mentorship</h3>
              <p>Provide guidance and support to youth and aspiring entrepreneurs.</p>
              <div className={styles.opportunityMeta}>
                <span>📍 On-site</span>
                <span>⏱️ 2-4 hours/week</span>
              </div>
            </div>

            <div className={styles.opportunity}>
              <h3>Event Support</h3>
              <p>Help with organizing and running workshops, fundraisers, and community events.</p>
              <div className={styles.opportunityMeta}>
                <span>📍 On-site</span>
                <span>⏱️ Project-based</span>
              </div>
            </div>

            <div className={styles.opportunity}>
              <h3>Professional Skills</h3>
              <p>Share your professional expertise (legal, medical, tech, marketing, etc.).</p>
              <div className={styles.opportunityMeta}>
                <span>📍 Remote & On-site</span>
                <span>⏱️ Flexible</span>
              </div>
            </div>

            <div className={styles.opportunity}>
              <h3>Administrative Support</h3>
              <p>Assist with office tasks, data entry, communications, and coordination.</p>
              <div className={styles.opportunityMeta}>
                <span>📍 On-site</span>
                <span>⏱️ Regular Hours</span>
              </div>
            </div>

            <div className={styles.opportunity}>
              <h3>Community Outreach</h3>
              <p>Help with community engagement, awareness campaigns, and field work.</p>
              <div className={styles.opportunityMeta}>
                <span>📍 Field Work</span>
                <span>⏱️ Flexible</span>
              </div>
            </div>
          </div>
          <div className={styles.volunteerCta}>
            <a href="/volunteer/apply" className={styles.primaryBtn}>Apply to Volunteer</a>
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className={styles.partnership}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Partnership Opportunities</h2>
            <p className={styles.sectionSubtitle}>Collaborate with us for greater impact</p>
          </div>
          <div className={styles.partnershipGrid}>
            <div className={styles.partnershipOption}>
              <h3>Corporate Partnerships</h3>
              <p>Align your CSR initiatives with our programs for measurable social impact.</p>
              <ul>
                <li>Program sponsorship</li>
                <li>Employee volunteering</li>
                <li>Matching gift programs</li>
                <li>Cause-related marketing</li>
              </ul>
              <a href="/partnerships/corporate" className={styles.secondaryLink}>Learn More</a>
            </div>

            <div className={styles.partnershipOption}>
              <h3>NGO Collaborations</h3>
              <p>Join forces with other organizations to amplify our collective impact.</p>
              <ul>
                <li>Program co-creation</li>
                <li>Resource sharing</li>
                <li>Joint advocacy efforts</li>
                <li>Knowledge exchange</li>
              </ul>
              <a href="/partnerships/ngo" className={styles.secondaryLink}>Learn More</a>
            </div>

            <div className={styles.partnershipOption}>
              <h3>Government Partnerships</h3>
              <p>Work with us to support public initiatives and policy development.</p>
              <ul>
                <li>Program implementation</li>
                <li>Policy advocacy</li>
                <li>Public-private partnerships</li>
                <li>Community development projects</li>
              </ul>
              <a href="/partnerships/government" className={styles.secondaryLink}>Learn More</a>
            </div>
          </div>
          <div className={styles.partnershipCta}>
            <a href="/partnerships/contact" className={styles.primaryBtn}>Contact Partnerships Team</a>
          </div>
        </div>
      </section>

      {/* Impact of Support */}
      <section className={styles.impact}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Your Impact</h2>
            <p className={styles.sectionSubtitle}>See how your support transforms lives</p>
          </div>
          <div className={styles.impactGrid}>
            <div className={styles.impactItem}>
              <h3>₦5,000</h3>
              <p>Provides school supplies for one student for a full year</p>
            </div>
            <div className={styles.impactItem}>
              <h3>₦25,000</h3>
              <p>Covers vocational training for one person</p>
            </div>
            <div className={styles.impactItem}>
              <h3>₦50,000</h3>
              <p>Supports a small business startup kit</p>
            </div>
            <div className={styles.impactItem}>
              <h3>₦100,000</h3>
              <p>Funds a full scholarship for one semester</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Make a Difference?</h2>
            <p>Join our community of supporters and help us transform more lives</p>
            <div className={styles.ctaButtons}>
              <a href="/donate" className={styles.primaryBtn}>Donate Now</a>
              <a href="/volunteer/apply" className={styles.secondaryBtn}>Become a Volunteer</a>
              <a href="/contact" className={styles.tertiaryBtn}>Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}