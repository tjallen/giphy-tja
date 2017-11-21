import { connect } from 'react-redux';
import {
  gifModalShow,
} from './../actions';
import Results from './../components/Results';

const mapStateToProps = (state) => {
  const {
    isFetching,
    results,
    pagination,
    query,
  } = state.search;
  return {
    isFetching,
    results,
    pagination,
    query,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGifClick: (gif) => {
      dispatch(gifModalShow(gif))
    },
  }
}

const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results);

export default ResultsContainer;

