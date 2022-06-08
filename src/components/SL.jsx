import styles from "../styles/sl.module.css";

const SL = () => {
  return (
    <div className={`${styles.main} main`}>
      <iframe
        title="Mars-weather"
        src="https://mars.nasa.gov/layout/embed/image/mslweather/"
        width="800"
        height="530"
        scrolling="no"
        frameborder="0"
      ></iframe>{" "}
    </div>
  );
};

export default SL;
