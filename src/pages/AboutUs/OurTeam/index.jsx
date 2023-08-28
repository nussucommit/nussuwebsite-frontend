import styles from "./ourteam.module.css";
import Maintenance from "../../Maintenance";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const OurTeam = () => {
  return (
    <div className={styles.OurTeam}>
      <Navbar />
      <Maintenance />
      <Footer />
    </div>
  );
};

export default OurTeam;
