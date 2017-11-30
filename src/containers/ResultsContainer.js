import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  gifModalShow,
} from './../actions';
import Results from './../components/Results';

class ResultsContainer extends Component {
  render() {
    const { isFetching } = this.props;
    if (isFetching) return (
      <p>Loading...</p>
    );
    return (
      <Results {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  const {
    isFetching,
    results,
    pagination,
    query,
  } = state.search;
  return {
    isFetching,
    results,
    pagination,
    query,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGifClick: (gif) => {
      dispatch(gifModalShow(gif))
    },
  }
}

ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsContainer);

export default ResultsContainer;

