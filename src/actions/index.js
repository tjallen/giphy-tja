import keys from '../keys.json';

export const API_SEARCH_SUBMIT = 'API_SEARCH_SUBMIT';
export const API_SEARCH_SUCCESS = 'API_SEARCH_SUCCESS';
export const API_SEARCH_FAILURE = 'API_SEARCH_FAILURE';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const GIF_MODAL_SHOW = 'GIF_MODAL_SHOW';
export const GIF_MODAL_HIDE = 'GIF_MODAL_HIDE';

export const APICall = (query, offset = 0, limit = 10) => {
  return function (dispatch) {
  const request = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${keys.giphy}&limit=${limit}&offset=${offset}`;
    dispatch({ type: API_SEARCH_SUBMIT, query });
    return fetch(request)
      .then(response => response.json())
      .then(
        response => dispatch(receiveResults(response)),
        error => dispatch({ type: API_SEARCH_FAILURE, error })
      );
  };
};

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