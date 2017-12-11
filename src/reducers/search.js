import { combineReducers } from 'redux';
import {
  API_SEARCH_SUBMIT,
  API_SEARCH_SUCCESS,
  API_SEARCH_FAILURE,
  CLEAR_SEARCH_RESULTS,
} from './../actions';

const query = (state = '', action) => {
  switch (action.type) {
    case API_SEARCH_SUBMIT:
      return action.query;
    default:
      return state;
  }
}

const results = (state = [], action) => {
  switch(action.type) {
    case API_SEARCH_SUCCESS:
      return action.response.data;
    case API_SEARCH_FAILURE:
    case CLEAR_SEARCH_RESULTS:
      return [];
    default:
      return state;
  }
}

const resultsPerPage = (state = 10, action) => {
  // TODO
  return state;
}

const pagination = (state = null, action) => {
  switch(action.type) {
    case CLEAR_SEARCH_RESULTS:
    case API_SEARCH_SUBMIT:
      return null;
    case API_SEARCH_SUCCESS:
      return action.response.pagination;
    case API_SEARCH_FAILURE:
    default:
      return state;
  }
}

const isFetching = (state = false, action) => {
  switch(action.type) {
    case API_SEARCH_SUBMIT:
      return true;
    case API_SEARCH_FAILURE:
    case API_SEARCH_SUCCESS:
      return false;
    default:
      return state;
  }
}

const search = combineReducers({
  query,
  results,
  resultsPerPage,
  pagination,
  isFetching,
});

export default search;