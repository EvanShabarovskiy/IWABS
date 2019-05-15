import { combineReducers } from 'redux';
import { TOGGLE_SIGNED_IN } from './actions';

const defaultState = {
  signedIn: false
};

const generalReducer = (state = defaultState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case TOGGLE_SIGNED_IN:
      return {
        ...state,
        signedIn: action.payload
      };
  }

  return state;
};

export default combineReducers({
  general: generalReducer
});
