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
    extractAssistanceProvided,
    extractTermsAndConditions
} from './helper';
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons'

const bulletListParse = (item) => {
    console.log(item)
    let children = null
    let text = ""
    item.content && item.content.map(subitem => {
        text += subitem.content
        if (subitem.children) {
            children = subitem.children
        }
    })
    return (<li>
        {text}
        {children && (
            <ul className={styles.text}>
                {children.map(subcontent => bulletListParse(subcontent))}
            </ul>
        )}
    </li>)
}

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
    const termsAndConditions = extractTermsAndConditions(content);

    return (
        <div>
            <Navbar />
            <h1 className={styles.header}>NUS Staff Club Students' Resilience Fund</h1>
            <div className={styles.imageContainer}>
                <img src={image} className={styles.image} />
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
                    <ul className={styles.text}>
                        {eligibility.map(item => {
                            if (item.type === "paragraph") {
                                let text = "";
                                item.content.map(subitem => {
                                    text += subitem.content
                                })
                                return (
                                    <p className={styles.text}>{text}</p>
                                )
                            } else if (item.type === "bulleted_list_item") {
                                return bulletListParse(item)
                            }
                        })}
                    </ul>
                </div>

                <div className={styles.assistance}>
                    <h2 className={styles.subheader}>Assistance Provided</h2>
                    <hr className={styles.horizontalLine} />
                    <div className={styles.imageContainer}>
                        <img src={assistanceProvided} className={styles.image} />
                    </div>
                </div>

                <div className={styles.application}>
                    <h2 className={styles.subheader}>Application</h2>
                    <hr className={styles.horizontalLine} />
                    <h3 className={styles.textheader}>Application Procedure</h3>
                    <ol className={styles.text}>
                        {applicationProcedure.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                    <h3 className={styles.textheader}>Application Period</h3>
                    <p className={styles.text}>{applicationPeriod}</p>
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
                    <div className={styles.text}>{termsAndConditions.name}</div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ResilienceFund;