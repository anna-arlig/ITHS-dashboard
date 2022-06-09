import React from "react";
import { useEffect, useState } from "react";
const SlDepartures = ({ list }) => {
  const [times, setTimes] = useState(null);

  const getTimes = () => {
    const today = new Date();
    const goTime =
      today.getHours() +
      ":" +
      (today.getMinutes() + 10) +
      ":" +
      today.getSeconds();
    const relevantTimes = list.Departure.filter((ti) => ti.time > goTime);
    setTimes(relevantTimes);
  };

  useEffect(() => {
    getTimes();

    const intervalId = setInterval(() => {
      getTimes();
    }, 60000);

    return () => clearInterval(intervalId);
  }, [list]);

  return <div>{times && times.map((time) => <p>{time.time}</p>)}</div>;
};

export default SlDepartures;
