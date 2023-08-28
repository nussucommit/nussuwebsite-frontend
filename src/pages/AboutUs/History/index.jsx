import styles from "./history.module.css";
import Maintenance from "../../Maintenance";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const History = () => {
  return (
    <div className={styles.History}>
      <Navbar />
      <Maintenance />
      <Footer />
    </div>
  );
};

export default History;
