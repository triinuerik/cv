import React from 'react';
import { lifeEvents } from './life-events';
import { TimeLine } from './components/TimeLine/TimeLine';
import { Panel } from './components/Panel/Panel';
import { Header } from './components/Header/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Panel />
      <TimeLine lifeEvents={lifeEvents} />
    </div>
  );
}

export default App;
