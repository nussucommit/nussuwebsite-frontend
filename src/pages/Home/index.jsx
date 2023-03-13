import Navbar from "../Navbar";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Navbar />
      <p>Home Page</p>
    </div>
  );
};

export default Home;
