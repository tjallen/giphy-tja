import {
  GIF_MODAL_SHOW,
  GIF_MODAL_HIDE,
} from './../actions';

const modal = (state = null, action) => {
  switch (action.type) {
    case GIF_MODAL_SHOW:
      return action.contents;
    case GIF_MODAL_HIDE:
      return null;
    default:
      return state;
  }
}

export default modal;