import { Get, Post, Delete } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';
import { get } from 'js-cookie'
import { togglePageLoading } from '../actions';

export const GET_IMAGES = 'GET_IMAGES';
export const ADD_IMAGE = 'ADD_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const getImages = () => dispatch => {
  dispatch(togglePageLoading(true));

  Get(
    api + 'gallery', 
    ({ images }) => {
      dispatch({ type: GET_IMAGES, payload: images });
      setTimeout(() => dispatch(togglePageLoading(false)), 500);
    }, 
    error => console.log(error)
  );
} 

export const addImage = data => dispatch => {
  dispatch(togglePageLoading(true));
  Post(
    api + 'gallery', 
    data, 
    ({ addedImage }) => {
      dispatch({ type: ADD_IMAGE, payload: addedImage });
      setTimeout(() => dispatch(togglePageLoading(false)), 500);
    }, 
    error => console.log('error', error), 
    get('token')
  );
}

export const removeImage = id => dispatch => {
  dispatch(togglePageLoading(true));
  Delete(
    `${api}gallery/${id}`,
    () => {
      dispatch({ type: REMOVE_IMAGE, payload: id });
      setTimeout(() => dispatch(togglePageLoading(false)), 500);
    },
    error => console.log(error),
    get('token')
  )
}