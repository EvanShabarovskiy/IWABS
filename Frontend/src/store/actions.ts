export const TOGGLE_SIGNED_IN: string = 'TOGGLE_SIGNED_IN';

export const toggleSignedIn = (signed_in: boolean) => ({
  type: TOGGLE_SIGNED_IN,
  payload: signed_in
})