import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Привет, {props.name}</h1>
        </div>
      </header>
    </div>
  );
}



export default App;
