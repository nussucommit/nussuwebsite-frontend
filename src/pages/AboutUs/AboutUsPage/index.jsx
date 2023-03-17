import styles from "./aboutus.module.css";
import photo from "../../../assets/nussu_group_photo.jpeg";
import Navbar from "../../Navbar";

const AboutUs = () => {
  const mock = {
    vision:
      "To foster receptive and engaging platforms promoting students interests, bridging perspectives and nurturing global leaders of change.",
    mission:
      "To be a representative and inclusive institution advocating NUS students interests.",
    content:
      "The National University of Singapore Students’ Union (NUSSU) is a unique student-run institution that is autonomous from the University Administration primarily in terms of operations and budget. Perspectives and opinions about any issue vary, as such, to facilitate communication between the Union and the administration, Student leaders from various faculty clubs and non-faculty clubs volunteer to come together as the NUSSU Council to address the concerns of their fellow undergraduate union members. The NUSSU Council is spearheaded by the NUSSU Executive Committee (NUSSU EXCO). The NUSSU Council constantly strives to work towards upholding its vision of being a representative, inclusive and credible institution to promote, safeguard and uphold students’ interest and welfare in NUS. It hopes to be an approachable Union that can be useful to NUS students during their time in University. Every full-time undergraduate at NUS is a Union (NUSSU) member by default and everyone is entitled to voice their opinions about any university-related matters, especially in situations where they find that their welfare is being compromised. The avenue for them to do this is through NUSSU feedback channels that are readily available and accessible on-campus, as well as online. Undergraduates can also choose to approach members of the NUSSU Council directly in person – All representatives are prepared to listen and work to improve the lives of students on campus. Often, NUSSU works directly with the University administration, which encompasses mainly the Board of Undergraduate Studies, the University Dining Committee, the Campus Sustainability Committee, Office of Student Affairs, Office of Estate & Development, Office of Corporate Relations, Office of Alumni Relations, Office of Safety, Health & Environment, NUS Libraries and many other offices to solve certain issues with regards to students’ welfare. In a nutshell, NUSSU strives to amplify the voices of the students and at the same time act as a bridge between the students and the university administration to promote students’ interest and welfare in NUS.",
  };

  return (
    <div className={styles.aboutUs}>
      <Navbar />
      <div className={styles.body}>
        <p className={styles.header}>
          <span className={styles.odd}>About </span>
          <span className={styles.even}>Us</span>
        </p>
        <div className={styles.container}>
          <div className={styles.left}>
            <img
              className={styles.photo}
              src={photo}
              alt="NUSSU Group Photo"
            ></img>
            <p className={styles.subheader}>
              <span className={styles.odd}>Our </span>
              <span className={styles.even}>Vision</span>
            </p>
            <p className={styles.vision}>{mock.vision}</p>
            <p className={styles.subheader}>
              <span className={styles.odd}>Our </span>
              <span className={styles.even}>Mission</span>
            </p>
            <p className={styles.mission}>{mock.mission}</p>
          </div>
          <div className={styles.right}>
            <p>{mock.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
