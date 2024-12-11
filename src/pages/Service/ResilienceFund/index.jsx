import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import styles from "./resiliencefund.module.css"
import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import {
    extractImage,
    extractAbout,
    extractEligibility,
    extractApplicationProcedure,
    extractApplicationPeriod,
    extractApplicationLink,
    extractAssistanceProvided
} from './helper';

const ResilienceFund = () => {
    const url = Routes.backendRoot + Routes.resiliencefund;
    const [isLoading, content] = useFetchData(url);
    const image = extractImage(content);
    const about = extractAbout(content);
    const eligibility = extractEligibility(content);
    const assistanceProvided = extractAssistanceProvided(content);
    const applicationProcedure = extractApplicationProcedure(content);
    const applicationPeriod = extractApplicationPeriod(content);
    const applicationLink = extractApplicationLink(content);

    return (
        <div>
            <Navbar />
            <h1 className={styles.header}>NUS Staff Club Students' Resilience Fund</h1>
            <div className={styles.imageContainer}>
                <img src={image} className={styles.image}/>
            </div>

            <div className={styles.content}>
                <div className={styles.about}>
                    <h2 className={styles.subheader}>ABOUT NUS Staff Club Students' Resilience Fund</h2>
                    <hr className={styles.horizontalLine} />
                    <p className={styles.text}>{about}</p>
                </div>

                <div className={styles.eligibility}>
                    <h2 className={styles.subheader}>Eligibility</h2>
                    <hr className={styles.horizontalLine} />
                    <p className={styles.text}>{eligibility}</p>
                </div>

                <div className={styles.assistance}>
                    <h2 className={styles.subheader}>Assistance Provided</h2>
                    <div className={styles.imageContainer}>
                        <img src={assistanceProvided} className={styles.image} />
                    </div>
                </div>

                <div className={styles.application}>
                    <h2 className={styles.subheader}>Application</h2>
                    <hr className={styles.horizontalLine} />
                    <h3 className={styles.textheader}>Application Procedure</h3>
                    <p className={styles.text}>{applicationProcedure}</p>
                    <h3 className={styles.textheader}>Application Period</h3>
                    <p className={styles.text}>{applicationPeriod}</p>
                    <h3 className={styles.textheader}>Application Link</h3>
                    <p className={styles.text}>{applicationLink}</p>
                </div>
            </div>
        
            <Footer />
        </div>
   )
}

export default ResilienceFund;