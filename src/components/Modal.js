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
    const { id, src, title, username, uploadDate } = this.props.contents;
    return (
      <div>
        <button onClick={() => this.handleCloseClick(id)}>Close</button>
        <h3>{title}</h3>
        <img src={src} alt={title} />
        <p>{`Uploaded by ${username || 'anon'} on ${uploadDate}`}</p>
      </div>
    )
  }
}