import styles from "../styles/header.module.css";
import Clock from "./Clock";
const img = require("../assets/iths.png")


const Header = (props) => {
  return (
    <div className={`${styles.main}`}>

      <img src={img} alt="logo"></img>
      <Clock />
      <h1 className={styles.header}>You are {props.onlinestate ? "online" : "offline"}</h1>

    </div>
  );
};

export default Header;

