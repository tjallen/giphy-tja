import React, { Component } from 'react';
import './App.css';
import SearchInput from './SearchInput';
import Gif from './Gif';
import ResultsMeta from './ResultsMeta';
import Modal from './Modal';

class Search extends Component {
  componentDidMount() {
    this.props.searchGifs('maru')
  }
  render() {
    const {
      isModalShowing,
      results,
      pagination,
      onGifClick,
      onModalClose,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcomes</h1>
          <SearchInput searchGifs={this.props.searchGifs} />
        </header>
        {isModalShowing &&
          <Modal onModalClose={onModalClose} />
        }
        {pagination &&
          <ResultsMeta pagination={pagination} />
        }
        {results.map((item) =>
          <Gif
            id={item.id}
            onGifClick={onGifClick}
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
