import { connect } from 'react-redux';
import SearchInput from './../components/SearchInput';
import {
  APICall,
  gifSearchClear,
} from './../actions';

const mapStateToProps = (state) => {
  const {
    isFetching,
    query,
  } = state.search;
  return {
    isFetching,
    query,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    APICall: (query) => {
      dispatch(APICall(query))
    }, 
    gifSearchClear: () => {
      dispatch(gifSearchClear())
    },
  }
};

const SearchInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);

export default SearchInputContainer;
