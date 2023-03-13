import styles from "./subnav.module.css";

const Dropdown = ({ submenus }) => {
  return (
    <div className={styles.dropdowncontent}>
      {submenus.map((submenu, index) => (
        <div key={index} className={styles.dropitems}>
          <a href={submenu.path}>{submenu.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
