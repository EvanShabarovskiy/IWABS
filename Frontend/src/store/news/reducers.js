import { GET_NEWS } from "./actions";

const initialState = []

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NEWS:
      return payload;
  }
  return state;
}