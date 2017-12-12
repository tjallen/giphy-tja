import React, { Component } from 'react';
import styled from 'styled-components';
import range from 'lodash.range';
import { v4 } from 'uuid';

const PaginationWrapper = styled.div`
  margin: 10px auto;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 5px;
  border-radius: 3px;
  background-color: salmon;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  &:disabled {
    background: #eaeaea;
    color: #c1c1c1;
    cursor: default;
  }
`;

const PageButton = styled(Button)`
  color: ${props => props.current ? '#fff' : 'inherit'};
  background-color: ${props => props.current ? 'salmon' : '#fff'};
  border-radius: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
  padding: 10px;
  height: 40px;
  width: 40px;
`

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
    this.props.changePage(this.props.query, newOffset);
  }
  handleNextClick() {
    const { resultsPerPage } = this.props;
    const { offset } = this.props.pagination;
    this.props.changePage(this.props.query, offset + resultsPerPage);
  }
  handlePageClick(page) {
    const newOffset = page === 0 ? page : page * 10;
    this.props.changePage(this.props.query, newOffset);
  }
  returnClosestPages() {
    const { offset, total_count } = this.props.pagination;
    const { resultsPerPage } = this.props;
    const allPages = range(total_count / resultsPerPage);
    const currPage = offset > 0 ? offset / resultsPerPage : 0;
    const closestPages = allPages.filter(p => p < currPage + 3 && p > currPage - 3);
    return closestPages; 
  }
  render() {
    const { resultsPerPage } = this.props;
    const { offset, total_count } = this.props.pagination;
    const pageNumber = (offset / resultsPerPage);
    // const totalPages = Math.ceil(total_count / resultsPerPage);
    const pages = this.returnClosestPages();
    return (
      <PaginationWrapper>
        <Button
          disabled={offset < resultsPerPage}
          onClick={this.handlePrevClick}
        >&larr; Prev</Button>
        {pages.map((page, i) => {
          const current = page === pageNumber;
          return (
            <PageButton
              onClick={() => this.handlePageClick(page)}
              key={v4()}
              to={page}
              current={current}
            >{page + 1}</PageButton>
          );
        })}
        <Button
          onClick={this.handleNextClick}
          disabled={offset + resultsPerPage >= total_count}
        >Next &rarr;</Button>
      </PaginationWrapper>
    );
  }
}