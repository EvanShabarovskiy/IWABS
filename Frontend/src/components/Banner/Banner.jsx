import React from 'react';
import motivation from '../../assets/data/motivation.json';

const Banner = ({ onClick }) => (
  <section className="banner">
    <div className="motivation">
      <h2 className="motivation-title">{motivation.title}</h2>
      <span className="motivation-text">{motivation.text}</span>
      <button className="btn feedback-btn" onClick={onClick}>замовити онлайн</button>
    </div>
  </section>
);

export default Banner;