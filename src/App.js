import "./App.css";
import { useEffect, useState } from "react";
import styles from "./styles/app.module.css";
import { Header, Weather, NewsFeed, SL, Employee } from "./components";


function App() {
  const [onlineState, setOnlineState] = useState(navigator.onLine);

  useEffect(() => {
    const showOnline = () => {
      setOnlineState(true);
    };

    const showOffline = () => {
      setOnlineState(false);
    };
    window.addEventListener("online", showOnline);
    window.addEventListener("offline", showOffline);

    return () => {
      window.removeEventListener("online", showOnline);
      window.removeEventListener("offline", showOffline);
    };
  }, []);
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header onlinestate={onlineState}/>
      </div>

      <div className={`${styles.slWeathercontainer}`}>
        <SL onlinestate={onlineState}/>

        <div className={`${styles.weatherNewscontainer}`}>
          <div className={styles.weatherWrapper}>
            <Weather />
          </div>

          <div className={`${styles.newsTweetscontainer}`}>
            <Employee />
            <NewsFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
