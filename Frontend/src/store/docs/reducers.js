import { GET_DOCS, CREATE_DOC } from "./actions";

const initialState = [];

export const docsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOCS:
      return payload;
    case CREATE_DOC:
      return [
        payload,
        ...state
      ]
  }

  return state;
}