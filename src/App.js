import React, { Component } from 'react';
import './App.css';
import keys from './keys.json';

class App extends Component {
  componentDidMount() {
    const query = 'placeholder';
    const request = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${keys.giphy}`;
    fetch(request)
      .then(res => res.json())
      .then(results => console.log(results.data))
      .then(results => this.setState({
        results
      }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcomes</h1>
        </header>
      </div>
    );
  }
}

export default App;
