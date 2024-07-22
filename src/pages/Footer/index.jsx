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
          <a className={styles.section} href="">
            Join Us
          </a>
          <a className={styles.subsection} href="">
            EXCO
          </a>
          <a className={styles.subsection} href="">
            Committees
          </a>
          <a className={styles.subsection} href="">
            Sub-Comms
          </a>
        </div>
        <div className={styles.ourWork}>
          <a className={styles.section} href={ROUTES.ourWork}>
            Our Work
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
          <a className={styles.section} href={ROUTES.services}>
            Services
          </a>
          <a className={styles.subsection} href="">
            Financial Aid
          </a>
          <a className={styles.subsection} href="">
            Council Funding
          </a>
          <a className={styles.subsection} href="">
            Logistics Rental
          </a>
          <a className={styles.subsection} href="">
            Venue Booking
          </a>
          <a className={styles.subsection} href="">
            Van Booking
          </a>
          <a className={styles.subsection} href="">
            Publicity
          </a>
          <a className={styles.subsection} href="">
            Licensing
          </a>
        </div>
        <div className={styles.contact}>
          <a className={styles.section} href={ROUTES.contact}>
            Contact
          </a>
          <a className={styles.subsection} href="">
            Map & Venue
          </a>
          <a className={styles.subsection} href="">
            Info Details
          </a>
          <a className={styles.subsection} href="">
            Inquiries
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
