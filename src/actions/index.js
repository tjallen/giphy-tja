import keys from '../keys.json';

export const API_SEARCH_SUBMIT = 'API_SEARCH_SUBMIT';
export const API_SEARCH_SUCCESS = 'API_SEARCH_SUCCESS';
export const API_SEARCH_FAILURE = 'API_SEARCH_FAILURE';
export const PAGE_CHANGE_SUBMIT = 'PAGE_CHANGE_SUBMIT';
export const PAGE_CHANGE_SUCCESS = 'PAGE_CHANGE_SUCCESS';
export const PAGE_CHANGE_FAILURE = 'PAGE_CHANGE_FAILURE';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const GIF_MODAL_SHOW = 'GIF_MODAL_SHOW';
export const GIF_MODAL_HIDE = 'GIF_MODAL_HIDE';

export const searchSubmit = (query, offset, limit) => {
  return function (dispatch) {
    dispatch({ type: API_SEARCH_SUBMIT, query });
    return apiCall(query, offset, limit)
      .then(response => response.json())
      .then(
        response => dispatch(receiveResults(response)),
        error => dispatch({ type: API_SEARCH_FAILURE, error })
      );
  };
};

export const changePage = (query, newOffset, limit) => {
  return function (dispatch) {
    dispatch({ type: PAGE_CHANGE_SUBMIT });
    return apiCall(query, newOffset, limit)
      .then(response => response.json())
      .then(response => dispatch({
        type: PAGE_CHANGE_SUCCESS,
        response,
      }))
      .catch(err => dispatch({
        type: PAGE_CHANGE_FAILURE,
        err,
      }))
  }
}

const apiCall = (query, offset = 0, limit = 10) => {
  return fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${keys.giphy}&limit=${limit}&offset=${offset}`)
}

const receiveResults = (response) => {
  return {
    type: API_SEARCH_SUCCESS, response
  }
}

export const gifModalShow = (contents) => {
  return {
    type: GIF_MODAL_SHOW,
    contents,
  }
};

export const gifModalHide = () => {
  return {
    type: GIF_MODAL_HIDE,
  }
};

export const gifSearchClear = () => (
  { type: CLEAR_SEARCH_RESULTS }
);