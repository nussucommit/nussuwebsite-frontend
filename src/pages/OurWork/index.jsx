import styles from "./ourwork.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Ourwork = () => {
  return (
    <div className={styles.Ourwork}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.odd}>Progress </span>
          <span className={styles.even}>Tracker</span>
        </div>
        <p className={styles.opener}>
          The Student Government Progress Tracker is a display of the
          development of Executive Cabinet initiatives. We are working hard to
          make our community a better place in every area that affects the
          student experience. Check back often for updates, and please reach out
          to any Department Directors or Members of Executive Leadership if you
          have any questions or suggestions.
        </p>
        <div className={styles.subheader}>
          <span className={styles.odd}>Our </span>
          <span className={styles.even}>Departments</span>
        </div>
        <p className={styles.opener}>
          To be a representative and inclusive institution advocating NUS
          students’ interests.
        </p>
        <div className={styles.grid}>
          <div className={styles.gridcontainer}>
            <div className={styles.griditem}>Organisation 1</div>
            <div className={styles.griditem}>Organisation 2</div>
            <div className={styles.griditem}>Organisation 3</div>
            <div className={styles.griditem}>Organisation 4</div>
            <div className={styles.griditem}>Organisation 5</div>
            <div className={styles.griditem}>Organisation 6</div>
            <div className={styles.griditem}>Organisation 7</div>
            <div className={styles.griditem}>Organisation 8</div>
            <div className={styles.griditem}>Organisation 9</div>
          </div>
        </div>
        <div className={styles.organisations}>
          <hr></hr>
          <div className={styles.organisation}>
            <h2 className={styles.orgheader}>Organisation 1</h2>
            <p className={styles.director}>Department Director: Alice Smith</p>
            <p className={styles.contact}>Contact: alicesmith@org1.com</p>
            <p className={styles.eventheader}>Event 1:</p>
            <p className={styles.description}>
              This is the placeholder content for the description of the event.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className={styles.status}>Status: Completed</p>
            <p className={styles.eventheader}>Event 2:</p>
            <p className={styles.description}>
              This is the placeholder content for the description of the event.
            </p>
            <p className={styles.status}>Status: In progress</p>
          </div>
          <hr></hr>
          <div className={styles.organisation}>
            <h2 className={styles.orgheader}>Organisation 2</h2>
            <p className={styles.director}>Department Director: John Smith</p>
            <p className={styles.contact}>Contact: johnsmith@org2.com</p>
            <p className={styles.eventheader}>Event 1:</p>
            <p className={styles.description}>
              This is the placeholder content for the description of the event.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className={styles.status}>Status: Completed</p>
            <p className={styles.eventheader}>Event 2:</p>
            <p className={styles.description}>
              This is the placeholder content for the description of the event.
            </p>
            <p className={styles.status}>Status: In progress</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ourwork;
