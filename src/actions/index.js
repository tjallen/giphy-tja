import keys from '../keys.json';

export const GIF_SEARCH_REQUEST = 'GIF_SEARCH_REQUEST';
export const GIF_SEARCH_SUCCESS = 'GIF_SEARCH_SUCCESS';
export const GIF_SEARCH_FAILURE = 'GIF_SEARCH_FAILURE';
export const GIF_MODAL_SHOW = 'GIF_MODAL_SHOW';
export const GIF_MODAL_HIDE = 'GIF_MODAL_HIDE';

export const searchGifs = (query) => {
  const request = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${keys.giphy}&limit=10`;
  return function(dispatch) {
    dispatch({ type: GIF_SEARCH_REQUEST });
    return fetch(request)
      .then(response => response.json())
      .then(
        response => dispatch({ type: GIF_SEARCH_SUCCESS, response }),
        error => dispatch({ type: GIF_SEARCH_FAILURE, error })
      );
  };
};

export const gifModalShow = (id) => {
  return {
    type: GIF_MODAL_SHOW,
    id,
  }
};

export const gifModalHide = (id) => {
  return {
    type: GIF_MODAL_HIDE,
    id,
  }
};