import { useState } from 'react';
import styles from './contact.module.css';
import { Routes } from '../../constants/routes';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    question: '',
  });


 // Add this line to define the showNotification state
 const [showNotification, setShowNotification] = useState(false);

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = Routes.backendRoot + Routes.form;
    const body = {
      sheet1: {
        fullName: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        question: formData.question,
      }
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        console.error('Failed to submit form:', response);
      } else {
        const json = await response.json();
        console.log('Form submitted successfully:', json.sheet1);
      }


      // Show the notification banner
      setShowNotification(true);

      // Hide the banner after 2 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);

      // Clear the form
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        question: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  // Add this block of code to render the notification banner
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Email Address</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Question</label>
        <textarea
          name="question"
          value={formData.question}
          onChange={handleChange}
          className={styles.textarea}
        />
      </div>
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};
