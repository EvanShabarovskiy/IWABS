import { Get } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';

export const GET_NEWS = 'GET_NEWS';

export const getNews = () => dispatch => {
  Get(
    api + 'news', 
    ({ news }) => dispatch({ type: GET_NEWS, payload: news }), 
    error => console.log(error)
  );
} 