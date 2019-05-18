import React from 'react';
import Post from './Post';

const News = ({ news }) => (
  <div className="news">
    {news.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);

export default News;