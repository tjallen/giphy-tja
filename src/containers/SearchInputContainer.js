import { connect } from 'react-redux';
import SearchInput from './../components/SearchInput';
import {
  searchSubmit,
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
    searchSubmit: (query) => {
      dispatch(searchSubmit(query))
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
