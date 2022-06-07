import './App.css';
import styles from './styles/app.module.css'
import {Header, Weather, NewsFeed, SL, Tweets} from './components'

function App() {
  return (
    <div className={styles.app}>
     <Header/>
     <div className={styles.flex}>
     <SL/>
      <div >
     <Weather/>
        <div className={styles.flex}>
     <NewsFeed/>
     <Tweets/>
     </div>
     </div>
     </div>
     </div>
  );
}

export default App;
