import React from 'react';
import Achievement from './Achievement';
import achievements from '../../assets/data/achievements';

const Achievements = () =>
  <section className="section achievements">
    <h1 className="section-title">досягнення</h1>
    { achievements.map(achievement => <Achievement key={achievement.title} {...achievement} />) }
  </section>

export default Achievements;
