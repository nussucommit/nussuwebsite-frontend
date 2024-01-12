import styles from "./events.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";
import React, { useState } from 'react';
import All from "./eventTypeCards/All.jsx";
import Freshmen from "./eventTypeCards/Freshmen.jsx";
import StudentLife from "./eventTypeCards/StudentLife.jsx";
import Welfare from "./eventTypeCards/Welfare.jsx";
import Test from "./eventTypeCards/test.jsx"

const Events = () => {

  
  const [currentContent, setCurrentContent] = useState(<All />);

  
  return (
    <div className={styles.Events}>
      <Navbar />
      <h1> Events </h1>
        <div className = {styles.mainContainer}>
          <div className = {styles.eventTypeContainer}>
            <h2>Event Type</h2>
            <div className = {styles.typeList}>
              <button onClick={() => setCurrentContent(<All />)}>All</button>
              <button onClick={() => setCurrentContent(<StudentLife />)}>Student Life</button>
              <button onClick={() => setCurrentContent(<Welfare />)}>Welfare</button>
              <button onClick={() => setCurrentContent(<Freshmen />)}>Freshmen</button>
            </div>
          </div>

          <div id="content">
            {currentContent}
          </div>
          
          <div className ={styles.test}>
            <Test /> 
          </div>
          
        </div>   
      <Footer />
    </div>
  );
  // debug: css file is successfully linked. but cannot control imported components

};

export default Events;



