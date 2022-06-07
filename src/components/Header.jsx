import styles from "../styles/header.module.css";
import Clock from "./Clock";

const Header = () => {
  return (
    <div className={`${styles.main}`}>
      <h1 className={styles.header}>This is Header</h1>
      <Clock />
    </div>
  );
};

export default Header;
