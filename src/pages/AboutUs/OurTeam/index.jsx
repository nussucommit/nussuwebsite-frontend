import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import styles from "./ourteam.module.css";
import PersonCard from "./components/PersonCard";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { extractPersonsData } from "./helper";

const OurTeam = () => {
  const url = Routes.backendRoot + Routes.ourTeam;
  const [isLoading, content] = useFetchData(url);
  const [cellsData, imagesData, personsData] = extractPersonsData(content);
  return (
    <div className={styles.OurTeam}>
      <Navbar />
      <PersonCard />
      <Footer />
    </div>
  );
};

export default OurTeam;
