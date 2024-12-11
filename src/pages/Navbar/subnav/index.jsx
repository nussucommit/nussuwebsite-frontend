import Dropdown from "./dropdown";
import styles from "./subnav.module.css";

const Subnav = ({ items }) => {
  return (
    <p className={styles.container}>
      {items.subNav ? (
        <>
          <div type="button" className={styles.mainNav}>
            {items.title == 'SERVICES'
              ? <div className={styles.navitem}>{items.title}</div>
              : <a className={styles.navitem} href={items.path}>{items.title}</a>}
          </div>
          <Dropdown submenus={items.subNav} className={styles.dropdown} />
        </>
      ) : (
        <a className={styles.navitem} href={items.path}>
          {items.title}
        </a>
      )}
    </p>
  );
};

export default Subnav;
