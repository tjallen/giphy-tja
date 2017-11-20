import {
  GIF_SEARCH_REQUEST,
  GIF_SEARCH_SUCCESS,
  GIF_SEARCH_FAILURE,
} from './../actions';

const initialState = {
  isFetching: false,
  results: [],
}

const gifs = (state = initialState, action) => {
  switch(action.type) {
    case GIF_SEARCH_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
        results: state.results,
      });
    }
    case GIF_SEARCH_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        results: action.data,
      });
    }
    case GIF_SEARCH_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false,
        results: [],
        error: action.err,
      })
    }
    default:
      return state;
  }
}

export default gifs;
