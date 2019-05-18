import React from 'react';
import { stat } from '../../assets/constants/api';

const Post = ({ post: { title, publishingDate, image, text } }) => (
  <div className="post">
    <h2 className="post-title">{title}</h2>
    <p className="publishing-date">дата публікації: <span className="number bold">{publishingDate}</span></p>
    <img className="img post-img" src={stat + image} />
    <p className="post-text">{text}</p>
    <button className="learn-more-btn">Більше</button>   
  </div>
);

export default Post;