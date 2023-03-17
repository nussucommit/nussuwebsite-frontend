import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Navbar />
      <p>Home Page</p>
      <Footer />
    </div>
  );
};

export default Home;
