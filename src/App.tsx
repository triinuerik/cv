import { lifeEvents } from './life-events';
import { TimeLine } from './components/TimeLine';
import './App.css';

const App:  React.FC = () => {
  return (
    <div className="App">
      <TimeLine lifeEvents={lifeEvents} />
    </div>
  );
}

export default App;
