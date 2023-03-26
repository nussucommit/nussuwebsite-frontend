import { useState } from "react";
import styles from "./contact.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Post request to backend
  };

  return (
    <div className={styles.Contact}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.odd}>Contact </span>
          <span className={styles.even}> Us</span>
        </div>
        <div className={styles.map}>
          {/* Link to MAP URL in NOTION */}
          <div className={styles.mapcontent}></div>
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <span className={styles.odd}>Contact </span>
            <span className={styles.even}>Information</span>
          </div>
          <div className={styles.contactinfo}>
            <p className={styles.subheader}>Contact Information</p>
            <p>Address (NUSSU Secretariat)</p>
            <p>National University of Singapore</p>
            <p>Students' Union</p>
            <p>Yusof Ishak House Level 5, #05-01</p>
            <p>31 Lower Kent Ridge, S119078</p>
          </div>
          <div className={styles.hours}>
            <p className={styles.subheader}>Operating Hours</p>
            <p>Temporarily closed due to government restrictions</p>
          </div>
          <div className={styles.general}>
            <p className={styles.subheader}>General</p>
            <p>feedback@nussu.org.sg</p>
          </div>
          <div className={styles.collaboration}>
            <p className={styles.subheader}>Collaboration Opportunities</p>
            <p>We welcome sponsorship and partnership opportunities</p>
            <p>collaborate@nussu.org.sg</p>
          </div>
          <div className={styles.bookings}>
            <p className={styles.subheader}>
              Facility, Equipment, and Van Bookings
            </p>
            <p>For NUSSU bodies and NUS-registered Organisations only</p>
            <p>bookings@nussu.org.sg</p>
          </div>
          <div className={styles.publicity}>
            <p className={styles.subheader}>Publicity Requests</p>
            <p>For NUSSU bodies and NUS-registered Organisations only</p>
            <p>
              Click Here to Find Out More About Union Publicity Management on
              NUSSUnet (NUSnet ID Required)
            </p>
          </div>
        </div>
        <div className={styles.emailform}>
          <div className={styles.title}>
            <span className={styles.odd}>Email </span>
            <span className={styles.even}>Form</span>
          </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit} className={styles.formData}>
              <input
                className={styles.name}
                type="text"
                value={fullName}
                onChange={handleFullNameChange}
                placeholder="Full Name"
              />
              <input
                className={styles.email}
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email Address"
              />
              <textarea
                className={styles.question}
                value={question}
                onChange={handleQuestionChange}
                placeholder="Your questions here..."
              />
              <div className={styles.button}>
                <button type="submit" className={styles.submit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
