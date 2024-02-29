import React, { useState, useEffect } from 'react';
import styles from './history.module.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import HistoryList from './Timeline/HistoryList';
import Dots from './Timeline/Dots';
import { extractHistoryData } from './helper';
import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";

const History = () => {
  const url = Routes.backendRoot + Routes.history;
  const [isLoading, content] = useFetchData(url);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    const historyItems = extractHistoryData(content);
    if (!selectedYear && historyItems.length > 0) {
      setSelectedYear(historyItems[0].year);
    }
  }, [content, selectedYear]);

  const handleItemClick = (year) => {
    setSelectedYear(year);
  };

  const handleDotClick = (year) => {
    setSelectedYear(year);
  };

  const historyItems = extractHistoryData(content);
  const selectedHistoryItem = selectedYear
    ? historyItems.find((item) => item.year === selectedYear)
    : historyItems[0];

  return (
    <div>
      <Navbar />
      <div className={styles.backgroundImageContainer}>
        {selectedHistoryItem && (
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${selectedHistoryItem.image})` }}
          >
            <div className={styles.overlay}></div>
            <div className={styles.titleContainer}>
              <p className={styles.title}>Our History</p>
              <hr className={styles.horizontalLine} />
            </div>
            <div className={styles.maincontainer}>
              <div className={styles.timelineContainer}>
                <div className={styles.year}>
                  <HistoryList historyData={historyItems} onItemClick={handleItemClick} selectedYear={selectedYear} />
                </div>
                <div className={styles.dots}>
                  <Dots historyData={historyItems} onDotClick={handleDotClick} selectedYear={selectedYear} />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.heading}>{selectedHistoryItem.heading}</div>
                <hr className={styles.horizontalLine1} />
                <div className={styles.paragraph}>{selectedHistoryItem.paragraph}</div>
              </div>
            </div>
            <div className={styles.verticalLine}></div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default History;
