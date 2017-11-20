export const GIF_SEARCH_REQUEST = 'GIF_SEARCH_REQUEST';
export const GIF_SEARCH_SUCCESS = 'GIF_SEARCH_SUCCESS';
export const GIF_SEARCH_FAILURE = 'GIF_SEARCH_FAILURE';

export const searchGifs = (dispatch) => {
  dispatch({ type: GIF_SEARCH_REQUEST });
  return fetch(`req url`)
    .then(res => res.json())
    .then(
      data => dispatch({ type: GIF_SEARCH_SUCCESS, data }),
      err => dispatch({ type: GIF_SEARCH_FAILURE, err })
    );
}