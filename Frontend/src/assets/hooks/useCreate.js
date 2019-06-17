import { useDispatch } from 'react-redux';
import { get } from 'js-cookie';
import { togglePageLoading } from '../../store/actions';
import { Post } from '../services/request.service';
import { api } from '../constants/api';

export const useCreate = () => {
  const dispatch = useDispatch();
  return (data, url, type) => {
    dispatch(togglePageLoading(true));
    Post(
      api + url, 
      data, 
      data => {
        dispatch({ type, payload: data });
        setTimeout(() => dispatch(togglePageLoading(false)), 500);
      }, 
      error => dispatch(togglePageLoading(false)), 
      get('token')
    );
  }
} 
