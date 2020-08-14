import React from 'react';
import './App.css';
import Navigation from './BottomNavigationBar'


import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Trader from './Trader';
import Guide from './Guide';
import Report from './Report'
import Gaccha from './Gaccha'
function App() {
  return (
    <body>
    <div>
      <BrowserRouter>
      <Navigation />
        <Switch>
          <Route path="/demo" component={Home} />
          <Route path="/trader" component={Trader} />
          <Route path="/guide" component={Guide} />
          <Route path="/report" component={Report} />
          <Route path="/gaccha" component={Gaccha} />
        </Switch>
      </BrowserRouter>
    </div>

    </body>
  );
}

export default App;
