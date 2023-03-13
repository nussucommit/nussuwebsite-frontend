import Dropdown from "./dropdown";
import styles from "./subnav.module.css";

const Subnav = ({ items }) => {
  return (
    <p className={styles.container}>
      {items.subNav ? (
        <>
          <div type="button" className={styles.mainNav}>
            <a href={items.path}>{items.title}</a>
          </div>
          <Dropdown submenus={items.subNav} className={styles.dropdown} />
        </>
      ) : (
        <a href={items.path}>{items.title}</a>
      )}
    </p>
  );
};

export default Subnav;
