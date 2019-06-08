import { GET_DOCS, CREATE_DOC, REMOVE_DOC } from "./actions";

const initialState = [];

export const docsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOCS:
      return payload;
    case CREATE_DOC:
      return [
        payload,
        ...state
      ];
    case REMOVE_DOC:
      return state.filter(doc => doc.id !== payload)
  }

  return state;
}