import styles from "./service.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Service = () => {
  return (
    <div className={styles.Service}>
      <Navbar />
      <Maintenance />
      <Footer />
    </div>
  );
};

export default Service;
