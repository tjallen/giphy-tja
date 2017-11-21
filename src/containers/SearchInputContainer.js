import { connect } from 'react-redux';
import SearchInput from './../components/SearchInput';
import {
  searchGifs,
} from './../actions';

const mapStateToProps = (state) => {
  const {
    isFetching,
    query,
  } = state.search;
  return {
    isFetching,
    query,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchGifs: (query) => {
      dispatch(searchGifs(query))
    }, 
  }
};

const SearchInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);

export default SearchInputContainer;
