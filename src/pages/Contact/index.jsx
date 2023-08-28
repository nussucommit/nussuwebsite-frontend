import styles from "./contact.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <Navbar />
      <Maintenance />
      <Footer />
    </div>
  );
};

export default Contact;
