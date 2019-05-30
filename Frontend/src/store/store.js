import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { get as getCookies } from 'js-cookie';
import { get } from 'axios';
import { toggleSignedIn } from './actions';
import { api } from '../assets/constants/api';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));

const getSignedIn = () => {
  const token = getCookies('token');
  if (token) {
    get(api + 'auth', {
      headers: { 
        Authorization: `Bearer ${token}` 
      }
    })
      .then(() => {
        store.dispatch(toggleSignedIn(true));
      })
      .catch(error => {
        !!error.response && console.log(error.response);
      });
  }
};

getSignedIn();
