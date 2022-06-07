import "./App.css";
import styles from "./styles/app.module.css";
import { Header, Weather, NewsFeed, SL, Tweets } from "./components";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={`${styles.slWeathercontainer}`}>
        <SL />

        <div className={`${styles.weatherNewscontainer}`}>
          <div className={styles.weatherWrapper}>
            <Weather />
          </div>

          <div className={`${styles.newsTweetscontainer}`}>
            <NewsFeed />
            <Tweets />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
