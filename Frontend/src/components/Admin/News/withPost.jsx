import React from 'react';
import { stat, api } from '../../../assets/constants/api';
import Axios from 'axios';
import { getNews } from '../../../store/news/actions';
import { connect } from 'react-redux'

const withPost = Component => {

  const Wrapper = ({ news, getNews, post }) => {

    const onRemove = id => {
      if(confirm('Ви дійсно хочете видалити цей запис?'))
      {
        console.log('deleted');
      }
    
      Axios.delete(`${api}news/${id}`)
        .then(() => {
          news = news.filter(post => post.id != id);
          getNews(news);
        })
        .catch(error => !!error.response && console.log(error.response))
    }
    post['src'] = stat + post.image;
    post['onRemove'] = () => onRemove(post.id);
    return (
      <Component post={post} />
    );
  }
  const mapStateToProps = ({ news }) => ({
    news
  });
  
  const mapDispatchToProps = {
    getNews
  };
  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
};

export default withPost;