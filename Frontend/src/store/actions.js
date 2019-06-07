import { remove } from 'js-cookie'

export const TOGGLE_SIGNED_IN = 'TOGGLE_SIGNED_IN';
export const TOGGLE_PAGE_LOADING = 'TOGGLE_PAGE_LOADING';
export const TOGGLE_FORM_LOADING = 'TOGGLE_FORM_LOADING';
export const SIGN_OUT = 'SIGN_OUT';

export const toggleSignedIn = value => ({
  type: TOGGLE_SIGNED_IN,
  payload: value
});

export const togglePageLoading = value => ({
  type: TOGGLE_PAGE_LOADING,
  payload: value
});

export const toggleFormLoading = value => ({
  type: TOGGLE_FORM_LOADING,
  payload: value
});

export const onSignOut = () => dispatch => {
  remove('token');
  dispatch(toggleSignedIn(false));
}