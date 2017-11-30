import React, { Component } from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  width: 60%;
  margin: 10px auto;
`;

const PaginationMeta = styled.span`
  margin: 0 20px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 3px;
  border: none;
  background-color: salmon;
  border-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  &:disabled {
    background: #eaeaea;
    color: #c1c1c1;
    cursor: default;
  }
`;

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  handlePrevClick() {
    const { resultsPerPage } = this.props;
    const { offset } = this.props.pagination;
    const newOffset = Math.max(0, offset - resultsPerPage);
    this.props.searchGifs(this.props.query, newOffset);
  }
  handleNextClick() {
    const { resultsPerPage } = this.props;
    const { offset } = this.props.pagination;
    this.props.searchGifs(this.props.query, offset + resultsPerPage);
  }
  render() {
    if (this.props.pagination === null)  return null;
    const { resultsPerPage } = this.props;
    const { offset, total_count } = this.props.pagination;
    const pageNumber = (offset / resultsPerPage) + 1;
    const totalPages = Math.ceil(total_count / resultsPerPage);
    return (
      <PaginationWrapper>
        <Button
          disabled={offset < resultsPerPage}
          onClick={this.handlePrevClick}
        >&larr; Prev</Button>
        <PaginationMeta>Page {pageNumber} of {totalPages}</PaginationMeta>
        <Button
          onClick={this.handleNextClick}
          disabled={offset + resultsPerPage >= total_count}
        >Next &rarr;</Button>
      </PaginationWrapper>
    );
  }
}