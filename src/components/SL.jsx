import styles from "../styles/sl.module.css";
import {useEffect, useState} from 'react'
import * as API from "../api/API.js"
import SlDepartures from "./SlDepartures";

const SL = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await API.getDepartures();
      setData(response.data)
    }
    fetchData();

    const intervalID = setInterval(fetchData, 300000)
    return () => clearInterval(intervalID)
  }, []);

  return (
    <div className={`${styles.main} main`}>
    <h2 className={styles.header}>Kommande avgångar från Liljeholmen</h2>

      {data && <SlDepartures list={data} />}

      </div>
      );
    };

    export default SL;
