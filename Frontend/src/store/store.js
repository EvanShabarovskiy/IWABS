import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { get } from 'js-cookie';
import { toggleSignedIn, togglePageLoading } from './actions';
import { api } from '../assets/constants/api';
import thunk from 'redux-thunk';
import { Get } from '../assets/services/request.service';

export const store = createStore(rootReducer, applyMiddleware(thunk));

const getSignedIn = () => {
  const token = get('token');
  if (token) {
    Get(
      api + 'auth', 
      () => {
        store.dispatch(toggleSignedIn(true));
        setTimeout(() => store.dispatch(togglePageLoading(false)), 500);
      },
      error => console.log(error),
      token
    )
  } else {
    store.dispatch(togglePageLoading(false));
  }
};

getSignedIn();
