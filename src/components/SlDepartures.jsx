import React from "react";
// import styles from "../styles/sl.module.css";
import { useEffect, useState, useCallback } from "react";
const SlDepartures = ({ list }) => {
  const [times, setTimes] = useState(null);


  const getTimes = useCallback(
    () => {
      const tenMinutes = 10 * 60 * 1000;
      const timeNow = Date.now() + tenMinutes;
      const today = new Date(timeNow);
      const hour =
        today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
      const minute =
        today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();

      const goTime = hour + ":" + minute + ":00";
      const relevantTimes = list.Departure.filter((ti) => ti.time > goTime);
      setTimes(relevantTimes);
    }, [list.Departure])

  useEffect(() => {
    getTimes();

    const intervalId = setInterval(() => {
      getTimes();
    }, 60000);

    return () => clearInterval(intervalId);
  }, [list, getTimes]);

  return <div>
  {times &&
    times.map((time) => {

        const dir = time.direction.split('(')[0]
        const name = time.name.substring(12)

        return(
      <div>
        {time.time} {name} {dir}
      </div>
    )})}
</div>
};

export default SlDepartures;