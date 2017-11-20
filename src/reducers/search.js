import { combineReducers } from 'redux';
import {
  GIF_SEARCH_REQUEST,
  GIF_SEARCH_SUCCESS,
  GIF_SEARCH_FAILURE,
} from './../actions';

const resultsArray = (state = [], action) => {
  switch(action.type) {
    case GIF_SEARCH_SUCCESS:
      return action.response.data;
    case GIF_SEARCH_FAILURE:
      return [];
    default:
      return state;
  }
}

const isFetching = (state = false, action) => {
  switch(action.type) {
    case GIF_SEARCH_REQUEST:
      return true;
    case GIF_SEARCH_FAILURE:
    case GIF_SEARCH_SUCCESS:
      return false;
    default:
      return state;
  }
}

const search = combineReducers({
  results: resultsArray,
  isFetching,
});

export default search;