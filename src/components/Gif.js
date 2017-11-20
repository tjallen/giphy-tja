import React, { Component } from 'react';

export default class Gif extends Component {
  constructor() {
    super();
    this.handleGifClick = this.handleGifClick.bind(this);
  }
  handleGifClick(title) {
    alert(`ya clicked ${title}`)
  }
  render() {
    const { src, title } = this.props;
    return (
      <img onClick={() => this.handleGifClick(title)} src={src} alt={title} />
    )
  }
}