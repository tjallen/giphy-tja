import keys from '../keys.json';

export const GIF_SEARCH_REQUEST = 'GIF_SEARCH_REQUEST';
export const GIF_SEARCH_SUCCESS = 'GIF_SEARCH_SUCCESS';
export const GIF_SEARCH_FAILURE = 'GIF_SEARCH_FAILURE';
export const GIF_SEARCH_CLEAR = 'GIF_SEARCH_CLEAR';
export const GIF_MODAL_SHOW = 'GIF_MODAL_SHOW';
export const GIF_MODAL_HIDE = 'GIF_MODAL_HIDE';

export const APICall = (query, offset = 0, limit = 10) => {
  const request = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${keys.giphy}&limit=${limit}&offset=${offset}`;
  return function(dispatch) {
    dispatch({ type: GIF_SEARCH_REQUEST, query });
    return fetch(request)
      .then(response => response.json())
      .then(
        response => dispatch(receiveResults(response)),
        error => dispatch({ type: GIF_SEARCH_FAILURE, error })
      );
  };
};

const receiveResults = (response) => {
  return {
    type: GIF_SEARCH_SUCCESS, response
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
  { type: GIF_SEARCH_CLEAR }
);