import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { lifeEvents } from './life-events';
import { TimeLine } from './components/TimeLine/TimeLine';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import './App.scss';

const App: React.FC = () => {
  return (
    <div id='app-container' className='app'>
      <Router>
        <Header />
        <BurgerMenu pageWrapId='content-container' outerContainerId='app-container' />
        <div id='content-container' className='content-container'>
          <Switch>
            <Route exact path="/">
              <Redirect to="/about" />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cv">
              <TimeLine lifeEvents={[...lifeEvents].reverse()} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
