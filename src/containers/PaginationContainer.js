import { connect } from 'react-redux';
import {
  searchGifs,
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

const mapDispatchToProps = dispatch => {
  return {
    searchGifs: (query, offset, limit) => {
      dispatch(searchGifs(query, offset, limit))
    }, 
  }
}

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);

export default PaginationContainer;


