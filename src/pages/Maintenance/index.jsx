import styles from "./maintenance.module.css";
import { Routes as ROUTES } from "../../constants/routes.js"

const Maintenance = () => {
   return (
    <div className = {styles.background}>
    
    <div className = {styles.container}>
      
      <h1 className={styles.maintenanceHeading}>Planned Upgrade Today</h1>
      <p className={styles.maintenanceMessage}>
        This page is temporarily unavailable due to a planned upgrade. We
        apologize for any inconvenience.
      </p>
      <button className = {styles.button}> <a className= {styles.linkColour} href = {ROUTES.home}> Back to Homepage </a></button>
    
    </div>
    </div>
    // link to the homepage should be fetched from where? 
  );
};

export default Maintenance;
