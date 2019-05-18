import React from 'react';
import { stat } from '../../assets/constants/api';

const Post = ({ post: { title, publishingDate, image, text } }) => (
  <div className="post">
    <h2 className="post-title">{title}</h2>
    <p className="publishing-date">{publishingDate}</p>
    <img className="img post-img" src={stat + image} />
    <p className="post-text">{text}</p>
    <button className="read-more btn">читати далі</button>   
  </div>
);

export default Post;