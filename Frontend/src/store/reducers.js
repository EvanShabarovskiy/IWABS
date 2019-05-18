import { combineReducers } from 'redux';
import { TOGGLE_SIGNED_IN } from './actions';

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
  general: generalReducer
});
