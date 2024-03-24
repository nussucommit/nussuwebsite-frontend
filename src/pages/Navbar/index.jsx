import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { navs } from "../../constants/navs.ts";
import { Routes as ROUTES } from "../../constants/routes.js"
import Subnav from "./subnav";
import logo from "../../assets/nussu_logo.png";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 900) {
        closeMenu();
      }
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  }

  const closeMenu = () => {
    setMenuOpened(false);
  }

  return (
    <nav className={styles.nav}>
      <a className={styles.home} href={ROUTES.index}> <img className={styles.image} src={logo} alt="NUSSU logo"></img></a>
      {windowWidth < 900
        ? <div className={styles.expandable}>
            {menuOpened
              ? <CloseIcon className={styles.closebutton} boxSize={13} color={"#3e3e3e"} onClick={toggleMenu}/>
              : <HamburgerIcon className={styles.menubutton} boxSize={17} color={"#3e3e3e"} onClick={toggleMenu}/>
            }
            {menuOpened && (
              <div className={styles.menu}>
                {navs.map((menu, index) => {
                  return <Subnav items={menu} key={index} />;
                })}
              </div>
            )}
          </div>
        : <ul className={styles.navbar}>
            {navs.map((menu, index) => {
              return <Subnav items={menu} key={index} />;
            })}
          </ul>
      }
    </nav>
  );
};

export default Navbar;
