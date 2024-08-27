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

  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

    setShowSuccessNotification(true);
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Failed to submit form');
        setShowErrorNotification(true);
        setShowSuccessNotification(false); // hide success notification if error occurs
      } else {

        setShowErrorNotification(false);

        // Hide the success notification after 2 seconds
        setTimeout(() => {
          setShowSuccessNotification(false);
        }, 2000);

        // Clear the form after successful submission
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          question: '',
        });
      }

    } catch (error) {
      setErrorMessage('Error submitting form: ' + error.message);
      setShowErrorNotification(true);
      setShowSuccessNotification(false); // hide success notification if error occurs
    }
  };

  return (
    <div className={styles.container}>
      {showSuccessNotification && (
        <div className={`${styles.notification} ${styles.success}`}>
          Form submitted successfully!
        </div>
      )}
      {showErrorNotification && (
        <div className={`${styles.notification} ${styles.error}`}>
          {errorMessage}
        </div>
      )}
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
            type="email"
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
    </div>
  );
};
