import { remove } from 'js-cookie'

export const TOGGLE_SIGNED_IN = 'TOGGLE_SIGNED_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const toggleSignedIn = value => ({
  type: TOGGLE_SIGNED_IN,
  payload: value
});

export const onSignOut = () => dispatch => {
  remove('token');
  dispatch(toggleSignedIn(false));
}