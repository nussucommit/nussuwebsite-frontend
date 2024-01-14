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
  const bannerLimit = 480;
  const embedLimit = 360;
  const url = Routes.backendRoot + Routes.home;
  const [isLoading, content] = useFetchData(url);
  const announcement = extractAnnouncement(content);
  const bannerImages = extractBannerImages(content);
  const eventsImages = extractEventsImages(content);
  const instagramUrls = extractInstagramUrls(content);
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let [bannerWidth, setBannerWidth] = useState(window.innerWidth < bannerLimit ? 0.9*window.innerWidth : 0.8*window.innerWidth);
  let [bannerHeight, setBannerHeight] = useState(window.innerWidth < bannerLimit ? 0.45*window.innerWidth : 0.4*window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth < bannerLimit) {
        setBannerWidth(0.9*window.innerWidth);
        setBannerHeight(0.45*window.innerWidth);
      } else {
        setBannerWidth(0.8*window.innerWidth);
        setBannerHeight(0.4*window.innerWidth);
      }
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
              width={bannerWidth}
              height={bannerHeight}
              images={bannerImages}
              showNavs={true}
              autoPlay={true}
            />
        }
      </div>
      <div className={styles.events}>
        <p className={styles.eventsheader}>EVENTS</p>
        {isLoading
          ? <div></div>
          : <SimpleImageSlider
              className={styles.slider}
              width={bannerWidth}
              height={bannerHeight}
              images={eventsImages}
              showNavs={true}
              autoPlay={true}
            />
        }
      </div>
      <div className={styles.socialheader}>
        <span className={styles.odd}>Follow</span>
        <span className="space"></span>
        <span className={styles.even}>Us</span>
      </div>
      <div className={styles.container}>
        {windowWidth < embedLimit
          ? instagramUrls.map((url, index) => (
              <InstagramEmbed url={url} width="100%"/>
            ))
          : instagramUrls.map((url, index) => (
              <InstagramEmbed url={url} width={350} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
