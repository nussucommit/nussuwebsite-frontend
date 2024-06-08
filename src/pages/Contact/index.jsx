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
      <h1>Contact Us</h1>
      <div className={styles.Map} style={{ width: '100%', height: '400px' }}>
        <iframe 
          src={embedLink} 
          width="600" 
          height="450" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <h3>Contact Information</h3>
        <p>{contactInfo}</p>
        <h3>Operating Hours</h3>
        <p>{operatingHours}</p>
        <h3>General</h3>
        <p>{general}</p>
        <h3>Collaboration</h3>
        <p>{collaboration}</p>
        <h3>Publicity Requests</h3>
        <p>{publicityRequests}</p>
      </div>
      
      <div className={styles.email}>
        <h2>Email Form</h2>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
