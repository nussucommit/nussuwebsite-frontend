import styles from "./ourteam.module.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const OurTeam = () => {
  return (
    <div className={styles.OurTeam}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.odd}>Executive </span>
          <span className={styles.even}>Committee </span>
          <span className={styles.odd}>Officers</span>
        </div>
        <div className={styles.teamgrid}>
          <div className={styles.member}>
            <img className={styles.image} />
            <p className={styles.name}>Lee Yat Bun</p>
            <p className={styles.position}>President</p>
            <p className={styles.committee}>
              NUSSU Computing Club EXCO Representative
            </p>
            <p className={styles.email}>president@nussu.com</p>
          </div>
          <div className={styles.member}>
            <img className={styles.image} />
            <p className={styles.name}>Lee Yat Bun</p>
            <p className={styles.position}>President</p>
            <p className={styles.committee}>
              NUSSU Computing Club EXCO Representative
            </p>
            <p className={styles.email}>president@nussu.com</p>
          </div>
          <div className={styles.member}>
            <img className={styles.image} />
            <p className={styles.name}>Lee Yat Bun</p>
            <p className={styles.position}>President</p>
            <p className={styles.committee}>
              NUSSU Computing Club EXCO Representative
            </p>
            <p className={styles.email}>president@nussu.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;
