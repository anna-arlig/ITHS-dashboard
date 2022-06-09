import styles from "../styles/sl.module.css";
import {useEffect, useState, useCallback} from 'react'
import * as API from "../api/API.js"

const SL = () => {
  const [data, setData] = useState(null)
  // const [filteredData, setFilteredData] = useState(null)


  // const doWork = useCallback(() => {
  //   console.log(data)
  //   if(!data){ return }
  //   const timeNow = Date.now()
  //   const newData = data.Departure.filter(dep => new Date() > timeNow)
  //   console.log(newData)
  // }, [data])

  useEffect(() => {
    async function fetchData() {
      const response = await API.getDepartures();
      setData(response.data)
    }
    fetchData();

    const intervalID = setInterval(fetchData, 600000)
    return () => clearInterval(intervalID)
  }, []);



  return (
    <div className={`${styles.main} main`}>
    <h2 className={styles.header}>Kommande avgångar från Liljeholmen</h2>
    <div>
    {data && data.Departure.map(dep => (
      <p key={dep.JourneyDetailRef + Math.random()}>{dep.name} {dep.direction} {dep.time}</p>

      )
      )}
      </div>
      </div>
      );
    };

    export default SL;
