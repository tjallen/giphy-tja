import React, { Component } from 'react';
import './App.css';
import Modal from './Modal';
import SearchInputContainer from './../containers/SearchInputContainer';
import ResultsContainer from './../containers/ResultsContainer';

class App extends Component {

  render() {
    const {
      modalContents,
      onModalClose,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcomes</h1>
          <SearchInputContainer />
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
