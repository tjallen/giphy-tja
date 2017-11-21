import React, { Component } from 'react';
import './App.css';
import SearchInput from './SearchInput';
import Modal from './Modal';
import ResultsContainer from './../containers/ResultsContainer';

class App extends Component {
  componentDidMount() {
    this.props.searchGifs('maru')
  }
  render() {
    const {
      modalContents,
      onModalClose,
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
        <ResultsContainer />
      </div>
    );
  }
}

export default App;
