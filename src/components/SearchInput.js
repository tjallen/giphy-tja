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
  font-weight: normal;
`;

const Input = styled.input`
  padding: 10px;
`

const InputField = styled(Input)`
  border-radius: 3px 0 0 3px;
  border: none;
`

const InputSubmit = styled(Input)`
  background: salmon;
  border-radius: 0 3px 3px 0;
  border: none;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`
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
          <InputField
            type="text"
            placeholder="Search for a gif"
            ref={(input) => { this.input = input }}
            value={this.state.query}
            onChange={this.handleChange}
          />
          <InputSubmit
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
