import { useEffect, useState } from "react";
import styles from "../styles/weather.module.css";
import * as API from "../api/API.js"


const Weather = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {

      const response = await API.getWeather();
      setData(response)
    }
    fetchData();
  }, []);

  return (
    <div className={`${styles.main} main`}>
      <h1 className={styles.header}>This is Weather</h1>
    </div>
  );
};

export default Weather;
