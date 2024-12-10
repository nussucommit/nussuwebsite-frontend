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
    extractAssistanceProvided,
    extractApplicationPeriod,
    extractResultsRelease,
    extractApplicationLink,
    extractTermsAndConditions,
} from './helper';

import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons'
// import { cilFilePdf } from '@coreui/icons';


const StudentFunds = () => {
    const url = Routes.backendRoot + Routes.studentfunds;
    const [isLoading, content] = useFetchData(url);
    const image = extractImage(content);
    const about = extractAbout(content);
    const lateApplications = extractLateApplications(content);
    const eligibility = extractEligibility(content);
    const assistanceProvided = extractAssistanceProvided(content);
    const applicationPeriod = extractApplicationPeriod(content);
    const resultsRelease = extractResultsRelease(content);
    const applicationLink = extractApplicationLink(content);
    const termsAndConditions = {
        url: "https://prod-files-secure.s3.us-west-2.amazonaws.com/58192aff-311a-42ce-88ef-f7a68a1798f3/e89acd53-73c8-4c6c-9e4f-7eca5eb47157/NUSSU-Students--Funds-Terms---Conditions.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240609T141121Z&X-Amz-Expires=3600&X-Amz-Signature=ccf797c03682bb7f9a16c5e88853309e63aa507b7dd45399cd766f9c3ac8ec21&X-Amz-SignedHeaders=host&x-id=GetObject",
        description: "NUSSU Students' Funds Terms and Conditions"
    };

    return (
        <div>
            <Navbar />
            <h1 className={styles.header}>NUSSU Students' Fund</h1>
            <div className={styles.imageContainer}>
                <img src={image} className={styles.image} />
            </div>

            <div className={styles.content}>
                <div className={styles.about}>
                    <h2 className={styles.subheader}>ABOUT NUSSU Students' Fund</h2>
                    <hr className={styles.horizontalLine} />
                    <p className={styles.text}>{about}</p>
                </div>

                <div className={styles.lateApplications}>
                    <h2 className={styles.subheader}>Late Applications</h2>
                    <hr className={styles.horizontalLine} />
                    <p className={styles.text}>{lateApplications}</p>
                </div>

                <div className={styles.eligibility}>
                    <h2 className={styles.subheader}>Eligibility</h2>
                    <hr className={styles.horizontalLine} />


                    <p className={styles.text}>{eligibility[0]}</p>
                    <ul className={styles.text}>
                        {eligibility.slice(1).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

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
                    <h3 className={styles.textheader}>Application Period</h3>
                    <p className={styles.text}>{applicationPeriod}</p>
                    <h3 className={styles.textheader}>Release of Results</h3>
                    <p className={styles.text}>{resultsRelease}</p>
                    <h3 className={styles.textheader}>Application Link</h3>
                    <p className={styles.text}>{applicationLink}</p>
                </div>

                <div className={styles.terms}>
                    <h2 className={styles.subheader}>Terms and Conditions</h2>
                    <hr className={styles.horizontalLine} />
                    {/* <div>{termsAndConditions}</div> */}
                    <a href={termsAndConditions.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                        <CIcon icon={freeSet.cilFile} height="10vh" width="7.5vw" />
                    </a>
                    <div className={styles.text}>{termsAndConditions.description}</div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default StudentFunds;