import "./App.css";
import { useEffect, useState } from "react";
import styles from "./styles/app.module.css";
import { Header, Weather, NewsFeed, SL, Employee } from "./components";


function App() {
  const [onlineState, setOnlineState] = useState(true);

  useEffect(() => {
    const showOnline = () => {
      console.log("Going online");
      setOnlineState(true);
    };

    const showOffline = () => {
      console.log("Going offline");
      setOnlineState(false);
    };
    console.log("Register");
    window.addEventListener("online", showOnline);
    window.addEventListener("offline", showOffline);

    return () => {
      console.log("Cleanup");
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
        <SL />

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
