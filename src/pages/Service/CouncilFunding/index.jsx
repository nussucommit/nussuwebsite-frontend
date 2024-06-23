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
} from './helper';
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';

const CouncilFunding = () => {
    const url = Routes.backendRoot + Routes.councilfunding;
    const [isLoading, content] = useFetchData(url);
    const about = extractAbout(content);
    const applicationPeriod = extractApplicationPeriod(content);
    // const fundingAmount = extractFundingAmount(content);
    const applicationLink = extractApplicationLink(content);
    const documents = [
        {
            url: "https://prod-files-secure.s3.us-west-2.amazonaws.com/58192aff-311a-42ce-88ef-f7a68a1798f3/12651ddd-921f-4c6a-ba15-319ceee8ae3a/AnnexB--2-.docx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240609T143625Z&X-Amz-Expires=3600&X-Amz-Signature=ff824c83b56d13a70d7a6e2cff059ee2aa080c107fab224cd1781bc6ad2d5172&X-Amz-SignedHeaders=host&x-id=GetObject",
            description: "Annex-B"
        },
        {
            url: "https://prod-files-secure.s3.us-west-2.amazonaws.com/58192aff-311a-42ce-88ef-f7a68a1798f3/f63ee443-0a43-4c08-ab78-dc8d75367953/AnnexA--2-.docx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240609T143625Z&X-Amz-Expires=3600&X-Amz-Signature=e34cdd7a931b5d0fda0765fd386f5ca4f180939c0a73513809077a1e6dd374a5&X-Amz-SignedHeaders=host&x-id=GetObject",
            description: "Annex-A"
        },
        {
            url: "https://prod-files-secure.s3.us-west-2.amazonaws.com/58192aff-311a-42ce-88ef-f7a68a1798f3/53ed338a-7a09-478d-b32f-60d6eb1d15b8/NUSSU_Funding_Guidelines_AY2223--2-.docx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240609T143625Z&X-Amz-Expires=3600&X-Amz-Signature=4f38e20b140f8013ab51e169d0e2337804f8d1ca5d1387a63a8ed7d2f97e2858&X-Amz-SignedHeaders=host&x-id=GetObject",
            description: "NUSSU Funding Guidelines"
        }
    ];
    console.log(documents);

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

                <div className={styles.table}>
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

                    {/* <div className={styles.fundingAmount}>
                        <h2 className={styles.subheader}>Funding Amount</h2>
                        <hr className={styles.horizontalLine} />
                        <p className={styles.text}></p>
                    </div> */}

                    <div className={styles.applicationLink}>
                        <h2 className={styles.subheader}>Application Link</h2>
                        <hr className={styles.horizontalLine} />
                        <p className={styles.text}>{applicationLink}</p>
                    </div>
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
                                <div className={styles.text}>{doc.description}</div>
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