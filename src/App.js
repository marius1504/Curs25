import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import { WelcomeMessage } from './WelcomeMessage';
import { Stopwatch } from './Stopwatch';


function App() {
  return (
    <div className="App">
      <Counter/>
      <WelcomeMessage/>
      <Stopwatch/>
    </div>
  );
}


export default App;
