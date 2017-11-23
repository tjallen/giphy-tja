import React, { Component } from 'react';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.pagination !== null) return true;
    return false;
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
      <div>
        <button
          disabled={offset < resultsPerPage}
          onClick={this.handlePrevClick}
        >Prev</button>
        <span>Page {pageNumber} of {totalPages}</span>
        <button
          onClick={this.handleNextClick}
          disabled={offset + resultsPerPage >= total_count}
        >Next</button>
      </div>
    );
  }
}