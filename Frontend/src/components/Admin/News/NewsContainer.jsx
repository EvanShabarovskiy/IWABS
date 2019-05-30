import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { api } from '../../../assets/constants/api';
import News from './News';
import { connect } from 'react-redux'
import { getNews } from '../../../store/news/actions';
const NewsContainer = ({ news, getNews }) => {
  useEffect(() => getNews(), []);
  return <News news={news} />
};

const mapStateToProps = ({ news }) => ({
  news
})

const mapDispatchToProps = {
  getNews
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);