import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import styles from "./studentfunds.module.css"
import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import {
  extractImage,
  extractAbout,
  extractLateApplications,
  extractEligibility,
  extractApplicationPeriod,
  extractResultsRelease,
  extractApplicationLink,
  extractTermsAndConditions,
} from './helper';


const StudentFunds = () => {
    const url = Routes.backendRoot + Routes.studentfunds;
    const [isLoading, content] = useFetchData(url);
    const image = extractImage(content);
    const about = extractAbout(content);
    const lateApplications = extractLateApplications(content);
    const eligibility = extractEligibility(content);
    // const assistanceProviced = extractAssistanceProvided(content);
    const applicationPeriod = extractApplicationPeriod(content);
    const resultsRelease = extractResultsRelease(content);
    const applicationLink = extractApplicationLink(content);
    const termsAndConditions = extractTermsAndConditions(content);
    console.log(termsAndConditions);

    return (
        <div>
            <Navbar />
            <div className={styles.image}>
                <img src={image} />
            </div>

            <div className={styles.about}>
                <h2>ABOUT NUSSU Students' Fund</h2>
                <p>{about}</p>
            </div>

            <div className={styles.lateApplications}>
                <h2>Late Applications</h2>
                <p>{lateApplications}</p>
            </div>

            <div className={styles.eligibility}>
                <h2>Eligibility</h2>
                <p>{eligibility}</p>
            </div>

            {/* <div className={styles.assistance}>
                <h2>Assistance Provided</h2>
                <p>{assistanceProviced}</p>
            </div> */}

            <div className={styles.application}>
                <h2>Application</h2>
                <h3>Application Period</h3>
                <p>{applicationPeriod}</p>
                <h3>Release of Results</h3>
                <p>{resultsRelease}</p>
                <h3>Application Link</h3>
                <p>{applicationLink}</p>
            </div>

            <div className={styles.terms}>
                <h2>Terms and Conditions</h2>
                <div>{termsAndConditions}</div>
            </div>

            <Footer />
        </div>
   )
}

export default StudentFunds;