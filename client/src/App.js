import './App.css';
import ItemSmall from './components/ItemSmall';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemSmall title="Bocchi" price="123" src="https://pbs.twimg.com/media/E9Tnm67VgAgqUS4?format=jpg&name=4096x4096"/>
        <ItemSmall title="Ryo" price="202123123" src="https://64.media.tumblr.com/ed27452689a63a13273c957e261fde10/bbfeb994b3d02db0-51/s1280x1920/368cf5fe059f6f770240bf186a288adeb37921b8.jpg"/>
        <ItemSmall title="Kita" price="100000" src="https://i0.wp.com/akibatan.com/wp-content/uploads/2022/02/kaiju-no8-jojolion-oshi-no-ko-and-more-nominated-for-26th-tezuka-osamu-manga-award-03.jpg?ssl=1"/>
    </div>
  );
}

export default App;
