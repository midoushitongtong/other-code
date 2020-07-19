import React from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends React.PureComponent {
  test = () => {};

  public render() {
    return <div>123</div>;
  }
}

function App() {
  let a = 1;

  return (
    <div className="App">
      <Text />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          E dit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
