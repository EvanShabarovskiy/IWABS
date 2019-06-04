import { GET_DONORS, CREATE_DONOR } from "./actions";

const initialState = []

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DONORS:
      return payload;
    case CREATE_DONOR:
      return [
        payload,
        ...state
      ]
    // case REMOVE_POST:
    //   return state.filter(post => post.id !== payload)
  }
  return state;
}