import { REMOVE_MEDICINE, CREATE_MEDICINE, GET_MEDICINE } from "./actions";

const initialState = []

export const medicineReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MEDICINE:
      return payload;
    case CREATE_MEDICINE:
      return [
        payload,
        ...state
      ]
    case REMOVE_MEDICINE:
      return state.filter(post => post.id !== payload)
  }
  return state;
}