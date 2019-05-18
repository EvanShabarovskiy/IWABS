import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { api } from '../../assets/constants/api';
import News from './News';

const NewsContainer = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
    return () => {
    };
  }, []);
  const getNews = () => 
    Axios.get(api + 'news')
      .then(({ data }) => setNews(data))
      .catch(error => !!error.response && console.log(error.response));
  return (
    <News news={news} />
  );
};

export default NewsContainer;