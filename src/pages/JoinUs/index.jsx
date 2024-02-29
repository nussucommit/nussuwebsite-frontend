import styles from "./joinus.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";

const JoinUs = () => {
  return (
    <div className={styles.JoinUs}>
      <Navbar />
      <Maintenance />
      <Footer />
    </div>
  );
};

export default JoinUs;