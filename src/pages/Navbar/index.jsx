import styles from "./navbar.module.css";
import { navs } from "../../constants/navs.ts";
import Subnav from "./subnav";
import logo from "../../assets/nussu_logo.png";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.image} src={logo} alt="NUSSU logo"></img>
      <ul className={styles.navbar}>
        {navs.map((menu, index) => {
          return <Subnav items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
