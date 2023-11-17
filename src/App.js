import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import funFactOne from './components/funFactOne'
import funFactTwo from './components/funFactTwo'
import funFactThree from './components/funFactThree'
import Home from './components/Home'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home />
      <Switch>
        <Route path='/funFactOne' component={funFactOne} />
        <Route path='/funFactTwo' component={funFactTwo} />
        <Route path='/funFactThree' component={funFactThree} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
