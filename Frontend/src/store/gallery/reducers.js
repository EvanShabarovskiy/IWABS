import { GET_IMAGES, REMOVE_IMAGE, ADD_IMAGE } from "./actions";

const initialState = []

export const imagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_IMAGES:
      return payload;
    case ADD_IMAGE:
      return [
        payload.addedImage,
        ...state
      ]
    case REMOVE_IMAGE:
      return state.filter(image => image.id !== payload)
  }
  return state;
}