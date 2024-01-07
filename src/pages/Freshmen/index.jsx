import styles from "./freshmen.module.css";
import Maintenance from "../Maintenance";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useFetchData } from "../../common/useFetchData";
import { Routes } from "../../constants/routes";
import {
  extractFAQ,
  extractFOP,
  extractFOPDesc,
  extractNexus,
  extractFOPCategory,
} from "./helper";

const Freshmen = () => {
  const url = Routes.backendRoot + Routes.freshmen;
  const [isLoading, content] = useFetchData(url);
  const FOP = extractFOP(content);
  const FOPDesc = extractFOPDesc(content);
  const Nexus = extractNexus(content);
  const FOPCategory = extractFOPCategory(content);
  const FAQ = extractFAQ(content);

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
