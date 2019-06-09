import { Get, Post, Delete } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';
import { get } from 'js-cookie'
import { togglePageLoading } from '../actions';

export const GET_NEWS = 'GET_NEWS';
export const CREATE_POST = 'CREATE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const getNews = () => dispatch => {
  dispatch(togglePageLoading(true));
  Get(
    api + 'news', 
    ({ news }) => {
      dispatch({ type: GET_NEWS, payload: news });
      setTimeout(() => dispatch(togglePageLoading(false)), 500);
    }, 
    error => console.log(error)
  );
} 

export const createPost = data => dispatch => {
  dispatch(togglePageLoading(true));
  Post(
    api + 'news', 
    data, 
    ({ createdPost }) => {
      dispatch({ type: CREATE_POST, payload: createdPost });
      setTimeout(() => dispatch(togglePageLoading(false)), 500);
    }, 
    error => console.log('error', error), 
    get('token')
  );
}

export const removePost = id => dispatch => {
  dispatch(togglePageLoading(true));
  Delete(
    `${api}news/${id}`,
    () => {
      dispatch({ type: REMOVE_POST, payload: id });
      setTimeout(() => dispatch(togglePageLoading(false)), 500);
    },
    error => console.log(error),
    get('token')
  )
}