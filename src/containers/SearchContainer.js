import { connect } from 'react-redux';
import {
  searchGifs,
  gifModalShow,
  gifModalHide,
} from './../actions';
import Search from './../components/Search';

const mapStateToProps = (state) => {
  const { isModalShowing } = state;
  const {
    isFetching,
    results,
    pagination,
  } = state.search;
  return {
    isModalShowing,
    isFetching,
    results,
    pagination,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchGifs: (query) => {
      dispatch(searchGifs(query))
    },
    onGifClick: (id) => {
      dispatch(gifModalShow(id))
    },
    onModalClose: (id) => {
      dispatch(gifModalHide(id))
    },
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default SearchContainer;
