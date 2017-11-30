import React from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

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
  text-transform: uppercase;
  cursor: pointer;
`
export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.debouncedSubmit = debounce(this.handleSubmit, 450);
  }
  componentDidMount() {
    this._searchInput.focus();
  }
  handleChange(e) {
    e.preventDefault();
    const query = this._searchInput.value;
    if (!query) {
      this.props.gifSearchClear();
      return;
    }
    this.debouncedSubmit(query);
  }
  handleSubmit(query) {
    this.props.searchGifs(query);
  }
  render() {
    return (
      <Header>
        <Title>Search Giphy</Title>
        <form>
          <InputField
            type="text"
            placeholder="Search for a gif"
            innerRef={(input) =>
              { this._searchInput = input }}
            onChange={this.handleChange}
          />
          <InputSubmit
            type="submit"
            value="Go"
            onClick={this.handleChange}
          />
        </form>
      </Header>
    );
  }
}

SearchInput.defaultProps = {
  query: '',
};
