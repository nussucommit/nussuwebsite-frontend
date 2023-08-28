import styles from "./events.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Events = () => {
  return (
    <div className={styles.Events}>
      <Navbar />
      <Maintenance />
      <Footer />
    </div>
  );
};

export default Events;
