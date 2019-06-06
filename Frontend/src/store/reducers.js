import { combineReducers } from 'redux';

import { TOGGLE_SIGNED_IN } from './actions';
import { newsReducer } from './news/reducers';
import { imagesReducer } from './images/reducers';
import { docsReducer } from './docs/reducers';

const defaultState = {
  signedIn: false
};

const generalReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case TOGGLE_SIGNED_IN:
      return {
        ...state,
        signedIn: payload
      };
  }

  return state;
};

export default combineReducers({
  general: generalReducer,
  news: newsReducer,
  docs: docsReducer,
  images: imagesReducer
});
