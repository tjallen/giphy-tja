import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  componentDidMount() {
    this.props.searchGifs('foo');
  }
  render() {
    const { results } = this.props;
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
