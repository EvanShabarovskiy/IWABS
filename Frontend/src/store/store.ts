import { createStore } from 'redux';
import rootReducer from './reducers';
import { get } from 'js-cookie';
import Axios from 'axios';
import { toggleSignedIn } from './actions';

export const store = createStore(rootReducer);

const getSignedIn = () => {
  const token = get('token');

  if (token) {
    Axios.get('http://***/api/auth', {
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
