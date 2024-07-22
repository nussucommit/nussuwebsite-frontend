import React, { useState } from 'react';
import styles from  './accordion.module.css';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button onClick={() => setIsOpen(!isOpen)} className={styles.accordiontitle}>
        {title}
      </button>
      {isOpen && <div className={styles.accordioncontent}>{children}</div>}
    </div>
  );
};

export default Accordion;

