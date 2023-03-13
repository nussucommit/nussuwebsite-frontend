import styles from "./footer.module.css";
import commitlogo from "../../assets/commit_logo.png";
import { SocialIcon } from "react-social-icons";
import nussulogo from "../../assets/NUSSU-logo.svg";
import { Routes as ROUTES } from "../../constants/routes";

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
          <a className={styles.section}>Join Us</a>
          <a className={styles.subsection}>EXCO</a>
          <a className={styles.subsection}>Committees</a>
          <a className={styles.subsection}>Sub-Comms</a>
        </div>
        <div className={styles.ourWork}>
          <a className={styles.section} href={ROUTES.ourWork}>
            Our Work
          </a>
          <a className={styles.subsection}>Policies</a>
          <a className={styles.subsection}>Archives</a>
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
          <a className={styles.subsection}>Events</a>
          <a className={styles.subsection}>Resources</a>
        </div>
        <div className={styles.services}>
          <a className={styles.section} href={ROUTES.services}>
            Services
          </a>
          <a className={styles.subsection}>Financial Aid</a>
          <a className={styles.subsection}>Council Funding</a>
          <a className={styles.subsection}>Logistics Rental</a>
          <a className={styles.subsection}>Venue Booking</a>
          <a className={styles.subsection}>Van Booking</a>
          <a className={styles.subsection}>Publicity</a>
          <a className={styles.subsection}>Licensing</a>
        </div>
        <div className={styles.contact}>
          <a className={styles.section} href={ROUTES.contact}>
            Contact
          </a>
          <a className={styles.subsection}>Map & Venue</a>
          <a className={styles.subsection}>Info Details</a>
          <a className={styles.subsection}>Inquiries</a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.support}>
          <p>Supported by:</p>
          <img className={styles.logo} src={commitlogo} alt="CommIT Logo"></img>
        </div>
        <div className={styles.socials}>
          <SocialIcon network="facebook"></SocialIcon>
          <SocialIcon network="instagram"></SocialIcon>
          <SocialIcon network="linkedin"></SocialIcon>
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
