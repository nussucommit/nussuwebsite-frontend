import styles from "./president.module.css";
import logo from "../../../assets/nussu_logo.png";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const PresidentMessage = () => {
  return (
    <div className={styles.PresidentMessage}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.odd}>President's </span>
          <span className={styles.even}>Message</span>
        </div>
        <div className={styles.image}>
          <img className={styles.image} src={logo} alt="NUSSU logo"></img>
        </div>
        <div className={styles.message}>
          <p>24 January 2023</p>
          <p>
            Message From the 43rd Union President: 100-Day Report Dear NUS
            Community, Welcome back to campus and Happy Chinese New Year! This
            beginning like any other beginning is filled with opportunity,
            energy, and hope. I hope that you would be able to do well in the
            areas you choose to, be it in academics, CCAs, or friendships. As we
            move into the new semester, we will look back on what we have
            achieved in our first 100 days and allude you to what is to come
            over the next 14 weeks or so.THE FIRST 100 DAYS Canvas
            Transition​​​​​​​ ​​​​​​​​​​​​​​This is the first semester where all
            modules have been onboarded to Canvas. Knowing that the transition
            would certainly be difficult for some, NUSSU met with members of the
            Canvas team to discuss the state of the ongoing transition, the
            issues faced by students, and how they can be alleviated moving
            forward. CFA and CAC Transformation NUSSU has also been working
            alongside the Centre for the Arts (CFA), the NUS Students' Cultural
            Activities Club (CAC) and the Office of Student Affairs (OSA) to
            plan the transformation of the NUS Arts scene. NUSSU, being the
            representative of your voice, has been holding town halls with
            students from both CFA and CAC clubs. These sessions give us a
            better understanding of the perspectives of the current NUS Arts
            students. The valuable input we have received will be critical in
            ensuring a desirable NUS Arts scene for all. Forward SG Care Pillar
            NUSSU and NTUSU, in support of the Ministry of Social and Family
            Development, will be organising discussion sessions with students
            from institutes of higher learning to garner feedback for the
            writing of recommendations for the Singapore Parliament on the area
            of Social Mobility Moving Within Campus To improve the transport and
            infrastructure in the school, the new 3-door electric shuttle bus as
            part of the Internal Shuttle Bus (ISB) service was launched. NUSSU
            has also recommended the increase in shuttle bus frequencies,
            especially during the exam period to ensure better mobility across
            campus. Hosting our Friends from Other Countries The Global
            Relations Unit (GRU) has partnered with the Office of Global
            Relations (GRO) and hosted several overseas university delegations,
            including the Bandung Institute of Technology and BEM Universitas
            Airlangga. Furthermore, the Alumni Relations and Community
            Engagement Unit (ARCEU) has met with the Office of Alumni Relations
            (OAR) to collaborate more closely with NUS alumni. As always, there
            will be more to come from NUSSU going into the second semester.
            Below are just some of the initiatives and events that you can look
            forward to. Student Life ​​​​​​​After being battered with two years
            of strenuous COVID-19 community measures, our social interactions
            were very much limited. The NUSSU Student Life Cell (SLC) aims to
            bring back the pre-pandemic campus life this semester, a taste of
            which you may have had in the second half of last year. SLC aims to
            have more on-campus activities, many of which will happen around and
            in UTown facilities such as Rag and Flag, Student Life Fair, and
            Open Day Student Village. These events will not only increase
            student involvement but also be of a larger scale, in frequent
            collaboration with NUS student clubs. For those of you who are new
            to the NUS campus life, the events mentioned above entail the
            following.
          </p>
          <li>
            RAG Day - A series of performances by NUS student bodies as a sign
            of gratitude for the donations made by the public and the
            university’s students.{" "}
          </li>
          <li>
            Open Day Student Village: An event where faculty clubs and societies
            come together at UTown to interact with potential undergraduates,
            helping students understand what life in NUS could be like.
          </li>
          <li>
            Student Life Fair: An event to help students have a well-rounded
            campus life (an opportunity for undergraduates to check out the
            different CCAs across NUS), facilitating the process of signing up
            for events and understanding the activities that will be coming up
            throughout the year.
          </li>

          <li>
            FLAG: A tradition for student bodies to come together not only to
            raise funds for the needy but also to make visits to beneficiaries
            to establish greater causes.
          </li>
          <li>
            FOCC: An event with 90+ camps that are organized by various student
            clubs and societies to introduce freshmen to the NUS campus and its
            campus life.
          </li>
          <p>
            Apart from the list above there are a few more exciting events that
            you must look out for on your socials such as the Valentine’s Day
            Concert, Supernova and much more. NUSSU Financial Assistance NUSSU’s
            Finance Cell has been working with the NUSSU Students’ Fund to
            launch a financial assistance scheme for those who require
            additional monetary support and with the NUS Staff Club Students’
            Resilience Fund to support students in their upskilling efforts
            beyond academics. They target to launch both these initiatives by
            the end of this month. Empowering and Understanding You Better
            NUSSU’s Internal Cell is working on the NUSSU Student Leaders’ Camp,
            an opportunity for student leaders across our Union (Executive
            Committee, Constituent Clubs, and Associate Bodies) to come together
            and cross-share ideas to better the lives of NUS Students in a new
            environment. The cell is also developing NUSSU Walkabouts - an
            initiative to bring NUSSU leaders alongside our Constituent Club
            counterparts closer to the ground, aiding to get a proper sense of
            the issues faced in our students’ everyday lives. Bringing More
            Opportunities to You NUSSU’s Relations Cell has continued to develop
            the Union’s external facing image by maintaining contacts and a good
            working relationship with our stakeholders such as the community of
            international students, alumni, other Student Unions and sponsors.
            The Training and Development Unit (TDU) is looking to further
            develop the NUS exclusive professional networking platform,
            conNectUS, as well as on supporting our career fairs. The
            International Student Relations Committee (ISR) is also slated to
            kick off our flagship “My Super Sidekick” program, helping to foster
            lifelong friendships between international and local students.
            Furthermore, the NUSSU Business Committee (BIZCOM) helps us secure
            deals, benefits and sponsorships, with programs for NUStyle in the
            pipeline. Finally, the Relations Cell will also be spearheading
            efforts within the Inter-University Network (IUN), with the NUSSU
            EXCO attending this year’s University Leaders Dialogue (ULD). Your
            Welfare is Our Affair
          </p>
          <p>Yours Sincerely,</p>
          <p>
            Lee Yat Bun, PresidentNUS Students’ Union44th Executive Committee
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PresidentMessage;
