import React, { Component } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  cursor: pointer;
`;

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
      <Img onClick={() => this.handleGifClick()} src={src} alt={title} />
    )
  }
}