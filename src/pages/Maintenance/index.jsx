import styles from "./maintenance.module.css";

const Maintenance = () => {
  return (
    <div className={styles.maintenance}>
      <h1 class="nl_open-sans">Planned Upgrade Today</h1>
      <p className={styles.announcement}>
        This page is temporarily unavailable due to a planned upgrade. We
        apologize for any inconvenience.
      </p>
    </div>
  );
};

export default Maintenance;
