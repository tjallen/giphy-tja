import { connect } from 'react-redux';
import SearchInput from './../components/SearchInput';
import {
  searchGifs,
  gifSearchClear,
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
    gifSearchClear: () => {
      dispatch(gifSearchClear())
    },
  }
};

const SearchInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);

export default SearchInputContainer;
