import React, { useState } from 'react';
import styles from "./contact.module.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    question: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label style={styles.label}>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Question</label>
        <textarea
          name="question"
          value={formData.question}
          onChange={handleChange}
          style={{ ...styles.input, ...styles.textarea }}
        />
      </div>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};