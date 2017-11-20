import { connect } from 'react-redux';
import {
  searchGifs,
  gifModalShow,
} from './../actions';
import Search from './../components/Search';

const mapStateToProps = ({ search: state }) => {
  const { isFetching, results, pagination } = state;
  return {
    isFetching,
    results,
    pagination,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // searchGifs: query => {
    //    dispatch(searchGifs(query))
    // }
    searchGifs: (query) => {
      dispatch(searchGifs(query))
    },
    onGifClick: (id) => {
      dispatch(gifModalShow(id))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default SearchContainer;
