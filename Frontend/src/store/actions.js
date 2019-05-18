export const TOGGLE_SIGNED_IN = 'TOGGLE_SIGNED_IN';

export const toggleSignedIn = (signed_in) => ({
  type: TOGGLE_SIGNED_IN,
  payload: signed_in
})