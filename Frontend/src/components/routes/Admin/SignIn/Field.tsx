import * as React from 'react';
import { StatelessComponent } from 'react';
import { IField } from '../../../../interfaces/IField';

const Field: StatelessComponent<IField> = ({ name, value, change }) => (
  <label htmlFor={`id-${name}`} className="field">
    <span className="field-title" />
    <input
      id={`id-${name}`}
      name={name}
      value={value}
      type="text"
      className="input"
      onChange={change}
    />
  </label>
);

export default Field;
