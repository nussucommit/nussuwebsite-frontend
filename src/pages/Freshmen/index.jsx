import React from "react";
import styles from "./freshmen.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useFetchData } from "../../common/useFetchData";
import { Routes } from "../../constants/routes";
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

  return (
    <div className={styles.Freshmen}>
      <Navbar />
      <div className={styles.header}>
        <span>{FOP[0]}</span>
      </div>
      <hr className={styles.horizontalLine} />
      <div className={styles.title}>{FOP[1]}</div>
      <hr className={styles.horizontalLine} />
      <div className={styles.content}>{FOPDesc} </div>
      <div className={styles.title}>{FOPNUS}</div>
      <hr className={styles.horizontalLine} />
      <div className={styles.content}>{FOPTypeDesc} </div>

      <Footer />
    </div>
  );
};

export default Freshmen;
