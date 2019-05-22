import { SET_NEWS } from "./actions";

const initialState = []

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEWS:
      return payload;
  }
  return state;
}