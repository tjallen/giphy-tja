import React, { Component } from 'react';
import './App.css';
import keys from '../keys.json';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    }
  }
  componentDidMount() {
    const query = 'placeholder';
    const request = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${keys.giphy}`;
    fetch(request)
      .then(res => res.json())
      .then(res => this.setState({
        results: res.data,
      }));
  }
  render() {
    const { results } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcomes</h1>
        </header>
        {results.map((item, index) =>
          <li key={index}>{item.id}</li>
        )}
      </div>
    );
  }
}

export default Search;
