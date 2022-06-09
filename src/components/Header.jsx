import styles from "../styles/header.module.css";
import Clock from "./Clock";

const Header = ({ onlineState }) => {
  return (
    <div className={`${styles.main}`}>
      <h1 className={styles.header}>
        {onlineState ? "You are online" : "You are offline"}
      </h1>
      <Clock />
    </div>
  );
};

export default Header;
