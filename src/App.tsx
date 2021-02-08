import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lifeEvents } from './life-events';
import { TimeLine } from './components/TimeLine/TimeLine';
import { Header } from './components/Header/Header';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <TimeLine lifeEvents={[...lifeEvents].reverse()} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
