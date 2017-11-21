import { connect } from 'react-redux';
import Modal from './../components/Modal';
import {
  gifModalHide,
} from './../actions';

const mapStateToProps = (state) => {
  const {
    modalContents,
  } = state;
  return {
    contents: modalContents,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onModalClose: () => {
      dispatch(gifModalHide())
    },
  }
};

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);

export default ModalContainer;

