import styles from "./freshmen.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useFetchData } from "../../common/useFetchData";
import { Routes } from "../../constants/routes";

const Freshmen = () => {
  const url = Routes.backendRoot + Routes.freshmen;
  const [isLoading, content] = useFetchData(url);
  console.log(content);
  return (
    <div className={styles.Freshmen}>
      <Navbar />
      <Maintenance />
      <hr className={styles.horizontalLine} />
      <Footer />
    </div>
  );
};

export default Freshmen;
