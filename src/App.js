import './App.css';
import Header from './composants/header';
import HomeDesc from './composants/homeDesc';
import Infos from './composants/infos';
import Projets from './composants/projets';
import Footer from './composants/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeDesc />
      <Projets />
      <Infos />
      <Footer />
    </div>
  );
}

export default App;
