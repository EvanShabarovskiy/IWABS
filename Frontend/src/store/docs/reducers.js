import { GET_DOCS } from "./actions";

const initialState = [];

export const docsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOCS:
      return payload;
  }

  return state;
}