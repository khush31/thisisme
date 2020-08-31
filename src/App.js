import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Personal from './pages/Personal';
import Programming from './pages/Programming';
import Technologies from './pages/Technologies';
import Education from './pages/Education';
import Job from './pages/Job';
import Certificates from './pages/Certificates';
import Social from './pages/Social';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/s/personal" component={ Personal }/>
            <Route exact path="/s/programming" component={ Programming }/>
            <Route exact path="/s/technologies" component={ Technologies }/>
            <Route exact path="/s/education" component={ Education }/>
            <Route exact path="/s/job" component={ Job }/>
            <Route exact path="/s/certificates" component={ Certificates }/>
            <Route exact path="/s/social" component={ Social }/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
