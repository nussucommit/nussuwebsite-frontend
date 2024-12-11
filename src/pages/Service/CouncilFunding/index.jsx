import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import styles from "./councilfunding.module.css"
import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import {
    extractAbout,
    extractFundingAmount,
    extractApplicationPeriod,
    extractApplicationLink,
    extractDocuments,
} from './helper';
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';

const CouncilFunding = () => {
    const url = Routes.backendRoot + Routes.councilfunding;
    const [isLoading, content] = useFetchData(url);
    const about = extractAbout(content);
    const applicationPeriod = extractApplicationPeriod(content);
    const fundingAmount = extractFundingAmount(content);
    const applicationLink = extractApplicationLink(content);
    const documents = extractDocuments(content);

    return (
        <div>
            <Navbar />
            <div className={styles.content}>
                <h1 className={styles.header}>Union Council Funding</h1>


                <div className={styles.about}>
                    <h2 className={styles.subheader}>ABOUT Union Council Funding</h2>
                    <hr className={styles.horizontalLine} />
                    <p className={styles.text}>{about}</p>
                </div>


                <div className={styles.applicationPeriod}>
                    <h2 className={styles.subheader}>Application Period</h2>
                    <hr className={styles.horizontalLine} />
                    <ol className={styles.text}>
                        {applicationPeriod.slice(0, 3).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                    <ul className={styles.text}>
                        {applicationPeriod.slice(3, 5).map((item, index) => (
                            <li key={index + 3}>{item}</li>
                        ))}
                    </ul>
                    <p className={styles.text}>{applicationPeriod[5]}</p>
                    {/* <p className={styles.text}>{applicationPeriod}</p> */}
                </div>


                <div className={styles.fundingAmount}>
                    <h2 className={styles.subheader}>Funding Amount</h2>
                    <hr className={styles.horizontalLine} />
                    <div className={styles.imageContainer}>
                        <img src={fundingAmount} className={styles.image} />
                    </div>
                </div>

                <div className={styles.applicationLink}>
                    <h2 className={styles.subheader}>Application Link</h2>
                    <hr className={styles.horizontalLine} />
                    <p className={styles.text}>{applicationLink}</p>
                </div>




                <div className={styles.documents}>
                    <h2 className={styles.subheader}>Documents</h2>
                    <hr className={styles.horizontalLine} />
                    <div className={styles.icons}>
                        {documents.map((doc, index) => (
                            <div key={index} className={styles.icon}>
                                <a
                                    href={doc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <CIcon icon={freeSet.cilFile} height="10vh" width="7.5vw" />
                                </a>
                                <div className={styles.text}>{doc.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CouncilFunding;