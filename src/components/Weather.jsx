import { useState, useEffect } from "react";
import styles from "../styles/weather.module.css";
import * as API from "../api/API.js"

const WeatherCard = ({ data }) => {
  const { main, weather, day } = data;
  const { temp } = main;
  const { icon } = weather[0];


  return (
    <>
      <div className={styles.weather_card}>
        <div className="image">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </div>
        <span className={styles.weather}>{weather[0].main}</span>
        <span className={styles.tempt}>{day}</span>
        <span className={styles.tempt}>{Math.ceil(temp)}°</span>
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

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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
    const newList = listByDay.map((list) => {
      const d = new Date(list.dt_txt);
      return { ...list, day: days[d.getDay()] };
    });
    setList(newList);

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
