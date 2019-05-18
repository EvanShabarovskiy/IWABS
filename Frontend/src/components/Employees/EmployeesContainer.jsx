import React from 'react';
import { Employees } from './Employees';
import { employees } from 'assets/constants/data/employees';
import { Employee } from './Employee';

export const EmployeesContainer = () => (
  <Employees>
    {employees.map(({ position, fullName, phone }, i) => (
      <Employee
        key={i}
        position={position}
        fullName={fullName}
        phone={phone}
      />
    ))}
  </Employees>
);
