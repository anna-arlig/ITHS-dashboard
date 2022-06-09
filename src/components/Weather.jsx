import { useState, useEffect } from "react";
import styles from "../styles/weather.module.css";
import * as API from "../api/API.js"

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

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const response = await API.getWeather();
      const listByDay = response.data.list.filter((day) =>
      day.dt_txt.endsWith("15:00:00")
    );
    setList(listByDay);
    setLoading(false);
    }
    fetchData();


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
