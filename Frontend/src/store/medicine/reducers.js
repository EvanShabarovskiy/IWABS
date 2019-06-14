import { REMOVE_MEDICINE_ITEM, CREATE_MEDICINE_ITEM, GET_MEDICINE } from "./actions";

const initialState = []

export const medicineReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MEDICINE:
      return payload;
    case CREATE_MEDICINE_ITEM:
      return [
        payload,
        ...state
      ]
    case REMOVE_MEDICINE_ITEM:
      return state.filter(post => post.id !== payload)
  }
  return state;
}