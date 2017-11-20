import { connect } from 'react-redux';
import {
  searchGifs,
  gifModalShow,
  gifModalHide,
} from './../actions';
import Search from './../components/Search';

const mapStateToProps = (state) => {
  const { modalContents } = state;
  const {
    isFetching,
    results,
    pagination,
  } = state.search;
  return {
    isFetching,
    results,
    pagination,
    modalContents,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchGifs: (query) => {
      dispatch(searchGifs(query))
    },
    onGifClick: (gif) => {
      dispatch(gifModalShow(gif))
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
