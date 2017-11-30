import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './../components/Modal';
import {
  gifModalHide,
} from './../actions';

class ModalContainer extends Component {
  render() {
    const { contents } = this.props;
    if (contents !== null) {
      return (
        <Modal {...this.props} />
      );
    }
    return null;
  }
}

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

ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalContainer);

export default ModalContainer;

