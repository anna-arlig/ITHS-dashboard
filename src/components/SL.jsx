import styles from "../styles/sl.module.css";
import {useEffect, useState} from 'react'
import * as API from "../api/API.js"

const SL = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {

      const response = await API.getDepartures();
      setData(response)
    }
    fetchData();
  }, []);


  return (
    <div className={`${styles.main} main`}>
      <h1 className={styles.header}>This is SL</h1>
    </div>
  );
};

export default SL;
