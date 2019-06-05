import React from 'react';
import employees from '../../assets/data/employees';
import Employee from './Employee';

const Employees = () =>
  <section className="section employees">
    <h1 className="section-title">наші працівники</h1>
    { employees.map(employee => <Employee key={employee.phone} {...employee} />) }
  </section>

export default Employees;