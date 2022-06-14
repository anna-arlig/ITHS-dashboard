import styles from "../styles/header.module.css";
import Clock from "./Clock";


const Header = (props) => {
  return (
    <div className={`${styles.main}`}>
      <h1 className={styles.header}>You are {props.onlinestate ? "online" : "offline"}</h1>
      <Clock />
    </div>
  );
};

export default Header;

