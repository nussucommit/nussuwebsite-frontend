import React from "react";
import styles from "./eventcard.module.css";

const EventCard = (props) => {
  const eventName = props.eventName;
  const eventDesc = props.eventDesc;
  const eventImg = props.eventImg;

  return (
    <div className={styles.eventcard}>
      {/* <div className={styles.rectangle}></div> */}
      <div className={styles.eventname}>{eventName}</div>
      <div className={styles.content}>{eventDesc}</div>
    </div>
  );
};

export default EventCard;

