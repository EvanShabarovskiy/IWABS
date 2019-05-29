import React from 'react';
import Post from './Post';
import AddPostContainer from '../../_Forms/AddPostContainer';

const News = ({ news }) => (
  <section className="news section">
    <h1 className="section-title">новини</h1>
    <AddPostContainer />

    {news.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </section>
);

export default News;