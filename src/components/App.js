import React, { Component } from 'react';
import './App.css';
import SearchInput from './SearchInput';
import Gif from './Gif';
import ResultsMeta from './ResultsMeta';
import Modal from './Modal';

class App extends Component {
  componentDidMount() {
    this.props.searchGifs('maru')
  }
  render() {
    const {
      modalContents,
      results,
      pagination,
      onGifClick,
      onModalClose,
      query,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcomes</h1>
          <SearchInput searchGifs={this.props.searchGifs} />
        </header>
        {modalContents &&
          <Modal
            contents={modalContents}
            onModalClose={onModalClose}
          />
        }
        {pagination &&
          <ResultsMeta pagination={pagination} query={query} />
        }
        {results.map((item) =>
          <Gif
            id={item.id}
            onGifClick={onGifClick}
            key={item.id}
            src={item.images.fixed_height.url}
            title={item.title}
            uploader={item.username}
            uploadDate={item.import_datetime}
          />
        )}
      </div>
    );
  }
}

export default App;
