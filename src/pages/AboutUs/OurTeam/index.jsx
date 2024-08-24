import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import styles from "./ourteam.module.css";
import CellCard from "./Cell/CellCard";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { extractPersonsData } from "./helper";
import Maintenance from "../../Maintenance";

const OurTeam = () => {
  const url = Routes.backendRoot + Routes.ourTeam;
  const [isLoading, content] = useFetchData(url);
  const personsData = extractPersonsData(content);
  return (
    <div className={styles.container}>
      <Navbar />
      {/* {isLoading 
        ? <div className={styles.wrapper}></div>
        : personsData.map((item) => <CellCard cellName={item.cellName} image={item.image} members={[...item.members]}/>)} */}
      <Maintenance />
      <Footer />
    </div>
  );
};

export default OurTeam;
