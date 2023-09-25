
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import * as Costants from './componenti/Constante';
import Home from './componenti/Home';
import Parchi from './componenti/Parchi';
import AreeMarine from './componenti/AreeMarine';
import Regione from './componenti/Regione';
import DettaglioAreeMarine from './componenti/DettaglioAreeMarine';
import DettaglioParchi from './componenti/DettaglioParchi';

import Header from './componenti/Header';
import Footer from './componenti/Footer';


function App() {
  return (
    <>
      <div className="App">
        <Header />


        <BrowserRouter>


          <Switch>
            <Route exact path={Costants.HOME} component={() => <Home />} />
            <Route exact path={Costants.PARCHI} component={() => <Parchi />} />
            <Route exact path={Costants.AREE_MARINE} component={() => <AreeMarine />} />
            <Route exact path={Costants.REGIONE} component={() => <Regione />} />
            <Route exact path={Costants.DETTAGLIO_PARCHI} component={() => <DettaglioParchi />} />
            <Route exact path={Costants.DETTAGLIO_AREE_MARINE} component={() => <DettaglioAreeMarine />} />



            <Route path={'/*'} component={() => <p>404 pagina non trovata</p>} />
          </Switch>




        </BrowserRouter>


        <Footer />
      </div>
    </>


  );
}

export default App;
