import styles from "./freshmen.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Freshmen = () => {
  return (
    <div className={styles.Freshmen}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.odd}>Freshmen </span>
          <span className={styles.even}>Orientation </span>
          <span className={styles.odd}>Programme</span>
        </div>
        <div className={styles.introduction}>
          <p className={styles.subheader}>
            What is NUS Freshmen Orientation Programme (FOP)?
          </p>
          <p className={styles.intro}>
            As they begin their NUS journey, new NUS undergraduate students
            (freshmen) are thrust into a colourful campus life bursting with a
            vibrant student culture and an exciting range of Freshmen
            Orientation Programmes (FOPs) aimed to ease them into this new
            university chapter of their life. These FOPs are organised by
            various NUS groups that comprise of NUS Students’ Union (NUSSU),
            NUSSU Faculty Clubs, NUSSU Non-Faculty Clubs, Halls and Residential
            Colleges, Academic Societies (for various Faculty Departments) and
            Student Interest Groups.
          </p>
        </div>
        <div className={styles.fop}>
          <p className={styles.subheader}>FOPs in NUS</p>
          <p className={styles.fopdesc}>
            Across the various Faculties, Halls, Residential Colleges, Academic
            Societies and Interest Groups, there are a total of 70 camps
            stretching across the months of June, July and Early August. The
            camps are usually categorised into the following categories :
          </p>
          <div className={styles.programsection}>
            <div className={styles.program}>
              <img className={styles.image} />
              <p className={styles.programtitle}>Exposure/Social Camps</p>
              <p className={styles.programdesc}>
                which are usually more focused on forging friendships and
                creating a more vibrant Student Life Experience and are not
                limited to Faculties and Residences but Interest Groups as well.
                These camps usually happen from early June till mid July
              </p>
            </div>
            <div className={styles.program}>
              <img className={styles.image} />
              <p className={styles.programtitle}>Exposure/Social Camps</p>
              <p className={styles.programdesc}>
                which are usually more focused on forging friendships and
                creating a more vibrant Student Life Experience and are not
                limited to Faculties and Residences but Interest Groups as well.
                These camps usually happen from early June till mid July
              </p>
            </div>
            <div className={styles.program}>
              <img className={styles.image} />
              <p className={styles.programtitle}>Exposure/Social Camps</p>
              <p className={styles.programdesc}>
                which are usually more focused on forging friendships and
                creating a more vibrant Student Life Experience and are not
                limited to Faculties and Residences but Interest Groups as well.
                These camps usually happen from early June till mid July
              </p>
            </div>
          </div>
          <p className={styles.fopdesc}>
            Here is a complete list of all FOPs for 2023: NUS Orientation Finder
          </p>
        </div>
        <div className={styles.faq}>
          <p className={styles.subheader}>FAQs</p>
          <p className={styles.question}>When are NUS FOPS held?</p>
          <p className={styles.answer}>
            Most NUS FOPs are held between June and Mid-August each year. They
            are usually based on campus grounds, but some activities may be
            carried out outside.
          </p>
          <p className={styles.question}>
            Where can Information about the various NUS FOPs be obtained?
          </p>
          <p className={styles.answer}>
            Every year during NUS Open Day Student Village, major NUSSU entities
            - i.e. NUSSU Executive Committee (EXCO), Faculty Clubs, Non-faculty
            clubs, Halls and Residences - will manning booths to share about
            their various initiatives and projects, in particular, orientation
            projects and camps for incoming students/freshmen. Attending NUS
            Open Day is a good opportunity for prospective NUS students to learn
            about these NUSSU FOPs as they can engage in a more personal and
            meaningful conversation with returning NUS students to get a
            first-hand account of their own freshmen experience and learn about
            NUS student life. General information about the various NUSSU FOPs
            organised by the major union entities can be obtained from the
            Union’s website and its NEXUS Facebook page
            (https://www.facebook.com/nus.students.union.nexus) which will be
            regularly updated. For more detailed information about each NUSSU
            FOP or information about other NUS FOPs, students are advised to
            check the respective FOP/FOP organising committee/club’s website or
            Facebook pages for updates
          </p>
          <p className={styles.question}>
            Is it compulsory to attend NUS Orientation Camps?
          </p>
          <p className={styles.answer}>
            It is not compulsory to attend NUS orientation camps, but incoming
            freshmen are strongly encouraged to do so as these camps grant
            freshmen a better opportunity to get to know their batch mates and
            seniors, who can provide valuable advice and insights on NUS student
            life and academics.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Freshmen;
