import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  changePage,
} from './../actions';
import Pagination from './../components/Pagination';

const mapStateToProps = (state) => {
  const {
    isFetching,
    results,
    resultsPerPage,
    pagination,
    query,
  } = state.search;
  return {
    isFetching,
    results,
    resultsPerPage,
    pagination,
    query,
  }
}

class PaginationContainer extends Component {
  render() {
    const { pagination } = this.props;
    if (pagination !== null) {
      return (
        <Pagination {...this.props} />
      );
    }
    return null;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changePage: (query, offset, limit) => {
      dispatch(changePage(query, offset, limit))
    }, 
  }
}

PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaginationContainer);

export default PaginationContainer;


