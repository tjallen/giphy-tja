import {
  GIF_MODAL_SHOW,
  GIF_MODAL_HIDE,
} from './../actions';

const modal = (state = false, action) => {
  switch (action.type) {
    case GIF_MODAL_SHOW:
      return true;
    case GIF_MODAL_HIDE:
      return false;
    default:
      return state;
  }
}

export default modal;