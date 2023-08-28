import styles from "./governance.module.css";
import Maintenance from "../../Maintenance";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const Governance = () => {
  return (
    <div className={styles.Governance}>
      <Navbar />
      <Maintenance />
      <Footer />
    </div>
  );
};

export default Governance;
