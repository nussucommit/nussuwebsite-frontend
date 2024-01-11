import React from "react";
import styles from "./freshmen.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useFetchData } from "../../common/useFetchData";
import { Routes } from "../../constants/routes";
import EventCard from "./eventcard/EventCard";

import {
  extractFAQ,
  extractFOP,
  extractFOPDesc,
  extractNexus,
  extractFOPCategory,
  extractTypesOfCamps,
  extractFOPNUS,
  extractFOPTypeDesc,
} from "./helper";
import FaqCard from "./faqcard/FaqCard";

const Freshmen = () => {
  const url = Routes.backendRoot + Routes.freshmen;
  const [isLoading, content] = useFetchData(url);
  const FOP = extractFOP(content);
  const FOPDesc = extractFOPDesc(content);
  const Nexus = extractNexus(content);
  const FOPCategory = extractFOPCategory(content);
  const FAQ = extractFAQ(content);
  const CampTypes = extractTypesOfCamps(content);
  const FOPNUS = extractFOPNUS(content);
  const FOPTypeDesc = extractFOPTypeDesc(content);

  function formatString(str) {
    const parts = str.split(" "); // This splits the string into words
    return (
      <>
        <span style={{ color: "#d9a129" }}>{parts[0]}</span>{" "}
        {" " + parts.slice(1).join(" ")}
      </>
    );
  }

  return (
    <div className={styles.Freshmen}>
      <Navbar />
      <div className={styles.header}>
        <span>{FOP[0]}</span>
      </div>
      <hr className={styles.horizontalLine} />
      <div className={styles.title}>{formatString(FOP[1])}</div>
      <hr className={styles.horizontalLine} />
      <div className={styles.content}>{FOPDesc} </div>
      <div className={styles.yellowtitle}>{FOPNUS}</div>
      <hr className={styles.horizontalLine} />
      <div className={styles.content}>{FOPTypeDesc} </div>
      <div className={styles.programsection}>
        {CampTypes.map((type) => (
          <EventCard eventName={type[0]} eventDesc={type[1]}></EventCard>
        ))}
      </div>
      <p className={styles.content}>
        {FOPCategory[0][0]}
        <a href={FOPCategory[1]} className={styles.underlineLink}>
          {FOPCategory[0][1]}
        </a>
        {FOPCategory[0][2]}
      </p>
      <div className={styles.yellowtitle}>{FAQ[0]}</div>
      <hr className={styles.horizontalLine} />
      {FAQ[1].map((faq, index) => (
        <FaqCard answer={faq[1]} question={faq[0]} index={index + 1}></FaqCard>
      ))}

      <Footer />
    </div>
  );
};

export default Freshmen;
