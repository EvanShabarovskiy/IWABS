import { Get, Post, Delete } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';
import { get } from 'js-cookie'

export const GET_IMAGES = 'GET_IMAGES';
export const ADD_IMAGE = 'ADD_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const getImages = () => dispatch => {
  Get(
    api + 'gallery', 
    ({ images }) => dispatch({ type: GET_IMAGES, payload: images }), 
    error => console.log(error)
  );
} 

export const addImage = data => dispatch => {
  Post(
    api + 'gallery', 
    data, 
    ({ addedImage }) => dispatch({ type: ADD_IMAGE, payload: addedImage }), 
    error => console.log('error', error), 
    get('token')
  );
}

export const removeImage = id => dispatch => {
  Delete(
    `${api}gallery/${id}`,
    () => dispatch({ type: REMOVE_IMAGE, payload: id }),
    error => console.log(error),
    get('token')
  )
}