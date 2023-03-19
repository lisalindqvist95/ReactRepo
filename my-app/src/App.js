import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from './components/StafulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice!" />
      <StatefulGreeting greeting="Stateful class component!"/>
    </div>
  );
}

export default App;
