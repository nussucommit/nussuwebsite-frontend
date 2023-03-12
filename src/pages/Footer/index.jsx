import styles from "./footer.module.css";
import commitlogo from "../../assets/commit_logo.png";
import { SocialIcon } from "react-social-icons";
import nussulogo from "../../assets/NUSSU-logo.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.header}>NUS Students' Union</p>
      <div className={styles.container}>
        <div className={styles.aboutUs}>
          <a>About Us</a>
          <p>History</p>
          <p>Governance</p>
          <p>Our Team</p>
        </div>
        <div className={styles.joinUs}>
          <a>Join Us</a>
          <p>EXCO</p>
          <p>Committees</p>
          <p>Sub-Comms</p>
        </div>
        <div className={styles.ourWork}>
          <a>Our Work</a>
          <p>Policies</p>
          <p>Archives</p>
        </div>
        <div className={styles.events}>
          <a>Events</a>
        </div>
        <div className={styles.freshmen}>
          <a>Freshmen</a>
          <p>Events</p>
          <p>Resources</p>
        </div>
        <div className={styles.services}>
          <a>Services</a>
          <p>Financial Aid</p>
          <p>Council Funding</p>
          <p>Logistics Rental</p>
          <p>Venue Booking</p>
          <p>Van Booking</p>
          <p>Publicity</p>
          <p>Licensing</p>
        </div>
        <div className={styles.contact}>
          <a>Contact</a>
          <p>Map & Venue</p>
          <p>Info Details</p>
          <p>Inquiries</p>
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
