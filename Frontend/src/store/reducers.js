import { combineReducers } from 'redux';

import { TOGGLE_SIGNED_IN, TOGGLE_PAGE_LOADING, TOGGLE_FORM_LOADING } from './actions';
import { newsReducer } from './news/reducers';
import { imagesReducer } from './gallery/reducers';
import { docsReducer } from './docs/reducers';

const defaultState = {
  signedIn: false,
  pageLoading: false,
  formLoading: false
};

const generalReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case TOGGLE_SIGNED_IN:
      return {
        ...state,
        signedIn: payload
      };
    case TOGGLE_PAGE_LOADING:
      return {
        ...state,
        pageLoading: payload
      };
    case TOGGLE_FORM_LOADING:
      return {
        ...state,
        formLoading: payload
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
