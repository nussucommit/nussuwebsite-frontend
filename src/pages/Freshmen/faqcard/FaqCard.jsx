import React from "react";
import styles from "./faqcard.module.css";

const FaqCard = (props) => {
    const question = props.question;
    const answer = props.answer;
    const index = props.index
  
    return (
      <div className={styles.faqcard}>
        <div className={styles.question}>{index + `. `}{question}</div>
        <div className={styles.answer}>{answer}</div>
      </div>
    );
  };
  
  export default FaqCard;