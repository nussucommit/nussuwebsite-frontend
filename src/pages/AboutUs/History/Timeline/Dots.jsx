import React from 'react';
import styles from '../history.module.css';

const Dots = ({ historyData, onDotClick, selectedYear }) => {
  return (
    <div className={styles.dots}>
      {historyData.map((item) => (
        <div
          key={item.year}
          className={`${styles.dot} ${selectedYear === item.year ? styles.activeDot : ''}`}
          onClick={() => onDotClick(item.year)}
        ></div>
      ))}
    </div>
  );
};

export default Dots;
