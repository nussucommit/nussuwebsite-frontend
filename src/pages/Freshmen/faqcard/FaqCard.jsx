import React from 'react';
import styles from "./faqcard.module.css";

const FaqCard = ({ question, answer}) => {
  return (
    <div className="faq-card">
      <p className={styles.question}>{question}</p>
      <p className={styles.answer}>{answer}</p>
    </div>
  );
};

export default FaqCard;