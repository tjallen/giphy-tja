import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;
const Title = styled.h1`
  font-size: 1.5em;
`;

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.query,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const query = 'maru';
    this.setState({ query });
    this.submitGifSearch(query);
  }
  handleChange(e) {
    this.setState({ query: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.submitGifSearch(this.state.query);
  }
  submitGifSearch(query) {
    this.props.searchGifs(query);
  }
  render() {
    return (
      <Header>
        <Title>Search Giphy</Title>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search for a gif"
            ref={(input) => { this.input = input }}
            value={this.state.query}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Go"
            onClick={this.handleSubmit}
          />
        </form>
      </Header>

    );
  }
}

SearchInput.defaultProps = {
  query: '',
};
