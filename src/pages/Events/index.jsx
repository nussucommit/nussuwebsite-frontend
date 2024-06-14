import styles from "./events.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";
import React, { useState } from 'react';
import All from "./eventTypeCards/All.jsx";
import Freshmen from "./eventTypeCards/Freshmen.jsx";
import StudentLife from "./eventTypeCards/StudentLife.jsx";
import Welfare from "./eventTypeCards/Welfare.jsx";

const Events = () => {

  const [currentContent, setCurrentContent] = useState(<All />);
  
  return (
    <div className={styles.Outermost}>
      <Navbar />
    <h1 className={styles.Heading1}> Events </h1>
    <div className={styles.Events}>
      
          <div className = {styles.eventTypeContainer}>
            <h2 className = {styles.textBox}>Event Type</h2>
            <div className = {styles.typeList}>
              <button onClick={() => setCurrentContent(<All />)}>All</button>
              <button onClick={() => setCurrentContent(<StudentLife />)}>Student Life</button>
              <button onClick={() => setCurrentContent(<Welfare />)}>Welfare</button>
              <button onClick={() => setCurrentContent(<Freshmen />)}>Freshmen</button>
            </div>
          </div>

          <div className={styles.eventContents}>
            {currentContent}
          </div>
          
          
          
        </div>   
        
      <Footer />
    </div>
  );
  // debug: css file is successfully linked. but cannot control imported components

};

export default Events;



