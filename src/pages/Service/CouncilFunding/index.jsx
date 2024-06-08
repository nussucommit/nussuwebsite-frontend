import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import {

} from './helper';


const CouncilFunding = () => {
    // const url = Routes.backendRoot + Routes.studentfunds;
    // const [isLoading, content] = useFetchData(url);
    // const image = extractImage(content);
    // const about = extractAbout(content);
    // const lateApplications = extractLateApplications(content);
    
    // console.log(about);

    return (
        <div>
            <Navbar />

            <Footer />
        </div>
   )
}

export default CouncilFunding;