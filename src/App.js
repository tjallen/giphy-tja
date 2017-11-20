import React, { Component } from 'react';
import './App.css';
import keys from './keys.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcomes</h1>
        </header>
        <p>{keys.giphy || 'no keys'}</p>
      </div>
    );
  }
}

export default App;
