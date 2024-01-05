import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./home.module.css";
import SimpleImageSlider from "react-simple-image-slider";
import { useState, useEffect } from "react";
import { useFetchData } from "../../common/useFetchData";
import { Routes } from "../../constants/routes";
import logo from "../../assets/nussu_logo.png";
import {
  extractAnnouncement,
  extractBannerImages,
  extractEventsImages,
  extractInstagramUrls,
} from "./helper";
import { InstagramEmbed } from "react-social-media-embed";

const Home = () => {
  const url = Routes.backendRoot + Routes.home;
  const [isLoading, content] = useFetchData(url);
  const announcement = extractAnnouncement(content);
  const bannerImages = extractBannerImages(content);
  const eventsImages = extractEventsImages(content);
  const instagramUrls = extractInstagramUrls(content);
  let [width, setWidth] = useState(0.8*window.innerWidth);
  let [height, setHeight] = useState(0.4*window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(0.8*window.innerWidth);
      setHeight(0.4*window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className={styles.Home}>
      <Navbar />
      <div className={styles.announcement}>{announcement}</div>
      <div className={styles.header}>
        <p className={styles.quote}>
          We <span style={{ color: "#0177CC", fontWeight: "bold" }}>work</span>{" "}
          for students!
        </p>
        <img className={styles.image} src={logo} alt="NUSSU logo"></img>
      </div>
      <div className={styles.banner}>
        {isLoading
          ? <div></div>
          : <SimpleImageSlider
              className={styles.slider}
              width={width}
              height={height}
              images={bannerImages}
              showNavs={true}
              autoPlay={true}
            />
        }
      </div>
      <div className={styles.events}>
        <p className={styles.eventsheader}>Events</p>
        {isLoading
          ? <div></div>
          : <SimpleImageSlider
              className={styles.slider}
              width={width}
              height={height}
              images={eventsImages}
              showNavs={true}
              autoPlay={true}
            />
        }
      </div>
      <div className={styles.socialheader}>
        <span className={styles.odd}>Follow </span>
        <span className={styles.even}>Us</span>
      </div>
      <div className={styles.container}>
        {instagramUrls.map((url, index) => (
          <InstagramEmbed url={url} width={350} height={"50vh"} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
