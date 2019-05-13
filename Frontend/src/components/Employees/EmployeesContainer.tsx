import * as React from 'react';
import { Employees } from './Employees';
import { employees_data } from '../../assets/constants/employees_data';
import { Employee } from './Employee';

export const EmployeesContainer = () => (
  <>
    <h6 className="sub-title">наші працівники</h6>
    <Employees>
      {employees_data.map(({ position, fullName, phone }, i) => (
        <Employee
          key={i}
          position={position}
          fullName={fullName}
          phone={phone}
        />
      ))}
    </Employees>
  </>
);
