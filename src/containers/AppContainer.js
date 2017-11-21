import { connect } from 'react-redux';
import {
  gifModalHide,
} from './../actions';
import App from './../components/App';

const mapStateToProps = (state) => {
  const { modalContents } = state;
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
    modalContents,
    query,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onModalClose: (id) => {
      dispatch(gifModalHide(id))
    },
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
