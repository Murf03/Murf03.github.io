import './App.css';
import Button from './composants/button';
import Header from './composants/header';
import HomeDesc from './composants/homeDesc';
import Projets from './composants/projets';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeDesc />
      <Projets />
      <div id='cv' className='btns'>
        <Button id={0} />
        <Button id={1} />
      </div>

    </div>
  );
}

export default App;
