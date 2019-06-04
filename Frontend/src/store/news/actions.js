import { Get, Post, Delete } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';
import { get } from 'js-cookie'

export const GET_NEWS = 'GET_NEWS';
export const CREATE_POST = 'CREATE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const getNews = () => dispatch => {
  Get(
    api + 'news', 
    ({ news }) => dispatch({ type: GET_NEWS, payload: news }), 
    error => console.log(error)
  );
} 

export const createPost = data => dispatch => {
  Post(
    api + 'news', 
    data, 
    ({ createdPost }) => dispatch({ type: CREATE_POST, payload: createdPost }), 
    error => console.log('error', error), 
    get('token')
  );
}

export const removePost = id => dispatch => {
  Delete(
    `${api}news/${id}`,
    () => dispatch({ type: REMOVE_POST, payload: id }),
    error => console.log(error),
    get('token')
  )
}