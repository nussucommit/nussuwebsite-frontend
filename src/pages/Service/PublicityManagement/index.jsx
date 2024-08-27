import styles from './publicitymanagement.module.css'
import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import {
  extractAnnouncements,
  extractApproval,
  extractContent,
  extractCouncilProjects,
  extractDesign,
  extractDesignConsiderations,
  extractDirectives,
  extractElligibility,
  extractFairUse,
  extractFairUseEDM,
  extractFairUseInstagram,
  extractFairUseTelegram,
  extractGeneral,
  extractLinks,
  extractMaterialsEDM,
  extractMaterialsInstagram,
  extractMaterialsNoticeboards,
  extractMaterialsTelegram,
  extractNotes,
  extractNUSSUOrganisations,
  extractPDP,
  extractProcess,
  extractPublicityMaterials,
  extractUnionBrandingRequirements,
} from './helper';
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';

const PublicityManagement = () => {
  const pageOne = Routes.backendRoot + Routes.publicitymanagementone;
  const pageTwo = Routes.backendRoot + Routes.publicitymanagementtwo;
  const [isLoadingOne, contentOne] = useFetchData(pageOne);
  const [isLoadingTwo, contentTwo] = useFetchData(pageTwo);

  // Page One content
  const announcements = extractAnnouncements(contentOne);
  const process = extractProcess(contentOne);
  const notes = extractNotes(contentOne);
  const eligibility = extractElligibility(contentOne);
  const general = extractGeneral(contentOne);
  const publicityMaterials = extractPublicityMaterials(contentOne);
  const materialEDM = extractMaterialsEDM(contentOne);
  const materialInstagram = extractMaterialsInstagram(contentOne);
  const materialTelegram = extractMaterialsTelegram(contentOne);
  const materialNoticeboard = extractMaterialsNoticeboards(contentOne);

  // Page Two content
  const fairUse = extractFairUse(contentTwo);
  const fairUseEDM = extractFairUseEDM(contentTwo);
  const fairUseTelegram = extractFairUseTelegram(contentTwo);
  const fairUseInstagram = extractFairUseInstagram(contentTwo);
  const PDP = extractPDP(contentTwo);
  console.log(PDP)
  const approval = extractApproval(contentTwo);
  const NUSSUOrganisations = extractNUSSUOrganisations(contentTwo);
  const councilProjects = extractCouncilProjects(contentTwo);
  const designConsiderations = extractDesignConsiderations(contentTwo);
  const unionBrandingRequirements = extractUnionBrandingRequirements(contentTwo);
  const design = extractDesign(contentTwo);
  const content = extractContent(contentTwo);
  const links = extractLinks(contentTwo);
  const directives = extractDirectives(contentTwo);

  const convert = (data) => {
    return data.map((item) => {
      if (item.type === 'paragraph') {
        return (
          <p className={styles.text}>{item.content}</p>
        )
      } else if (item.type === 'quote') {
        return (
          <p className={styles.quote}>{item.content}</p>
        )
      } else if (item.type === 'image') {
        return (
          <img src={item.content} className={styles.image} />
        )
      } else if (item.type === 'file') {
        return (
          <div className={styles.icon}>
            <a
              href={item.content}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CIcon icon={freeSet.cilFile} height="10vh" width="7.5vw" />
            </a>
            <div className={styles.text}>{`Directives`}</div>
          </div>
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
          <h3 className={styles.subheader}>Notes</h3>
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
          <h3 className={styles.subheader}>{'Electronic Digital Mailer (EDM)'}</h3>
          {
            convert(materialEDM)
          }
        </div>

        <div className={styles.subcontent}>
          <h3 className={styles.subheader}>{'Instagram'}</h3>
          {
            convert(materialInstagram)
          }
        </div>

        <div className={styles.subcontent}>
          <h3 className={styles.subheader}>{'Telegram Channel'}</h3>
          {
            convert(materialTelegram)
          }
        </div>

        <div className={styles.subcontent}>
          <h3 className={styles.subheader}>{'Noticeboards'}</h3>
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
          <h3 className={styles.subheader}>{'Electronic Digital Mailer (EDM)'}</h3>
          {
            convert(fairUseEDM)
          }
        </div>

        <div className={styles.subcontent}>
          <h3 className={styles.subheader}>{'Telegram Channel'}</h3>
          {
            convert(fairUseTelegram)
          }
        </div>

        <div className={styles.subcontent}>
          <h3 className={styles.subheader}>{'Instagram Story or Post Sharing'}</h3>
          {
            convert(fairUseInstagram)
          }
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>{'Personal Data Protection'}</h2>
          {
            convert(PDP)
          }
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>{'Approval of Publicity Materials'}</h2>
          {
            convert(approval)
          }
        </div>

        <div className={styles.subcontent}>
          <h3 className={styles.subheader}>{'NUSSU Constituent Clubs, Associate Bodies and other NUS-registered Organisations'}</h3>
          {
            convert(NUSSUOrganisations)
          }
        </div>

        <div className={styles.subcontent}>
          <h3 className={styles.subheader}>{'Council, EXCO, Committees or Projects'}</h3>
          {
            convert(councilProjects)
          }
        </div>

        <div className={styles.subcontent}>
          <h2 className={styles.subheader}>{'Design Considerations'}</h2>
          {
            convert(designConsiderations)
          }
        </div>

        <div className={styles.subcontent}>
          <h3 className={styles.subheader}>{'Union branding requirements'}</h3>
          {
            convert(unionBrandingRequirements)
          }
        </div>

        <div className={styles.subcontent}>
          <h3 className={styles.subheader}>{'Design'}</h3>
          {
            convert(design)
          }
        </div>

        <div className={styles.subcontent}>
          <h3 className={styles.subheader}>{'Content'}</h3>
          {
            convert(content)
          }
        </div>

        <div className={styles.subcontent}>
          <h3 className={styles.subheader}>{'Links'}</h3>
          {
            convert(links)
          }
        </div>

        <div className={styles.subcontent}>
          <h3 className={styles.subheader}>{'Directives'}</h3>
          {
            convert(directives)
          }
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default PublicityManagement