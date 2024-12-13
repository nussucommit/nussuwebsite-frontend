import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import styles from "./zoomlicense.module.css"
import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import {
    extractAbout,
    extractApply,
    extractEligibility,
    extractTermsAndConditions,
    extractApplicationForm,
    extractTemplate,
    extractContact,
} from './helper';

import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons'

const ZoomLicense = () => {
    const url = Routes.backendRoot + Routes.zoomlicense;
    const [isLoading, content] = useFetchData(url);
    const about = extractAbout(content);
    const apply = extractApply(content);
    const eligibility = extractEligibility(content);
    const termsAndConditions = extractTermsAndConditions(content);
    const applicationForm = extractApplicationForm(content);
    const template = extractTemplate(content);
    const contact = extractContact(content);

    return (
        <div>
            <Navbar />
            <h1 className={styles.header}>Request for Zoom License</h1>
            

            <div className={styles.content}>
                <div className={styles.about}>
                    <h2 className={styles.subheader}>Zoom Licenses</h2>
                    <hr className={styles.horizontalLine} />
                    <p className={styles.text}>{about}</p>
                </div>

                <div className={styles.apply}>
                    <h2 className={styles.subheader}>How To Apply?</h2>
                    <hr className={styles.horizontalLine} />
                    <p className={styles.text}>{apply}</p>
                </div>

                <div className={styles.eligibility}>
                    <h2 className={styles.subheader}>Eligibility</h2>
                    <hr className={styles.horizontalLine} />
                    <p className={styles.text}>{eligibility}</p>
                </div>

                <div className={styles.box}>
                    <h2 className={styles.boxheader}>Application Form</h2>
                    <u className={styles.text}>{applicationForm}</u>
                </div>

                <div className={styles.box}>
                    <h2 className={styles.boxheader}>Zoom Request Excel Template</h2>
                    <u className={styles.text}>{template}</u>
                </div>

                <div className={styles.box}>
                    <h2 className={styles.boxheader}>Contact Point</h2>
                    <p className={styles.contacttext}>{contact[0]}</p>
                    <p className={styles.contacttext}>{contact[1]}</p>
                </div>

            </div>
        
            <Footer />
        </div>
   )
}

export default ZoomLicense;