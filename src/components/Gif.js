import React, { Component } from 'react';

export default class Gif extends Component {
  constructor() {
    super();
    this.handleGifClick = this.handleGifClick.bind(this);
  }
  handleGifClick(id) {
    this.props.onGifClick(id);
  }
  render() {
    const { id, src, title } = this.props;
    return (
      <img onClick={() => this.handleGifClick(id)} src={src} alt={title} />
    )
  }
}