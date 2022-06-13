import styles from "../styles/sl.module.css";
import { useEffect, useState } from "react";
import SlDepartures from "./SlDepartures";

const SL = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("sl.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className={`${styles.main} main`}>
      {data && <SlDepartures list={data} />}
    </div>
  );
};

export default SL;
