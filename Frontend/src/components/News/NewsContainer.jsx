import React, { useEffect } from 'react';
import News from './News';
import { connect } from 'react-redux'
import { getNews } from '../../store/news/actions';

const NewsContainer = ({ signedIn, news, getNews }) => {
  useEffect(() => getNews(), []);
  return <News news={news} signedIn={signedIn} />
};

export default connect(
  ({ news, general: { signedIn } }) => ({ news, signedIn }), 
  { getNews }
)(NewsContainer);