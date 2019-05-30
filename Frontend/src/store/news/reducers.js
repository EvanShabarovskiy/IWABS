import { GET_NEWS, REMOVE_POST, CREATE_POST } from "./actions";

const initialState = []

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NEWS:
      return payload;
    case CREATE_POST:
      return [
        payload,
        ...state
      ]
    case REMOVE_POST:
      return state.filter(post => post.id !== payload)
  }
  return state;
}