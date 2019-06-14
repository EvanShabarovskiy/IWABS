import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { get } from 'js-cookie';
import { toggleSignedIn, togglePageLoading } from './actions';
import { api } from '../assets/constants/api';
import thunk from 'redux-thunk';
import { Get } from '../assets/services/request.service';

export const store = createStore(rootReducer, applyMiddleware(thunk));

const getSignedIn = async () => {
  const token = await get('token');
  if (typeof(token) !== 'undefined') {
    await Get(
      api + 'auth', 
      () => {
        store.dispatch(toggleSignedIn(true));
        setTimeout(() => store.dispatch(togglePageLoading(false)), 500);
      },
      error => store.dispatch(togglePageLoading(false)),
      token
    )
  } else {
    store.dispatch(togglePageLoading(false));
  }
};

getSignedIn();
