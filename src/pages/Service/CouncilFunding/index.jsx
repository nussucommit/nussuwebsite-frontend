import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import styles from "./councilfunding.module.css"
import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import {
    extractAbout,
    extractApplicationPeriod,
    extractApplicationLink,
    extractDocuments,
} from './helper';


const CouncilFunding = () => {
    const url = Routes.backendRoot + Routes.councilfunding;
    const [isLoading, content] = useFetchData(url);
    const about = extractAbout(content);
    const applicationPeriod = extractApplicationPeriod(content);
    // const fundingAmount = extractFundingAmount(content);
    const applicationLink = extractApplicationLink(content);
    const documents = extractDocuments(content);
    console.log(documents);

    return (
        <div>
            <Navbar />
            <h1>Union Council Funding</h1>

            <div className={styles.about}>
                <h2>Union Council Funding</h2>
                <p>{about}</p>
            </div>

            <div className={styles.applicationPeriod}>
                <h2>Application Period</h2>
                <p>{applicationPeriod}</p>
            </div>

            <div className={styles.fundingAmount}>
                <h2>Funding Amount</h2>
                <p></p>
            </div>

            <div className={styles.applicationLink}>
                <h2>Application Link</h2>
                <p>{applicationLink}</p>
            </div>

            <div className={styles.documents}>
                <h2>Documents</h2>
                <p>{documents}</p>
            </div>
            <Footer />
        </div>
   )
}

export default CouncilFunding;