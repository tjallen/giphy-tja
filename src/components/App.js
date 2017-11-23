import React, { Component } from 'react';
import SearchInputContainer from './../containers/SearchInputContainer';
import ModalContainer from './../containers/ModalContainer';
import ResultsContainer from './../containers/ResultsContainer';
import PaginationContainer from './../containers/PaginationContainer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <SearchInputContainer />
        <ModalContainer />
        <ResultsContainer />
        <PaginationContainer />
      </AppWrapper>
    );
  }
}

export default App;
