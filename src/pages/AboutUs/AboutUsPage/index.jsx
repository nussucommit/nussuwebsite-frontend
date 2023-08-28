import styles from "./aboutus.module.css";
import Maintenance from "../../Maintenance";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const AboutUs = () => {
  return (
    <div className={styles.AboutUs}>
      <Navbar />
      <Maintenance />
      <Footer />
    </div>
  );
};

export default AboutUs;
