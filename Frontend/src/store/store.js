import { createStore } from 'redux';
import rootReducer from './reducers';
import { get as getCookies } from 'js-cookie';
import { get } from 'axios';
import { toggleSignedIn } from './actions';

export const store = createStore(rootReducer);

const getSignedIn = () => {
  const token = getCookies('token');

  if (token) {
    get('http://***/api/auth', {
      headers: { Authorization: `Bearer ${token}` }
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
