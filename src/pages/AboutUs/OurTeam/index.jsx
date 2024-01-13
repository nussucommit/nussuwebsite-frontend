import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import styles from "./ourteam.module.css";
import CellCard from "./Cell/CellCard";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { extractPersonsData } from "./helper";

const OurTeam = () => {
  const url = Routes.backendRoot + Routes.ourTeam;
  const [isLoading, content] = useFetchData(url);
  const personsData = extractPersonsData(content);
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
      {isLoading 
        ? <div></div>
        : personsData.map((item) => <CellCard cellName={item.cellName} image={item.image} members={[...item.members]}/>)}
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;
