import React, { Component } from 'react';
import './App.css';
import Gif from './Gif';

class Search extends Component {
  componentDidMount() {
    this.props.searchGifs('cat');
  }
  render() {
    const { results } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcomes</h1>
        </header>
        {results.map((item) =>
          <Gif
            key={item.id}
            src={item.images.fixed_height.url}
            title={item.title}
          />
        )}
      </div>
    );
  }
}

export default Search;
