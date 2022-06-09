// https://codesandbox.io/s/react-weather-widget-co08m?file=/src/hooks/useFetch.js:537-612
import { useState, useEffect } from "react";
import styles from "../styles/weather.module.css";

const WeatherCard = ({ data }) => {
  const { main, weather } = data;
  const { temp, temp_min, temp_max } = main;
  const { icon } = weather[0];

  return (
    <>
      <div className={styles.weather_card}>
        <div className="image">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </div>
        <span className={styles.tempt}>{Math.ceil(temp)}°</span>
        <span className={styles.weather}>{weather[0].main}</span>
        <span className={styles.max_tempt}>{Math.ceil(temp_max)}°</span>
        <span className={styles.max_tempt}>{Math.ceil(temp_min)}°</span>
      </div>
    </>
  );
};

const ForecastCards = ({ list }) => {
  return (
    <div className={styles.weather_row}>
      <div className={styles.weather_grid}>
        {list &&
          list.map((item, index) => <WeatherCard key={index} data={item} />)}
      </div>
    </div>
  );
};

const Weather = () => {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);

  const getForcast = () => {
    setLoading(true);
    // fetch(
    //   "https://api.openweathermap.org/data/2.5/forecast?q=Stokholm,Sweden&units=metric&appid=3566c23c7d74f04fa89edca0dffdeb2f"
    // )
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        const listByDay = data.list.filter((day) =>
          day.dt_txt.endsWith("15:00:00")
        );
        setList(listByDay);
        setLoading(false);
      });
  };
  useEffect(() => {
    getForcast();
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.loadWrapper}>Loading...</div>
      ) : (
        <>
          <ForecastCards list={list} />
        </>
      )}
    </>
  );
};

export default Weather;
