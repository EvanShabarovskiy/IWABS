import * as React from 'react';
import { StatelessComponent } from 'react';
import { ICircle } from '../../interfaces/ICircle';

const Circle: StatelessComponent<ICircle> = ({ iconClass, title, value }) => (
  <div className="circle">
    <i className={iconClass} />
    <h5 className="circle-title">{title}</h5>
    <span className="circle-value number ">{value}</span>
  </div>
);

export default Circle;
