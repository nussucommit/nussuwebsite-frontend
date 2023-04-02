import styles from "./events.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Events = () => {
  const options = ["All", "Student Life", "Welfare", "Freshman"];
  const defaultOption = options[0];

  return (
    <div className={styles.Events}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.odd}>Events</span>
        </div>
        <div className={styles.dropdown}>
          <Dropdown
            className={styles.dropdown}
            options={options}
            value={defaultOption}
            placeholder="Event Type"
          />
        </div>
        <div className={styles.eventdetails}>
          <div className={styles.container}>
            <img className={styles.image} />
            <div className={styles.details}>
              <p className={styles.date}>"Start Date" - "End Date"</p>
              <p className={styles.description}>
                Freshmen Orientation Programmes (FOPs) aimed to ease them into
                this new university chapter of their life. These FOPs are
                organised by various NUS groups that comprise of NUS Students’
                Union (NUSSU), NUSSU Faculty Clubs, NUSSU Non-Faculty Clubs,
                Halls and Residential Colleges, Academic Societies (for various
                Faculty Departments) and Student Interest Groups.
              </p>
            </div>
          </div>
          <div className={styles.container}>
            <img className={styles.image} />
            <div className={styles.details}>
              <p className={styles.date}>"Start Date" - "End Date"</p>
              <p className={styles.description}>
                Freshmen Orientation Programmes (FOPs) aimed to ease them into
                this new university chapter of their life. These FOPs are
                organised by various NUS groups that comprise of NUS Students’
                Union (NUSSU), NUSSU Faculty Clubs, NUSSU Non-Faculty Clubs,
                Halls and Residential Colleges, Academic Societies (for various
                Faculty Departments) and Student Interest Groups.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
