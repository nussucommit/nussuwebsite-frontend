import styles from './publicitymanagement.module.css'
import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import {
  extractAnnouncements,
  extractElligibility,
  extractFairUse,
  extractFairUseEDM,
  extractGeneral,
  extractMaterialsEDM,
  extractMaterialsInstagram,
  extractMaterialsNoticeboards,
  extractMaterialsTelegram,
  extractNotes,
  extractProcess,
  extractPublicityMaterials,
} from './helper';
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';

const PublicityManagement = () => {
  const url = Routes.backendRoot + Routes.publicitymanagement;
  const [isLoading, content] = useFetchData(url);
  const announcements = extractAnnouncements(content);
  const process = extractProcess(content);
  const notes = extractNotes(content);
  const eligibility = extractElligibility(content);
  const general = extractGeneral(content);
  const publicityMaterials = extractPublicityMaterials(content);
  const materialEDM = extractMaterialsEDM(content);
  const materialInstagram = extractMaterialsInstagram(content);
  const materialTelegram = extractMaterialsTelegram(content);
  const materialNoticeboard = extractMaterialsNoticeboards(content);
  const fairUse = extractFairUse(content);
  const fairUseEDM = extractFairUseEDM(content);
  const documents = [

  ];

  const convert = (data) => {
    return data.map((item) => {
      if (item.type === 'paragraph') {
        return (
          <p className={styles.text}>{item.content}</p>
        )
      } else if (item.type === 'image') {
        return (
          <img src={item.content} className={styles.image} />
        )
      } else if (item.type === 'bullet' || item.type === 'number') {
        return (
          <li className={styles.bullet}>{item.content}</li>
        )
      }
    })
  }

  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <h1 className={styles.header}>Union Publicity Management</h1>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>Announcements</h2>
          <hr className={styles.horizontalLine} />
          {
            convert(announcements)
          }
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>Process for Publicity Requests</h2>
          <hr className={styles.horizontalLine} />
          {
            convert(process)
          }
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>Notes</h2>
          <ul>
            {
              convert(notes)
            }
          </ul>
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>Eligibility</h2>
          {
            convert(eligibility)
          }
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>General Guidelines on Publicity Materials</h2>
          <ol>
            {
              convert(general)
            }
          </ol>
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>Publicity Materials Required</h2>
          {
            convert(publicityMaterials)
          }
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>{'Electronic Digital Mailer (EDM)'}</h2>
          {
            convert(materialEDM)
          }
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>{'Instagram'}</h2>
          {
            convert(materialInstagram)
          }
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>{'Telegram Channel'}</h2>
          {
            convert(materialTelegram)
          }
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>{'Noticeboards'}</h2>
          {
            convert(materialNoticeboard)
          }
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>{'Fair Use'}</h2>
          {
            convert(fairUse)
          }
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>{'Electronic Digital Mailer (EDM)'}</h2>
          {
            convert(fairUseEDM)
          }
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default PublicityManagement