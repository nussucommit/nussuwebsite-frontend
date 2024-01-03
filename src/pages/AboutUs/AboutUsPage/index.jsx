import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import styles from "./aboutus.module.css";
import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import {
  extractImage,
  extractParagraphs,
  extractVision,
  extractMission,
} from "./helper";

const AboutUs = () => {
  const url = Routes.backendRoot + Routes.aboutUs;
  const [isLoading, content] = useFetchData(url);
  const image = extractImage(content);
  const paragraphs = extractParagraphs(content);
  const vision = extractVision(content);
  const mission = extractMission(content);

  return (
    <div>
      <Navbar />
      <div className={styles.header}></div>
      <hr className={styles.horizontalLine} />
      <div className={styles.container}>
        <div className={styles.leftcolumn}>
          <img src={image} className={styles.image} alt="Group Photo" />
          <div>
            <div className={styles.visionheader}></div>
            <hr className={styles.horizontalLine2} />
            <div className={styles.visioncontent}>{vision.content}</div>
          </div>
          <div>
            <div className={styles.missionheader}></div>
            <hr className={styles.horizontalLine2} />
            <div className={styles.missioncontent}>{mission.content}</div>
          </div>
        </div>
        <div className={styles.rightcolumn}>
          <div className={styles.maincontent}>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
