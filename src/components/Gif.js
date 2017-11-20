import React, { Component } from 'react';

export default class Gif extends Component {
  constructor() {
    super();
    this.handleGifClick = this.handleGifClick.bind(this);
  }
  handleGifClick() {
    this.props.onGifClick(this.props);
  }
  render() {
    const { title, src } = this.props;
    return (
      <img onClick={() => this.handleGifClick()} src={src} alt={title} />
    )
  }
}