import { connect } from 'react-redux';
import { searchGifs } from './../actions';
import Search from './../components/Search';

const mapStateToProps = (state) => {
  const { isFetching, searchResults } = state;
  return {
    isFetching,
    searchResults,
  }
}

const SearchContainer = connect(
  mapStateToProps,
)(Search);

export default SearchContainer;
