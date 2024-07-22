import React, { useState } from 'react';
import styles from './collapsiblesection.module.css';

const CollapsibleSection = ({ heading, children, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const headerClass = `${styles.collapsibleHeader} ${styles[type + "header"]}`;

  return (
    <div className={styles.collapsibleSection}>
      <div onClick={() => setIsOpen(!isOpen)} className={headerClass}>
        {heading} 
        <div className={styles.arrow}>{isOpen ? '▼' : '▶'}</div>
        <hr className={styles.horizontalLine} />
      </div>
      {isOpen && <div className={styles.collapsibleContent}>{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
