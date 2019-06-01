import React from 'react';
import Achievement from './Achievement';
import { achievements } from 'assets/constants/data/achievements';

const Achievements = () => (
  <section className="section achievements">
    <h1 className="section-title">досягнення</h1>
    {achievements.map((achievement, i) => (
      <Achievement key={i} {...achievement} />
    ))}
  </section>
);

export default Achievements;
