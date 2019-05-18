import React from 'react';
import Circle from './Circle';
import { circles } from 'assets/constants/data/circles';

const Circles = () => (
  <section className="section circles">
    <h1 className="section-title">досягнення</h1>
    {circles.map(({ iconClass, title, value }, i) => (
      <Circle key={i} iconClass={iconClass} title={title} value={value} />
    ))}
  </section>
);

export default Circles;
