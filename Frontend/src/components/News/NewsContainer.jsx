import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { api } from '../../assets/constants/api';
import News from './News';
import { connect } from 'react-redux'
import { setNews } from '../../store/news/actions';
const NewsContainer = ({ news, setNews }) => {
  useEffect(() => {
    getNews();
  }, []);
  const getNews = () => 
    Axios.get(api + 'news')
      .then(({ data }) => setNews(data.news))
      .catch(error => !!error.response && console.log(error.response));

  return <News news={news} />
  
};

const mapStateToProps = ({ news }) => ({
  news
})

const mapDispatchToProps = {
  setNews
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);