import styles from "./footer.module.css";
import commitlogo from "../../assets/commit_logo.png";
import { SocialIcon } from "react-social-icons";
import nussulogo from "../../assets/NUSSU-logo.svg";
import { Routes as ROUTES } from "../../constants/routes";
import { Routes } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.header}>NUS Students' Union</p>
      <div className={styles.container}>
        <div className={styles.aboutUs}>
          <a className={styles.section} href={ROUTES.aboutUs}>
            About Us
          </a>
          <a className={styles.subsection} href={ROUTES.history}>
            History
          </a>
          <a className={styles.subsection} href={ROUTES.governance}>
            Governance
          </a>
          <a className={styles.subsection} href={ROUTES.ourTeam}>
            Our Team
          </a>
        </div>
        <div className={styles.joinUs}>
          <a className={styles.section} href={ROUTES.joinus}>
            Join Us
          </a>
        </div>
        <div className={styles.events}>
          <a className={styles.section} href={ROUTES.events}>
            Events
          </a>
        </div>
        <div className={styles.freshmen}>
          <a className={styles.section} href={ROUTES.freshmen}>
            Freshmen
          </a>
        </div>
        <div className={styles.services}>
          <div className={styles.section}>
            Services
          </div>
          <a className={styles.subsection} href={ROUTES.councilfunding}>
            Council Funding
          </a>
          <a className={styles.subsection} href={ROUTES.publicitymanagement}>
            Publicity
          </a>
          <a className={styles.subsection} href={ROUTES.zoomlicense}>
            Zoom Licensing
          </a>
          <a className={styles.subsection} href={ROUTES.resiliencefund}>
            Resilience Fund
          </a>
          <a className={styles.subsection} href={ROUTES.studentfunds}>
            Student's Fund
          </a>
        </div>
        <div className={styles.contact}>
          <a className={styles.section} href={ROUTES.contact}>
            Contact
          </a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.support}>
          <p>Supported by:</p>
          <img className={styles.logo} src={commitlogo} alt="CommIT Logo"></img>
        </div>
        <div className={styles.socials}>
          <SocialIcon
            network="facebook"
            url="https://www.facebook.com/nus.students.union/"
          ></SocialIcon>
          <SocialIcon
            network="instagram"
            url="https://www.instagram.com/mynussu"
          ></SocialIcon>
          <SocialIcon
            network="linkedin"
            url="https://www.linkedin.com/company/nussu"
          ></SocialIcon>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <p>2022 by National University of Singapore Students' Union</p>
        <img
          src={nussulogo}
          alt="NUSSU Logo"
          className={styles.nussulogo}
        ></img>
      </div>
    </div>
  );
};

export default Footer;
