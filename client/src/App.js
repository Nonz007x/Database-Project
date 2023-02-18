import './App.css';
import ItemSmall from './components/ItemSmall';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemSmall title="Bocchi" price="123" src="https://inwfile.com/s-dx/x9e4ul.jpg"/>
        <ItemSmall title="Ryo" price="202123123" src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/09/bocchitherock_ryoyamadatrailerscreenshot.png?fit=1920%2C1080&ssl=1"/>
        <ItemSmall title="Kita" price="100000" src="https://i.ytimg.com/vi/_77ouG147UM/maxresdefault.jpg"/>
    </div>
  );
}

export default App;
