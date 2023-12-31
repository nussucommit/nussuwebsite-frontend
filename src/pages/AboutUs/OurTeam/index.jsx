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
      {isLoading 
	    ? <div></div>
		: personsData.map((item) => <PersonCard name={item.name} position={item.position} email={item.email} emailHyperlink={item.emailHyperlink}/>)}
      <Footer />
    </div>
  );
};

export default OurTeam;
