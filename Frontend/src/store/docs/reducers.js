import { SET_DOCS } from "./actions";

const initialState = [];

export const docsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DOCS:
      return payload;
  }

  return state;
}