import React from 'react';
import styles from './governance.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import CollapsibleSection from './Components/CollapsibleSection';
import Accordion from './Components/Accordion';
import { useFetchData } from '../../../common/useFetchData';
import { Routes } from '../../../constants/routes';
import {
  extractImage,
  extractHeading,
  extractNussuCouncilDetails,
  extractNussuExcoDetails,
  extractNussuCommitteesDetails,
  extractNussuProjectsDetails,
  extractNussuConstituentClubsDetails,
  extractUnionConstitutionandRegulation
} from './helper';
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';

const Governance = () => {
  const url = Routes.backendRoot + Routes.governance;
  const url2 = Routes.backendRoot + Routes.governance + "2";
  const [isLoading, content] = useFetchData(url);
  const [isLoading2, content2] = useFetchData(url2);
  const image = extractImage(content);
  const heading = extractHeading(content);
  const councilDetails = extractNussuCouncilDetails(content);
  const excoDetails = extractNussuExcoDetails(content);
  const committeesDetails = extractNussuCommitteesDetails(content);
  const projectsDetails = extractNussuProjectsDetails(content);
  const clubsDetails = extractNussuConstituentClubsDetails(content2);
  const unionConstitutionandRegulation = extractUnionConstitutionandRegulation(content2);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heading}>Structure</div>
        <hr className={styles.horizontalLine} />
        <div className={styles.imagecontainer}>
          <img src={image} className={styles.image} alt="Structure Image" />
        </div>
        <div className={styles.content}>
          {councilDetails.heading && (
            <>
              <div className={styles.councilheader}></div>
              <hr className={styles.horizontalLine2} />
              <div className={styles.councilcontent}>
                {councilDetails.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </>
          )}

          {excoDetails.heading && (
            <CollapsibleSection type="exco">
              {excoDetails.sections.map((section, index) => (
                <Accordion key={index} className={styles.excosubheading} title={section.heading}>
                  <div className={styles.excocontent}>
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </Accordion>
              ))}
            </CollapsibleSection>
          )}

          {committeesDetails.heading && (
            <CollapsibleSection type="committees">
              {committeesDetails.sections.map((section, index) => (
                <Accordion key={index} className={styles.committeessubheading} title={section.heading}>
                  <div className={styles.committeescontent}>
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </Accordion>
              ))}
            </CollapsibleSection>
          )}

          {projectsDetails.heading && (
            <CollapsibleSection type="projects">
              <div className={styles.slidercontainer}>
                <Slider {...sliderSettings}>
                  {projectsDetails.sections.map((section, index) => (
                    <div key={index}>
                      <div className={styles.projectssubheading}>{section.heading}</div>
                      <div className={styles.projectscontent}>
                        {section.paragraphs.map((paragraph, index) => (
                          <p key={index}>
                            {paragraph.attribute && paragraph.attribute.bold && paragraph.attribute.underline ? (
                              <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{paragraph.content}</span>
                            ) : (
                              paragraph.content
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </CollapsibleSection>
          )}

          {clubsDetails.heading && (
            <CollapsibleSection type="clubs">
              <div className={styles['clubs-grid']}>
                {clubsDetails.sections.map((section, index) => (
                  <div key={index} className={styles.club}>
                    <div className={styles.clubssubheading}>{section.heading}</div>
                    {section.image && (
                      <img src={section.image} alt={section.heading} />
                    )}
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}
        </div>

        <div className={styles.heading}>Union Constitution and Regulations</div>
        <hr className={styles.horizontalLine} />
        <div className={styles.content}>
          {unionConstitutionandRegulation.heading && (
            <CollapsibleSection type="docs" heading={unionConstitutionandRegulation.heading}>
              <div>
                {unionConstitutionandRegulation.docs.map(doc => (
                  <>
                    <a href={doc.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                      <CIcon icon={freeSet.cilFile} height="10vh" width="7.5vw" />
                    </a>
                    <div className={styles.text}>{doc.name}</div>
                  </>
                ))}
              </div>
            </CollapsibleSection>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Governance;
