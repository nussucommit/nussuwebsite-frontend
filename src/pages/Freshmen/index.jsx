import React from "react";
import styles from "./freshmen.module.css";

import Navbar from "../Navbar";
import Footer from "../Footer";
import { useFetchData } from "../../common/useFetchData";
import { Routes } from "../../constants/routes";
import EventCard from "./eventcard/EventCard";

import {
  extractFAQ,
  extractFOPTitle,
  extractFOPDesc,
  extractTypesOfCamps,
  extractFOPNUS,
  extractFOPTypeDesc,
} from "./helper";
import FaqCard from "./faqcard/FaqCard";

const Freshmen = () => {
  const url = Routes.backendRoot + Routes.freshmen;
  const [isLoading, content] = useFetchData(url);
  const FOPPageHeader = extractFOPTitle(content);
  const FOPDesc = extractFOPDesc(content);
  // const Nexus = extractNexus(content);
  // const FOPCategory = extractFOPCategory(content);
  const FAQ = extractFAQ(content)[0];
  const CampTypes = extractTypesOfCamps(content);
  const FOPNUS = extractFOPNUS(content);
  const FOPTypeDesc = extractFOPTypeDesc(content);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.Freshmen}>
      <Navbar />
      <div className={styles.header}>
        <span>{FOPPageHeader[0]}</span>
      </div>
      <hr className={styles.horizontalLine} />
      <div className={styles.title}>{FOPPageHeader[1]}</div>
      <hr className={styles.horizontalLine} />
      <div className={styles.content}>{FOPDesc} </div>
      <div className={styles.yellowtitle}>FOPs in NUS</div>
      <hr className={styles.horizontalLine} />
      <div className={styles.content}>{FOPTypeDesc} </div>
      <div className={styles.programsection}>
        {CampTypes.map((type) => (
          <EventCard
            eventName={type[0]}
            eventDesc={type[1]}
          ></EventCard>
        ))}
      </div>
      {/* <p className={styles.content}>
        {FOPCategory[0][0]}
        <a href={FOPCategory[1]} className={styles.underlineLink}>
          {FOPCategory[0][1]}
        </a>
        {FOPCategory[0][2]}
      </p> */}
      <div className={styles.yellowtitle}>FAQs</div>
      <hr className={styles.horizontalLine} />
      <FaqCard answer={FAQ[0][1]} question={FAQ[0][0]}></FaqCard>
      <FaqCard answer={FAQ[1][1]} question={FAQ[1][0]}></FaqCard>
      <FaqCard answer={FAQ[2][1]} question={FAQ[2][0]}></FaqCard>
      <Footer />
    </div>
  );
};

export default Freshmen;
