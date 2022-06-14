import styles from "../styles/header.module.css";
import Clock from "./Clock";
import StatusBtn from "./StatusBtn";

const Header = (props) => {
  return (
    <div className={`${styles.main}`}>
      <h1 className={styles.header}>You are {props.onlinestate ? "online" : "offline"}</h1>
      <Clock />
      <div className={styles.switchWrapper}>
        <StatusBtn status={props.onlinestate} />
      </div>
    </div>
  );
};

export default Header;

