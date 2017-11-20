import {
  GIF_SEARCH_REQUEST,
  GIF_SEARCH_SUCCESS,
  GIF_SEARCH_FAILURE,
} from './../actions';

const initialState = {
  isFetching: false,
  results: [],
  pagination: null,
}

const gifs = (state = initialState, action) => {
  switch(action.type) {
    case GIF_SEARCH_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case GIF_SEARCH_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        results: action.response.data,
        pagination: action.response.pagination,
      });
    }
    case GIF_SEARCH_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      })
    }
    default:
      return state;
  }
}

export default gifs;
