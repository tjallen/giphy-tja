import React, { Component } from 'react';

export default class Modal extends Component {
  constructor() {
    super();
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }
  handleCloseClick(id) {
    this.props.onModalClose(id);
  }
  render() {
    const { id } = this.props;
    return (
      <div>Modal<button onClick={() => this.handleCloseClick(id)}>Close</button></div>
    )
  }
}