import styles from "./freshmen.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Freshmen = () => {
  return (
    <div className={styles.Freshmen}>
      <Navbar />
      <Maintenance />
      <Footer />
    </div>
  );
};

export default Freshmen;
