import React, { Component } from 'react';
import SearchInputContainer from './../containers/SearchInputContainer';
import ModalContainer from './../containers/ModalContainer';
import ResultsContainer from './../containers/ResultsContainer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <SearchInputContainer />
        <ModalContainer />
        <ResultsContainer />
      </AppWrapper>
    );
  }
}

export default App;
