import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Routes as ROUTES } from "../constants/routes.js";

import AboutUs from "./AboutUs/AboutUsPage";
import Governance from "./AboutUs/Governance";
import History from "./AboutUs/History";
import OurTeam from "./AboutUs/OurTeam";
import PresidentMessage from "./AboutUs/PresidentMessage";
import Contact from "./Contact";
import Events from "./Events";
import Freshmen from "./Freshmen";
import Home from "./Home";
import Maintenance from "./Maintenance/index.jsx";
import StudentFunds from "./Service/StudentFunds";
import CouncilFunding from "./Service/CouncilFunding";
import JoinUs from "./JoinUs/index.jsx";
import ResilienceFund from "./Service/ResilienceFund/index.jsx";
import ZoomLicense from "./Service/ZoomLicense/index.jsx";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.index} element={<Home />} />
        <Route path="*" element={<Navigate to={ROUTES.index} replace />} />
        <Route path={ROUTES.aboutUs} element={<AboutUs />} />
        <Route path={ROUTES.governance} element={<Governance />} />
        <Route path={ROUTES.history} element={<History />} />
        <Route path={ROUTES.ourTeam} element={<OurTeam />} />
        <Route path={ROUTES.presidentMessage} element={<PresidentMessage />} />
        <Route path={ROUTES.contact} element={<Contact />} />
        <Route path={ROUTES.events} element={<Events />} />
        <Route path={ROUTES.freshmen} element={<Freshmen />} />
        <Route path={ROUTES.studentfunds} element={<StudentFunds />} />
        <Route path={ROUTES.councilfunding} element= {<CouncilFunding />} />
        <Route path={ROUTES.resiliencefund} element= {<ResilienceFund />} />
        <Route path={ROUTES.zoomlicense} element= {<ZoomLicense />} />
        <Route path={ROUTES.joinus} element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
