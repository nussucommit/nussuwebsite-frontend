import styles from "./president.module.css";
import Maintenance from "../../Maintenance";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const PresidentMessage = () => {
  return (
    <div className={styles.PresidentMessage}>
      <Navbar />
      <Maintenance />
      <Footer />
    </div>
  );
};

export default PresidentMessage;
