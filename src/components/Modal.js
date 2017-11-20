import React, { Component } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  background: rgba(36, 36, 36, 0.75);
  height: 100%;
  width: 100%;
  z-index: 99;
`;

const ModalInner = styled.div`
  background: #fff;
  position: relative;
  z-index: 100;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 4px;
  padding: 10px;
`

const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  z-index: 101;
  cursor: pointer;
`

export default class Modal extends Component {
  constructor() {
    super();
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }
  handleCloseClick() {
    this.props.onModalClose();
  }
  render() {
    const { src, title, username, uploadDate } = this.props.contents;
    return (
      <ModalWrapper>
        <ModalInner>
          <a
          onClick={() => this.handleCloseClick()}
          >
            <CloseButton>X</CloseButton>
          </a>
          <h3>{title}</h3>
          <img src={src} alt={title} />
          <p>{`Uploaded by ${username || 'anon'} on ${uploadDate}`}</p>
        </ModalInner>
      </ModalWrapper>
    )
  }
}