import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import "./ourteam.css";
import PersonCard from "./components/PersonCard";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { extractPersonsData } from "./helper";

const OurTeam = () => {
  const url = Routes.backendRoot + Routes.ourTeam;
  const [isLoading, content] = useFetchData(url);
  const personsData = extractPersonsData(content);
  console.log(personsData)
  return (
    <div>
      <Navbar />
    <div className="wrapper">
    {isLoading 
      ? <div></div>
    : personsData.map((item) => <PersonCard name={item.name} position={item.position} email={item.email} emailHyperlink={item.emailHyperlink}/>)}
    </div>
    <Footer />
    </div>
  );
};

export default OurTeam;
