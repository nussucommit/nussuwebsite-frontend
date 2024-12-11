import styles from "./joinus.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useFetchData } from "../../common/useFetchData";
import { Routes } from "../../constants/routes";
import {
  extractElections,
  extractLatestUpdates,
  extractGeneral,
  extractExpect,
  extractNussuExpectation,
  extractRecruitment,
  extractExcoApplication,
  extractCommitteeApplication,
  extractNussuProjectsApplication,
  extractCandidate
} from "./helper";

const JoinUs = () => {
  const url = Routes.backendRoot + Routes.joinus;
  const [isLoading, content] = useFetchData(url);
  const latestUpdates = extractLatestUpdates(content);
  const general = extractGeneral(content);
  const candidate = extractCandidate(content);
  const expect = extractExpect(content);
  const nussuExpectation = extractNussuExpectation(content);
  const elections = extractElections(content);
  const recruitment = extractRecruitment(content);
  const excoApplication = extractExcoApplication(content);
  const committeeApplication = extractCommitteeApplication(content);
  const nussuProjectsApplication = extractNussuProjectsApplication(content);

  return (
    <div className={styles.JoinUs}>
      <Navbar />
      <h1 className={styles.header}>Join Us</h1>

      <div className={styles.content}>
        <div className={styles.latestUpdates}>
            <h2 className={styles.subheader}>Latest Updates</h2>
            {latestUpdates.map((item, index) => (
              <p className={styles.text} key={index}>{item}</p>
            ))}
        </div>

        <div className={styles.general}>
            <h2 className={styles.subheader}>General</h2>
            {general.map((item, index) => (
              <p className={styles.text} key={index}>{item}</p>
            ))}
        </div>

        <div className={styles.candidate}>
            <h2 className={styles.subheader}>Who We Are Looking For</h2>
            {candidate.map((item, index) => (
              Array.isArray(item) ? (
                <ul key={index}>
                  {item.map((subItem, subIndex) => (
                    <li key={subIndex} className={styles.text}>{subItem}</li>
                  ))}
                </ul>
              ) : (
                <p key={index} className={styles.text}>{item}</p>
              )
            ))}
        </div>

        <div className={styles.expect}>
            <h2 className={styles.subheader}>What You Can Expect</h2>
            {expect.map((item, index) => (
              <p className={`${styles.text} ${index % 2 === 0 ? styles.bold : ''}`}>{item}</p>
            ))}
        </div>

        <div className={styles.nussuExpectation}>
            <h2 className={styles.subheader}>What NUSSU Expects From You!</h2>
            {nussuExpectation.map((item, index) => (
              <p className={`${styles.text} ${index % 2 === 0 ? styles.bold : ''}`}>{item}</p>
            ))}
        </div>

        <div className={styles.election}>
            <h2 className={styles.subheader}>Elections</h2>
            {elections.map((item, index) => (
              <p className={styles.text}>{item}</p>
            ))}
        </div>

        <div className={styles.recruitment}>
            <h2 className={styles.subheader}>Recruitment Opportunities</h2>
            {recruitment.map((item, index) => (
              <p className={styles.text}>{item}</p>
            ))}
        </div>

        <div className={styles.excoApplication}>
            <h2 className={styles.subheader}>Application for NUSSU EXCO</h2>
            <p className={styles.text}>{excoApplication}</p>
        </div>

        <div className={styles.committeeApplication}>
            <h2 className={styles.subheader}>Application for NUSSU Committees</h2>
            {committeeApplication.map((item, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <p style={{ fontWeight: 'bold' }} className={styles.text}>{item[0]}</p>
                {item.slice(1).map((subItem, subIndex) => (
                  <p key={subIndex} style={{ marginLeft: '20px' }} className={styles.text}>{subItem}</p>
                ))}
              </div>
            ))}
        </div>

        <div className={styles.nussuProjectsApplication}>
            <h2 className={styles.subheader}>Application for NUSSU Projects</h2>
            {nussuProjectsApplication.map((item, index) => (
              Array.isArray(item) ? (
                <ul key={index}>
                  {item.map((subItem, subIndex) => (
                    <li key={subIndex} className={styles.text}>{subItem}</li>
                  ))}
                </ul>
              ) : (
                <p key={index} className={styles.text}>{item}</p>
              )
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinUs;