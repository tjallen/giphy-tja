import React, { Component } from 'react';
import './App.css';
import SearchInput from './SearchInput';
import Gif from './Gif';

class Search extends Component {
  render() {
    const { results } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcomes</h1>
          <SearchInput searchGifs={this.props.searchGifs} />
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
