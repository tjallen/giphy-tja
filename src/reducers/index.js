import { combineReducers } from 'redux';
import search from './search';
import modal from './modal';

const rootReducer = combineReducers({
  search,
  isModalShowing: modal,
});

export default rootReducer;