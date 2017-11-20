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

const mapDispatchToProps = dispatch => {
  return {
    searchGifs: query => {
       dispatch(searchGifs(query))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default SearchContainer;
