import styles from "../styles/header.module.css";
import Clock from "./Clock";
const img = require("../assets/iths.png")


const Header = (props) => {
  return (
    <div className={`${styles.main}`}>
      <div className={styles.wrapper}>
      <img src={img} alt="logo"></img>
      <Clock />
      <h1 className={styles.status}>You are {props.onlinestate ? "online" : "offline"}</h1>
      </div>

      <div className={styles.infobar}>
      <h5 className={styles.status}>You are {props.onlinestate ? "online" : "offline"}</h5>
      </div>

    </div>
  );
};

export default Header;

