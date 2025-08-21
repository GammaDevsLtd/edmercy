"use client";
import React from 'react';
import { useState } from 'react';
import { FaLock, FaReceipt, FaShieldAlt, FaCreditCard, FaUniversity, FaMobileAlt } from 'react-icons/fa';
import styles from "./donate.module.css";

export default function Donate() {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Nigeria',
    comment: '',
    anonymous: false,
    subscribe: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAmountSelect = (selectedAmount) => {
    setAmount(selectedAmount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) setAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your payment gateway (Paystack/Flutterwave)
    console.log('Donation details:', {
      type: donationType,
      amount: amount,
      ...formData
    });
    // Redirect to payment gateway
  };

  const presetAmounts = [
    { value: '5000', label: '₦5,000' },
    { value: '10000', label: '₦10,000' },
    { value: '25000', label: '₦25,000' },
    { value: '50000', label: '₦50,000' },
    { value: '100000', label: '₦100,000' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Make a Donation</h1>
            <p>Your generous contribution helps us transform lives through education, skills development, and community support.</p>
          </div>
        </div>
        <div className={styles.waveDivider}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
          </svg>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.donateLayout}>
          {/* Donation Form */}
          <div className={styles.donationFormSection}>
            <h2>Donation Information</h2>
            
            {/* Donation Type Toggle */}
            <div className={styles.donationType}>
              <button 
                className={donationType === 'one-time' ? styles.typeActive : ''}
                onClick={() => setDonationType('one-time')}
              >
                One-Time Donation
              </button>
              <button 
                className={donationType === 'monthly' ? styles.typeActive : ''}
                onClick={() => setDonationType('monthly')}
              >
                Monthly Donation
              </button>
            </div>

            {/* Amount Selection */}
            <div className={styles.amountSection}>
              <h3>Select Amount</h3>
              <div className={styles.amountOptions}>
                {presetAmounts.map(preset => (
                  <button
                    key={preset.value}
                    className={amount === preset.value ? styles.amountActive : ''}
                    onClick={() => handleAmountSelect(preset.value)}
                    type="button"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              
              <div className={styles.customAmount}>
                <label>Or enter custom amount (₦)</label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmount}
                  placeholder="Enter amount"
                />
              </div>
            </div>

            {/* Donor Information */}
            <form onSubmit={handleSubmit} className={styles.donorForm}>
              <h3>Your Information</h3>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="zipCode">ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="comment">Comment (Optional)</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Any message you'd like to include with your donation"
                ></textarea>
              </div>

              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleInputChange}
                  />
                  <span>Make this donation anonymous</span>
                </label>
              </div>

              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleInputChange}
                  />
                  <span>Subscribe to our newsletter</span>
                </label>
              </div>

              <button type="submit" className={styles.donateButton}>
                <FaLock /> Donate Securely
              </button>

              <div className={styles.securityNote}>
                <FaShieldAlt /> Your donation is secure and encrypted
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            {/* Donation Summary */}
            <div className={styles.donationSummary}>
              <h3>Donation Summary</h3>
              <div className={styles.summaryRow}>
                <span>Donation Type:</span>
                <span>{donationType === 'one-time' ? 'One-Time' : 'Monthly'}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Amount:</span>
                <span>₦{amount ? parseInt(amount).toLocaleString() : '0'}</span>
              </div>
              <div className={styles.summaryTotal}>
                <span>Total:</span>
                <span>₦{amount ? parseInt(amount).toLocaleString() : '0'}</span>
              </div>
            </div>

            {/* Impact Preview */}
            <div className={styles.impactPreview}>
              <h3>Your Impact</h3>
              {amount >= 5000 && (
                <div className={styles.impactItem}>
                  {amount >= 5000 && <p>₦5,000 provides school supplies for one student for a full year</p>}
                  {amount >= 25000 && <p>₦25,000 covers vocational training for one person</p>}
                  {amount >= 50000 && <p>₦50,000 supports a small business startup kit</p>}
                  {amount >= 100000 && <p>₦100,000 funds a full scholarship for one semester</p>}
                </div>
              )}
              {!amount && (
                <p>Select an amount to see how your donation will make a difference</p>
              )}
            </div>

            {/* Payment Methods */}
            <div className={styles.paymentMethods}>
              <h3>Payment Methods</h3>
              <div className={styles.methodsList}>
                <div className={styles.method}>
                  <FaCreditCard /> <span>Card Payment</span>
                </div>
                <div className={styles.method}>
                  <FaUniversity /> <span>Bank Transfer</span>
                </div>
                <div className={styles.method}>
                  <FaMobileAlt /> <span>USSD</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className={styles.trustBadges}>
              <div className={styles.badge}>
                <FaShieldAlt />
                <span>SSL Secure</span>
              </div>
              <div className={styles.badge}>
                <FaLock />
                <span>Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Donate Section */}
      <section className={styles.whyDonate}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Why Donate to EDMERCY Foundation?</h2>
            <p>Your support enables us to continue our vital work in communities</p>
          </div>
          <div className={styles.reasonsGrid}>
            <div className={styles.reason}>
              <h3>Transparency</h3>
              <p>We maintain full transparency in our operations and provide regular reports on how funds are utilized.</p>
            </div>
            <div className={styles.reason}>
              <h3>Measurable Impact</h3>
              <p>Every donation leads to tangible outcomes that we track and measure for maximum effectiveness.</p>
            </div>
            <div className={styles.reason}>
              <h3>Sustainable Change</h3>
              <p>We focus on programs that create long-term, sustainable change rather than temporary solutions.</p>
            </div>
            <div className={styles.reason}>
              <h3>Tax Deductible</h3>
              <p>Donations to EDMERCY Foundation are tax deductible. You will receive a receipt for your records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about donating to EDMERCY Foundation</p>
          </div>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>How will my donation be used?</h3>
              <p>Your donation will be directed to the area of greatest need unless you specify a particular program. We ensure that at least 85% of all donations go directly to program services.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Will I receive a receipt for my donation?</h3>
              <p>Yes, you will receive an email receipt immediately after your donation is processed. This receipt can be used for tax purposes.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I make a recurring donation?</h3>
              <p>Yes, you can choose to make a monthly recurring donation. This provides consistent support for our programs and helps us plan more effectively.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit/debit cards, bank transfers, and USSD payments for donations.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is my donation secure?</h3>
              <p>Absolutely. We use industry-standard encryption and security measures to protect your personal and payment information.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I donate in memory of someone?</h3>
              <p>Yes, you can make a tribute donation in memory or in honor of someone. There is an option to include this information during the donation process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Make a Difference?</h2>
            <p>Your donation today can transform lives tomorrow</p>
            <a href="#donate-form" className={styles.primaryBtn}>Donate Now</a>
          </div>
        </div>
      </section>
    </>
  );
}