import styles from "./contact.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Routes } from "../../constants/routes";
import { ContactForm } from "./contactForm";
import {
  extractContactInfo, 
  extractOperatingHours,
  extractGeneral,
  extractCollaboration,
  extractPublicityRequests
} from './helper';
import { useFetchData } from "../../common/useFetchData";

const Contact = () => {
  const url = Routes.backendRoot + Routes.contact;
  const [isLoading, content] = useFetchData(url);
  const contactInfo = extractContactInfo(content);
  const operatingHours = extractOperatingHours(content);
  const general = extractGeneral(content);
  const collaboration = extractCollaboration(content);
  const publicityRequests = extractPublicityRequests(content);
  const embedLink = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31910.24679306341!2d103.7664256!3d1.3066477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a56b91f0017%3A0x2fb552eb04b21ed2!2sScience%20Library!5e0!3m2!1sen!2sid!4v1717867319037!5m2!1sen!2sid"

  return (
    <div className={styles.Contact}>
      <Navbar />
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Contact Us</h1>
        <div className={styles.map}>
          <iframe 
            src={embedLink}
            className={styles.mapImage}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      
      <div className={styles.contactInfo}>
        <h2 className={styles.subheader}>Contact Information</h2>
        <h3 className={styles.contactheader}>Contact Information</h3>
        <p className={styles.text}>{contactInfo}</p>
        <h3 className={styles.contactheader}>Operating Hours</h3>
        <p className={styles.text}>{operatingHours}</p>
        <h3 className={styles.contactheader}>General</h3>
        <p className={styles.text}>{general}</p>
        <h3 className={styles.contactheader}>Collaboration</h3>
        <p className={styles.text}>{collaboration}</p>
        <h3 className={styles.contactheader}>Publicity Requests</h3>
        <p className={styles.text}>{publicityRequests}</p>
      </div>
      
      <div className={styles.email}>
        <h2 className={styles.emailheader}>Email Form</h2>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
