import styles from "./ourwork.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Ourwork = () => {
  return (
    <div className={styles.Ourwork}>
      <Navbar />
      <Maintenance />
      <Footer />
    </div>
  );
};

export default Ourwork;
