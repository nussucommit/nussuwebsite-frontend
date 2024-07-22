import React from 'react';
import styles from '../history.module.css';

const HistoryList = ({ historyData, onItemClick, selectedYear }) => {
  return (
    <div>
      {historyData.map((item) => (
        <div key={item.year}>
          <div
            className={selectedYear === item.year || (!selectedYear && item.year === historyData[0].year) ? styles.activeYear : styles.year}
            onClick={() => onItemClick(item.year)}
          >
            {item.year}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;
