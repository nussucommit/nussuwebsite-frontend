import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import "./ourteam.css";
import CellCard from "./Cell/CellCard";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { extractPersonsData } from "./helper";

const OurTeam = () => {
  const url = Routes.backendRoot + Routes.ourTeam;
  const [isLoading, content] = useFetchData(url);
  const personsData = extractPersonsData(content);
  return (
    <div className="container">
      <Navbar />
    <div className="wrapper">
    {isLoading 
      ? <div></div>
      : personsData.map((item) => <CellCard cellName={item.cellName} image={item.image} members={[...item.members]}/>)}
    </div>
    <Footer />
    </div>
  );
};

export default OurTeam;
