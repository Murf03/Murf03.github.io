import './App.css';
import Header from './composants/header';
import HomeDesc from './composants/homeDesc';
import Infos from './composants/infos';
import Projets from './composants/projets';
import Footer from './composants/footer';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const navIsOpen = useSelector((state) => state.nav.open);

  function closeNav() {
    if (navIsOpen) {
      dispatch({
        type: "nav/closeNav",
        payload: "no-need"
      });
    }
  }

  return (
    <div className="App" onClick={() => closeNav()}>
      <Header />
      <HomeDesc />
      <Projets />
      <Infos />
      <Footer />
    </div>
  );
}

export default App;
