import { GET_DONORS, CREATE_DONOR, REMOVE_DONOR } from "./actions";

const initialState = []

export const donorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DONORS:
      return payload;
    case CREATE_DONOR:
      return [
        payload,
        ...state
      ]
    case REMOVE_DONOR:
      return state.filter(post => post.id !== payload)
  }
  return state;
}