import './App.css';
import {Header, Clock, Weather, NewsFeed, SL, Tweets} from './components'

function App() {
  return (
    <div className="App">
     <Header/>
     <Clock/>
     <Weather/>
     <NewsFeed/>
     <SL/>
     <Tweets/>

    </div>
  );
}

export default App;
