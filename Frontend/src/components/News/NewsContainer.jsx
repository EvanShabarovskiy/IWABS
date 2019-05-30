import React, { useEffect, useState } from 'react';
import News from './News';
import { connect } from 'react-redux'
import { getNews } from '../../store/news/actions';

const NewsContainer = ({ news, getNews }) => {
  useEffect(() => getNews(), []);
  return <News news={news} />
};


export default connect(
  ({ news }) => ({ news }), 
  { getNews }
)(NewsContainer);