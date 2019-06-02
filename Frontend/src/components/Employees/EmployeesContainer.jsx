import React from 'react';
import { Employees } from './Employees';
import employees from '../../assets/data/employees';
import { Employee } from './Employee';

export const EmployeesContainer = () => (
  <Employees>
    { employees.map(employee => <Employee key={employee.phone} {...employee} />) }
  </Employees>
);
